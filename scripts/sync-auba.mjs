// Pulls the property listings from AUBA, so both websites always show the same homes.
//   node scripts/sync-auba.mjs
// Runs before every build (npm run build). AUBA is the single source: edit a home there, rebuild here.
//
// Where it reads AUBA from, first match wins:
//   1. AUBA_SOURCE_DIR   a local copy of AUBA's website folder (…/auba-ibiza/website)
//   2. ../auba-ibiza/website, if it sits next to this project
//   3. GitHub: AUBA_GITHUB_TOKEN (read-only token for the AUBA repo), AUBA_REPO (default
//      patricioguzman-del/auba-ibiza), AUBA_REF (default main). This is what Vercel uses.
//
// What it copies, and nothing else:
//   - every public listing (off-market homes stay on AUBA, behind its password)
//   - each listing's photographs, and the photograph each home is known by (its façade)
//   - which area of the island each home is in
// What it removes: the advisor field, and AUBA's reference prefix (AUBA-004 becomes SM-004).
// A listing that still mentions AUBA anywhere stops the build, so the name can never slip through.
import {readFileSync,writeFileSync,mkdirSync,existsSync,readdirSync,copyFileSync,rmSync,mkdtempSync} from 'node:fs';
import {join,dirname} from 'node:path';import {fileURLToPath} from 'node:url';import {execFileSync} from 'node:child_process';import {tmpdir} from 'node:os';

const here=fileURLToPath(new URL('..',import.meta.url));
const out=join(here,'src/data/auba');const imagesOut=join(here,'public/images');
const REF_PREFIX='SM-';const WIDTHS=[480,960,1600,2400];

async function locate(){
 if(process.env.AUBA_SOURCE_DIR)return {dir:process.env.AUBA_SOURCE_DIR,from:'local folder (AUBA_SOURCE_DIR)'};
 const sibling=join(here,'../auba-ibiza/website');
 if(existsSync(join(sibling,'src/data/images.json')))return {dir:sibling,from:'local folder (../auba-ibiza)'};
 const token=process.env.AUBA_GITHUB_TOKEN;
 if(!token){
  // No source: keep the last synced copy if there is one (local preview), otherwise stop.
  if(existsSync(join(out,'listings.json'))){console.warn('sync-auba: no AUBA source found, keeping the listings already synced.');return undefined;}
  throw new Error('sync-auba: cannot find AUBA. Set AUBA_GITHUB_TOKEN (on Vercel) or AUBA_SOURCE_DIR (locally).');
 }
 const repo=process.env.AUBA_REPO||'patricioguzman-del/auba-ibiza';const ref=process.env.AUBA_REF||'main';
 const response=await fetch(`https://api.github.com/repos/${repo}/tarball/${ref}`,{headers:{Authorization:`Bearer ${token}`,Accept:'application/vnd.github+json','User-Agent':'soumaya-sync'}});
 if(!response.ok)throw new Error(`sync-auba: GitHub answered ${response.status} for ${repo}@${ref}. Check AUBA_GITHUB_TOKEN.`);
 const temp=mkdtempSync(join(tmpdir(),'auba-'));const archive=join(temp,'auba.tar.gz');
 writeFileSync(archive,Buffer.from(await response.arrayBuffer()));
 execFileSync('tar',['-xzf',archive,'-C',temp,'--wildcards','*/website/src/data/*','*/website/public/images/*']);
 const root=readdirSync(temp).find(name=>name!=='auba.tar.gz');
 return {dir:join(temp,root,'website'),from:`GitHub ${repo}@${ref}`};
}

