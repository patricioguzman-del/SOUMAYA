export const languages = ['en', 'es', 'fr'] as const;
export type Language = typeof languages[number];
export type Page = 'home' | 'properties' | 'property' | 'services' | 'about' | 'living' | 'area' | 'contact' | 'legal' | 'privacy' | 'cookies';
type Section = Exclude<Page,'property'|'area'>;
const slugs: Record<Language, Record<Section,string>> = {
 en:{home:'',properties:'properties',services:'services',about:'about',living:'ibiza-perspective',contact:'contact',legal:'legal-notice',privacy:'privacy',cookies:'cookies'},
 es:{home:'',properties:'propiedades',services:'servicios',about:'sobre-soumaya',living:'perspectiva-ibiza',contact:'contacto',legal:'aviso-legal',privacy:'privacidad',cookies:'cookies'},
 fr:{home:'',properties:'proprietes',services:'services',about:'a-propos',living:'regard-sur-ibiza',contact:'contact',legal:'mentions-legales',privacy:'confidentialite',cookies:'cookies'}
};
// The six areas of the island, each its own page under Ibiza Perspective, with a slug in each language.
// Their words and photographs are in src/data/ibiza.ts, keyed by the same ids.
export const areaSlugs = {
 heart:{en:'heart-of-the-island',es:'el-corazon-de-la-isla',fr:'le-coeur-de-l-ile'},
 east:{en:'santa-eulalia-and-the-east',es:'santa-eulalia-y-el-este',fr:'santa-eulalia-et-l-est'},
 north:{en:'the-north',es:'el-norte',fr:'le-nord'},
 west:{en:'the-west-and-southwest',es:'el-oeste-y-el-suroeste',fr:'l-ouest-et-le-sud-ouest'},
 town:{en:'ibiza-town',es:'ibiza-ciudad',fr:'ibiza-ville'},
 south:{en:'the-south',es:'el-sur',fr:'le-sud'}
} as const;
export type AreaId = keyof typeof areaSlugs;
export function route(lang:Language,page:Page,reference='ses-calas'){
 const slug=page==='property'?`${slugs[lang].properties}/${encodeURIComponent(reference)}`:page==='area'?`${slugs[lang].living}/${areaSlugs[(reference in areaSlugs?reference:'heart') as AreaId][lang]}`:slugs[lang][page];
 return `/${lang}/${slug}${page==='home'?'':'/'}`;
}
export function propertyReference(lang:Language,slug:string):string|undefined{
 const parts=slug.replace(/\/$/,'').split('/');
 return parts.length===2&&parts[0]===slugs[lang].properties&&/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(parts[1])?parts[1]:undefined;
}
export function areaReference(lang:Language,slug:string):AreaId|undefined{
 const parts=slug.replace(/\/$/,'').split('/');
 if(parts.length!==2||parts[0]!==slugs[lang].living)return undefined;
 return (Object.keys(areaSlugs) as AreaId[]).find(id=>areaSlugs[id][lang]===parts[1]);
}
export function resolvePage(lang:Language,slug:string):Page|undefined{
 if(propertyReference(lang,slug))return 'property';
 if(areaReference(lang,slug))return 'area';
 return (Object.keys(slugs[lang]) as Section[]).find(key=>slugs[lang][key]===slug.replace(/\/$/,''));
}
export const languageNames:Record<Language,string>={en:'English',es:'Español',fr:'Français'};
