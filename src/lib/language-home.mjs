// The bare address opens the site in the visitor's language: the first of English, Spanish or French the
// browser prefers, English otherwise. Used by middleware.js. The redirect stays temporary (302).
export function languageHome(acceptLanguage){
 const ranked=(acceptLanguage??'').split(',').map((part,order)=>{
  const [tag,...params]=part.trim().toLowerCase().split(';');
  const q=params.map(p=>p.trim()).find(p=>p.startsWith('q='));
  return {lang:tag.split('-')[0],q:q?Number(q.slice(2))||0:1,order};
 }).filter(item=>['en','es','fr'].includes(item.lang)).sort((a,b)=>b.q-a.q||a.order-b.order);
 return `/${ranked[0]?.lang??'en'}/`;
}
