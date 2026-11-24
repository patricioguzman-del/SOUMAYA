// Structured data (JSON-LD) for search engines, added 17 November 2026: who Soumaya is on every page,
// each public home as a listing with its price, and the page's place in the site as breadcrumbs.
import {route,type Language,type Page,type AreaId} from './routes';
import type {Listing} from './listings';
import {brand} from '../data/brand';

const site=brand.domain;
const url=(path:string)=>new URL(path,site).href;
const agentId=`${site}/#agent`;

export function agent(lang:Language){
 return {'@type':'RealEstateAgent','@id':agentId,name:brand.name,url:url(route(lang,'home')),
  image:url('/media/soumaya-portrait-960.webp'),
  email:brand.email,telephone:brand.phone,
  areaServed:{'@type':'Place',name:'Ibiza, Balearic Islands, Spain'},
  knowsLanguage:['es','en','fr']};
}

// "Near Santa Gertrudis · Ibiza" → "Santa Gertrudis".
const locality=(location:string)=>location.split('·')[0].replace(/^(near|cerca de|près de)\s+/i,'').trim();

export function listingData(listing:Listing,lang:Language,image:string){
 const copy=listing[lang];const page=url(route(lang,'property',listing.reference));
 // A plot is sold with its project; its house is not built yet, so it is described as a place, not a home.
 const plot=listing.reference.startsWith('plot-');
 const place={'@type':plot?'Place':'SingleFamilyResidence',name:copy.name,
  address:{'@type':'PostalAddress',addressLocality:locality(copy.location),addressRegion:'Illes Balears',addressCountry:'ES'},
  ...(plot?{}:{...(listing.bedrooms?{numberOfBedrooms:listing.bedrooms}:{}),...(listing.bathrooms?{numberOfBathroomsTotal:listing.bathrooms}:{}),
   ...(listing.builtArea?{floorSize:{'@type':'QuantitativeValue',value:listing.builtArea,unitCode:'MTK'}}:{})})};
 return {'@type':'RealEstateListing','@id':`${page}#listing`,url:page,name:copy.name,description:copy.summary,image:url(image),inLanguage:lang,
  about:place,
  offers:{'@type':'Offer',...(listing.price>0?{price:listing.price,priceCurrency:'EUR'}:{}),
   availability:listing.status==='for-sale'?'https://schema.org/InStock':'https://schema.org/SoldOut',
   seller:{'@id':agentId}}};
}

export interface Crumb{name:string;path:string}
// Home › section › page. Property pages sit under Properties, area pages under Living in Ibiza.
export function breadcrumbs(lang:Language,page:Page,title:string,labels:{home:string;properties:string;living:string},reference?:string):Crumb[]{
 if(page==='home')return [];
 const home={name:labels.home,path:route(lang,'home')};
 if(page==='property'&&reference)return [home,{name:labels.properties,path:route(lang,'properties')},{name:title,path:route(lang,'property',reference)}];
 if(page==='area'&&reference)return [home,{name:labels.living,path:route(lang,'living')},{name:title,path:route(lang,'area',reference as AreaId)}];
 return [home,{name:title,path:route(lang,page,reference)}];
}
export const breadcrumbData=(crumbs:Crumb[])=>({'@type':'BreadcrumbList',itemListElement:crumbs.map((crumb,i)=>({'@type':'ListItem',position:i+1,name:crumb.name,item:url(crumb.path)}))});

// One <script type="application/ld+json"> per page. "<" is escaped so no text can close the script early.
export const jsonLd=(items:object[])=>JSON.stringify({'@context':'https://schema.org','@graph':items}).replace(/</g,'\\u003c');
