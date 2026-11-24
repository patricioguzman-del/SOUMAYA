import type {Language} from './routes';
export const locale=(lang:Language)=>lang==='es'?'es-ES':lang==='fr'?'fr-FR':'en-GB';
export const money=(n:number,lang:Language)=>new Intl.NumberFormat(locale(lang),{style:'currency',currency:'EUR',maximumFractionDigits:0,useGrouping:'always'}).format(n);
// Always group thousands, so Spanish shows 1.168 m² beside 22.000 m² (its default would print 1168).
// A price of 0 in the synced listings means the price is not published: show "Price on request", never €0.
const onRequest={en:'Price on request',es:'Precio a consultar',fr:'Prix sur demande'};
export const priceOf=(n:number,lang:Language)=>n>0?money(n,lang):onRequest[lang];
export const number=(n:number,lang:Language)=>new Intl.NumberFormat(locale(lang),{maximumFractionDigits:2,useGrouping:'always'}).format(n);
