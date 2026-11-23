import { defineConfig } from 'astro/config';
// Static output: every page is generated at build time. The letter's delivery is a separate Vercel function
// (api/enquiry.mjs). Listings come from AUBA through scripts/sync-auba.mjs, run before each build.
// site: Soumaya's domain (placeholder in src/data/brand.ts until confirmed).
export default defineConfig({site:'https://soumaya.example', output:'static', trailingSlash:'always',
 redirects:{'/':{status:302,destination:'/en/'}},
 server:{host:'127.0.0.1',port:4321}});
