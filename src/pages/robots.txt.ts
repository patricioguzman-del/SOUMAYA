import type {APIRoute} from 'astro';import {brand} from '../data/brand';
export const GET:APIRoute=()=>new Response(import.meta.env.PUBLIC_SITE_LIVE==='true'?`User-agent: *\nAllow: /\nSitemap: ${brand.domain}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n',{headers:{'Content-Type':'text/plain; charset=utf-8'}});
