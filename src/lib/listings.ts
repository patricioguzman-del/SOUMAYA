// The homes, as synced from AUBA (scripts/sync-auba.mjs writes src/data/auba/). Never edit those files here:
// AUBA is the one place listings are edited. Soumaya adds only the French versions (src/data/fr/<reference>.json).
import synced from '../data/auba/listings.json';
import facades from '../data/auba/facades.json';
import {areaOf} from '../data/ibiza';
import {route,type AreaId,type Language} from './routes';
import {englishHash} from './hash';

type Raw=(typeof synced)[number];
type Copy=Raw['en'];
export type Listing=Raw&{fr:Copy;frenchPending:boolean};
export interface Block {layout:'intro'|'spread'|'montage'|'suite'|'row'|'pair'|'duo';variant?:string;label?:string;heading?:string;text?:string[];note?:string;photos:string[];}
export interface Chapter {id?:string;nav?:string;band?:boolean;blocks:Block[];}
export const chaptersOf=(listing:Listing)=>listing.chapters as Chapter[];

// French copy: used only while it matches the English it was translated from; otherwise the home shows in English.
const french=import.meta.glob<{sourceHash:string;copy:Copy}>('../data/fr/*.json',{eager:true,import:'default'});
const frenchOf=(raw:Raw)=>{
 const entry=french[`../data/fr/${raw.reference}.json`];
 return entry&&entry.sourceHash===englishHash(raw)?{...raw.en,...entry.copy} as Copy:undefined;
};
const inventory:Listing[]=(synced as Raw[]).map(raw=>{const fr=frenchOf(raw);return {...raw,fr:fr??raw.en,frenchPending:!fr};});

export interface ListingSource { all():Promise<Listing[]>; find(reference:string):Promise<Listing|undefined>; }
export const listings:ListingSource={
 async all(){return inventory;},
 async find(reference){return inventory.find(listing=>listing.reference===reference);}
};

export type Status='for-sale'|'under-offer'|'sold';
export interface Facts{ref:string;energyRating?:string;price:number;bedrooms:number;bathrooms:number;builtArea:number;plotArea:number;architect?:string;status:Status;area?:AreaId;}
export const hrefOf=(listing:Listing,lang:Language)=>route(lang,'property',listing.reference);
export {areaOf};
export const factsOf=(listing:Listing):Facts=>({
 ref:listing.ref,energyRating:listing.energyRating||undefined,
 price:listing.price,bedrooms:listing.bedrooms,bathrooms:listing.bathrooms,builtArea:listing.builtArea,plotArea:listing.plotArea,
 architect:listing.architect,status:listing.status as Status,area:areaOf(listing.reference)
});
// The photograph a home is known by wherever it is listed (its façade, chosen on AUBA). Falls back to its card photograph.
type Facade={image:string;phone?:string;alt:Partial<Record<Language,string>>&{en:string}};
export const facadeOf=(listing:Listing,lang:Language)=>{
 const own=(facades as Record<string,Facade>)[listing.reference];
 return own?{image:own.image,phone:own.phone,alt:own.alt[lang]??own.alt.en}:{image:listing.cardImage,phone:undefined,alt:listing[lang].cardAlt};
};
