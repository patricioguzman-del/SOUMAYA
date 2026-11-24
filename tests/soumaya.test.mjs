import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {enquiryText,emailLink,whatsappLink,validateEnquiry} from '../src/lib/enquiry.ts';
import {route,resolvePage,languages} from '../src/lib/routes.ts';
import {brand} from '../src/data/brand.ts';
import {languageHome} from '../src/lib/language-home.mjs';
const read=path=>readFileSync(new URL(path,import.meta.url),'utf8');
const synced=existsSync(new URL('../src/data/auba/listings.json',import.meta.url));
const base={name:'Ana López',phone:'+34 600 111 222',email:'',message:'',intent:'buy',floorPlans:false};

test('the letter is addressed to Soumaya in each language',()=>{
 assert.match(enquiryText(base,'en'),/^Dear Soumaya,/);
 assert.match(enquiryText(base,'es'),/^Hola, Soumaya:/);
 assert.match(enquiryText({...base,intent:'rent'},'fr'),/^Bonjour Soumaya,\n\nJ’aimerais louer une villa à Ibiza\./);
});
test('the letter never mentions AUBA',()=>{
 for(const lang of languages)for(const intent of ['buy','sell','rent']){
  const text=enquiryText({...base,intent,property:'Ses Calas (SM-002)',floorPlans:true,writingFor:'client',language:'fr'},lang);
  assert.doesNotMatch(text+emailLink(text,'Ses Calas',lang)+whatsappLink(lang,'Ses Calas'),/auba/i);
 }
});
test('email and WhatsApp go to Soumaya',()=>{
 assert.ok(emailLink('x',undefined,'en').startsWith(`mailto:${brand.email}?`));
 assert.ok(whatsappLink('es').startsWith(`https://wa.me/${brand.whatsapp}?`));
});
test('a name and one way to reply are required',()=>{
 assert.deepEqual(validateEnquiry({...base,phone:''}),{contact:true});
 assert.deepEqual(validateEnquiry(base),{});
});
test('every page has an address in all three languages, and back again',()=>{
 for(const page of ['home','buy','sell','rentals','about','living','contact','legal','privacy','cookies'])for(const lang of languages){
  const path=route(lang,page);const slug=path.slice(lang.length+2).replace(/\/$/,'');
  assert.equal(resolvePage(lang,slug),page,`${lang} ${page}`);
 }
});
test('homes for sale live inside Buy',()=>{
 for(const lang of languages)assert.equal(route(lang,'properties'),route(lang,'buy')+'#homes',lang);
});
test('the bare address follows the browser language',()=>{
 assert.equal(languageHome('fr-FR,fr;q=0.9,en;q=0.8'),'/fr/');
 assert.equal(languageHome('es-ES'),'/es/');
 assert.equal(languageHome('de-DE'),'/en/');
});
test('interface wording has the same keys in all three languages',()=>{
 const src=read('../src/data/ui.ts');const ui=JSON.parse(src.slice(src.indexOf('{'),src.lastIndexOf('}')+1));
 const keys=Object.keys(ui.en).sort();
 for(const lang of ['es','fr'])assert.deepEqual(Object.keys(ui[lang]).sort(),keys,lang);
});
test('synced listings: public only, no AUBA mentions, photographs present',{skip:!synced&&'run npm run sync first'},()=>{
 const listings=JSON.parse(read('../src/data/auba/listings.json'));const images=JSON.parse(read('../src/data/auba/images.json'));
 assert.ok(listings.length>0);
 for(const listing of listings){
  assert.notEqual(listing.status,'off-market');
  assert.doesNotMatch(JSON.stringify(listing),/auba/i);
  assert.equal(listing.advisor,undefined);
  for(const key of [listing.heroImage,listing.cardImage]){assert.ok(images[key],key);assert.ok(existsSync(new URL(`../public/images/${key}-1600.webp`,import.meta.url))||images[key].width<1600,key);}
 }
});
