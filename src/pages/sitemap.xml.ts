import type {APIRoute} from 'astro';
import {languages,route,areaSlugs,type AreaId,type Page} from '../lib/routes';
import {listings} from '../lib/listings';import {brand} from '../data/brand';
export const GET:APIRoute=async()=>{
 const live=import.meta.env.PUBLIC_SITE_LIVE==='true';
 const pages:Page[]=['home','properties','how','rentals','about','living','contact','legal','privacy','cookies'];
 const properties=live?await listings.all():[];
 const entries=live?languages.flatMap(lang=>[
  ...pages.map(page=>route(lang,page)),...properties.map(listing=>route(lang,'property',listing.reference)),...(Object.keys(areaSlugs) as AreaId[]).map(id=>route(lang,'area',id))
 ]).map(path=>`<url><loc>${brand.domain}${path}</loc></url>`).join(''):'';
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