const source=await locate();
if(source){
 const data=join(source.dir,'src/data');
 const dims=JSON.parse(readFileSync(join(data,'images.json'),'utf8'));
 // Listings: any JSON file in src/data with a reference and a status.
 const all=readdirSync(data).filter(name=>name.endsWith('.json')&&name!=='images.json').map(name=>JSON.parse(readFileSync(join(data,name),'utf8'))).filter(item=>item.reference&&item.status);
 const listings=all.filter(item=>item.status!=='off-market').map(item=>{
  const {advisor,...rest}=item;
  return {...rest,ref:String(rest.ref||'').replace(/^AUBA-/,REF_PREFIX)};
 }).sort((a,b)=>a.reference.localeCompare(b.reference));
 for(const listing of listings){
  const text=JSON.stringify(listing);
  if(/auba/i.test(text))throw new Error(`sync-auba: ${listing.reference} mentions AUBA. Remove it in AUBA before syncing.`);
 }
 // Each home's façade photograph, from AUBA's homepage.ts (a plain object literal).
 const homepageSrc=readFileSync(join(data,'homepage.ts'),'utf8').replace(/\/\/.*$/gm,'');
 const literal=homepageSrc.slice(homepageSrc.indexOf('{'),homepageSrc.lastIndexOf('}')+1);
 const homepage=Function(`return (${literal});`)();
 const references=new Set(listings.map(listing=>listing.reference));
 const facades=Object.fromEntries(Object.entries(homepage.houseList).filter(([reference,facade])=>references.has(reference)&&!facade.image.startsWith('private/')));
 // Which area each home is in, from AUBA's ibiza.ts.
 const ibiza=readFileSync(join(data,'ibiza.ts'),'utf8');
 const areaHomes=Object.fromEntries([...ibiza.matchAll(/\{id:'(\w+)'[^\n]*?homes:\[([^\]]*)\]/g)].map(([,id,homes])=>[id,[...homes.matchAll(/'([^']+)'/g)].map(m=>m[1]).filter(reference=>references.has(reference))]));
 // Photographs: every string in a listing or its façade that names a known photograph.
 const used=new Set();
 const walk=value=>{if(typeof value==='string'){if(dims[value]&&!value.startsWith('private/'))used.add(value);}else if(Array.isArray(value))value.forEach(walk);else if(value&&typeof value==='object')Object.values(value).forEach(walk);};
 listings.forEach(walk);Object.values(facades).forEach(walk);
 // Chapter photographs are named by the listing's prefix plus a key (sun- + living = sun-living).
 for(const listing of listings){
  const keys=[listing.settingPhoto,...Object.keys(listing.en.captions||{}),...listing.chapters.flatMap(chapter=>chapter.blocks.flatMap(block=>block.photos))];
  for(const key of keys){const name=listing.imagePrefix+key;if(dims[name])used.add(name);}
 }
 mkdirSync(imagesOut,{recursive:true});
 const images={};let copied=0;
 for(const key of [...used].sort()){
  images[key]=dims[key];
  for(const width of WIDTHS){
   const file=`${key}-${width}.webp`;const from=join(source.dir,'public/images',file);
   if(existsSync(from)){const to=join(imagesOut,file);mkdirSync(dirname(to),{recursive:true});copyFileSync(from,to);copied++;}
  }
 }
 rmSync(out,{recursive:true,force:true});mkdirSync(out,{recursive:true});
 const write=(name,value)=>writeFileSync(join(out,name),JSON.stringify(value,null,1)+'\n');
 write('listings.json',listings);write('facades.json',facades);write('area-homes.json',areaHomes);write('images.json',images);
 write('meta.json',{source:source.from,syncedAt:new Date().toISOString(),listings:listings.length});
 console.log(`sync-auba: ${listings.length} listings, ${used.size} photographs (${copied} files) from ${source.from}.`);
}

// French: AUBA writes listings in English and Spanish. Soumaya's French versions live in src/data/fr/,
// each stamped with the English text it was translated from. When AUBA changes the English, the French is
// stale: the site shows English for that home until the French is updated, and this report says which.
const listings=JSON.parse(readFileSync(join(out,'listings.json'),'utf8'));
const frDir=join(here,'src/data/fr');const missing=[],stale=[];
for(const listing of listings){
 const file=join(frDir,`${listing.reference}.json`);
 if(!existsSync(file)){missing.push(listing.reference);continue;}
 const fr=JSON.parse(readFileSync(file,'utf8'));
 if(fr.sourceHash!==englishHash(listing))stale.push(listing.reference);
}
if(missing.length)console.log(`sync-auba: French still to write for ${missing.length}: ${missing.join(', ')}`);
if(stale.length)console.log(`sync-auba: French out of date (English changed on AUBA) for: ${stale.join(', ')}`);

// Same formula as src/lib/hash.ts.
export function englishHash(listing){
 const text=JSON.stringify(listing.en);let h1=0xdeadbeef,h2=0x41c6ce57;
 for(let i=0;i<text.length;i++){const ch=text.charCodeAt(i);h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677);}
 h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);
 h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);
 return (4294967296*(2097151&h2)+(h1>>>0)).toString(16);
}
