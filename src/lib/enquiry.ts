// The enquiry letter: what the visitor writes to Soumaya, as one plain text in their language.
// writingFor: assistants, family offices and lawyers often write for the buyer. language: the visitor can ask to
// talk in English, Spanish, French or Arabic. intent 'rent' covers rentals and seasonal stays.
import {brand} from '../data/brand.ts';
export type TalkLanguage='en'|'es'|'fr'|'ar';
type Lang='en'|'es'|'fr';
export type Intent='buy'|'sell'|'rent';
// details: the search brief, as label/answer pairs in the visitor's language (budget, areas, dates…).
export interface Enquiry {name:string;phone:string;email:string;message:string;intent:Intent;property?:string;floorPlans:boolean;writingFor?:'self'|'client';language?:TalkLanguage;details?:[string,string][];}
const languageNames:Record<Lang,Record<TalkLanguage,string>>={en:{en:'English',es:'Spanish',fr:'French',ar:'Arabic'},es:{en:'inglés',es:'español',fr:'francés',ar:'árabe'},fr:{en:'anglais',es:'espagnol',fr:'français',ar:'arabe'}};
export type EnquiryErrors = Partial<Record<'name'|'contact'|'email',boolean>>;
export function validateEnquiry(data:Enquiry):EnquiryErrors{
 const errors:EnquiryErrors={};
 if(!data.name.trim())errors.name=true;
 if(!data.phone.trim()&&!data.email.trim())errors.contact=true;
 if(data.email.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))errors.email=true;
 return errors;
}
const words={
 en:{dear:`Dear ${brand.name},`,about:'I would like to know more about',want:{buy:'I would like to buy a home in Ibiza.',sell:'I would like to sell a home in Ibiza.',rent:'I would like to rent a villa in Ibiza.'},call:'you can call me on',orWrite:'or write to me at',write:'you can write to me at',client:'I am writing on behalf of a client.',name:'My name is',and:'and',prefer:'I would prefer to talk in',plans:(p:string)=>`Please include the floor plans for ${p}.`,enquiry:'Enquiry',hello:(p?:string)=>p?`Hello ${brand.name}, I am interested in ${p}.`:`Hello ${brand.name}, I would like to talk about a home in Ibiza.`},
 es:{dear:`Hola, ${brand.name}:`,about:'Me gustaría saber más sobre',want:{buy:'Me gustaría comprar una casa en Ibiza.',sell:'Me gustaría vender una casa en Ibiza.',rent:'Me gustaría alquilar una villa en Ibiza.'},call:'puedes llamarme al',orWrite:'o escribirme a',write:'puedes escribirme a',client:'Escribo en nombre de un cliente.',name:'Me llamo',and:'y',prefer:'Prefiero hablar en',plans:(p:string)=>`Me gustaría recibir los planos de ${p}.`,enquiry:'Consulta',hello:(p?:string)=>p?`Hola, ${brand.name}: me interesa ${p}.`:`Hola, ${brand.name}: me gustaría hablar sobre una casa en Ibiza.`},
 fr:{dear:`Bonjour ${brand.name},`,about:'J’aimerais en savoir plus sur',want:{buy:'J’aimerais acheter une maison à Ibiza.',sell:'J’aimerais vendre une maison à Ibiza.',rent:'J’aimerais louer une villa à Ibiza.'},call:'vous pouvez m’appeler au',orWrite:'ou m’écrire à',write:'vous pouvez m’écrire à',client:'J’écris pour le compte d’un client.',name:'Je m’appelle',and:'et',prefer:'Je préférerais échanger en',plans:(p:string)=>`Merci de joindre les plans de ${p}.`,enquiry:'Demande',hello:(p?:string)=>p?`Bonjour ${brand.name}, ${p} m’intéresse.`:`Bonjour ${brand.name}, j’aimerais parler d’une maison à Ibiza.`}
} as const;
export function enquiryText(data:Enquiry,lang:Lang){
 const w=words[lang];const lines:string[]=[w.dear];
 lines.push(data.property?`${w.about} ${data.property}.`:w.want[data.intent]);
 // Name and contact details as one sentence, the way the visitor wrote them in the letter.
 const phone=data.phone.trim(),email=data.email.trim();
 const reach=[phone&&`${w.call} ${phone}`,email&&`${phone?w.orWrite:w.write} ${email}`].filter(Boolean).join(' ');
 if(data.writingFor==='client')lines.push(w.client);
 lines.push(`${w.name} ${data.name.trim()}${reach?` ${w.and} ${reach}`:''}.`);
 // Only said when it differs from the letter's own language.
 if(data.language&&data.language!==lang)lines.push(`${w.prefer} ${languageNames[lang][data.language]}.`);
 if(data.details?.length)lines.push(data.details.map(([label,value])=>`${label}: ${value}`).join('\n'));
 if(data.floorPlans&&data.property)lines.push(w.plans(data.property));
 if(data.message.trim())lines.push(data.message.trim());
 return lines.join('\n\n');
}
export function emailLink(text:string,property:string|undefined,lang:Lang){
 const subject=property?`${property} · ${brand.name}`:`${words[lang].enquiry} · ${brand.name}`;
 return `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}
// WhatsApp: a first line (or a finished letter) the visitor can edit before sending.
export function whatsappLink(lang:Lang,property?:string,letter?:string){
 return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(letter??words[lang].hello(property))}`;
}
