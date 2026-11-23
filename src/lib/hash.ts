// The fingerprint of a listing's English text (53-bit string hash, as hex). A French translation records the
// fingerprint it was made from, so the site can tell when AUBA has changed the English since.
// scripts/sync-auba.mjs uses the same formula.
export function englishHash(listing:{en:unknown}){
 const text=JSON.stringify(listing.en);let h1=0xdeadbeef,h2=0x41c6ce57;
 for(let i=0;i<text.length;i++){const ch=text.charCodeAt(i);h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677);}
 h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);
 h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);
 return (4294967296*(2097151&h2)+(h1>>>0)).toString(16);
}
