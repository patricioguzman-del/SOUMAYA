import {validateEnquiry,enquiryText,type Enquiry} from './enquiry.ts';
import {brand} from '../data/brand.ts';
// Direct delivery of the letter (Phase 1, October 2026): the website sends it to Soumaya's inbox through Resend,
// with Reply-To set to the visitor, so a reply goes straight back to them. Without a RESEND_API_KEY the
// endpoint answers "not configured" and the page falls back to opening the visitor's own email app.
export interface SendEnv {RESEND_API_KEY?:string;ENQUIRY_TO?:string;ENQUIRY_FROM?:string;}
export type SendResult = {status:200;body:{ok:true}}|{status:400|503|502;body:{ok:false;error:'invalid'|'not-configured'|'delivery'}};
const limits={name:120,phone:60,email:254,message:2500,property:120} as const;
const text=(value:unknown,max:number)=>typeof value==='string'?value.slice(0,max):'';

export async function sendEnquiry(input:unknown,env:SendEnv,send:typeof fetch=fetch):Promise<SendResult>{
 const raw=(input&&typeof input==='object'?input:{}) as Record<string,unknown>;
 // A filled-in hidden field means a bot: report success and send nothing.
 if(text(raw.website,200).trim())return {status:200,body:{ok:true}};
 const lang=raw.lang==='es'?'es':raw.lang==='fr'?'fr':'en';const L={en:{client:'For a client · ',enquiry:'Enquiry',sell:'Selling',buy:'Buying',rent:'Renting',sent:'Sent from the website, in English.'},es:{client:'Para un cliente · ',enquiry:'Consulta',sell:'Venta',buy:'Compra',rent:'Alquiler',sent:'Enviada desde la web, en español.'},fr:{client:'Pour un client · ',enquiry:'Demande',sell:'Vente',buy:'Achat',rent:'Location',sent:'Envoyée depuis le site, en français.'}}[lang];
 const data:Enquiry={name:text(raw.name,limits.name),phone:text(raw.phone,limits.phone),email:text(raw.email,limits.email),message:text(raw.message,limits.message),intent:raw.intent==='sell'?'sell':raw.intent==='rent'?'rent':'buy',property:text(raw.property,limits.property)||undefined,floorPlans:raw.floorPlans===true,writingFor:raw.writingFor==='client'?'client':'self',language:raw.language==='es'||raw.language==='fr'||raw.language==='en'||raw.language==='ar'?raw.language:undefined,
  // The search brief: at most 12 label/answer pairs, each kept short.
  details:Array.isArray(raw.details)?raw.details.slice(0,12).filter((pair):pair is [unknown,unknown]=>Array.isArray(pair)&&pair.length===2).map(([label,value])=>[text(label,60),text(value,200)] as [string,string]).filter(([label,value])=>label&&value):undefined};
 if(Object.keys(validateEnquiry(data)).length)return {status:400,body:{ok:false,error:'invalid'}};
 if(!env.RESEND_API_KEY)return {status:503,body:{ok:false,error:'not-configured'}};
 const subject=(data.writingFor==='client'?L.client:'')+(data.property?`${data.property} · ${L.enquiry} · ${brand.name}`:`${L[data.intent]} · ${brand.name}`);
 const email=data.email.trim();
 try{
  const response=await send('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${env.RESEND_API_KEY}`,'Content-Type':'application/json'},
   body:JSON.stringify({from:env.ENQUIRY_FROM||`${brand.name} website <onboarding@resend.dev>`,to:[env.ENQUIRY_TO||brand.email],...(email?{reply_to:email}:{}),subject,text:`${enquiryText(data,lang)}

—
${L.sent}`})});
  return response.ok?{status:200,body:{ok:true}}:{status:502,body:{ok:false,error:'delivery'}};
 }catch{return {status:502,body:{ok:false,error:'delivery'}};}
}
