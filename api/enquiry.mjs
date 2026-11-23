// The letter's delivery, as a Vercel function (Node.js 24, which runs the shared TypeScript directly).
// POST /api/enquiry with the letter as JSON. GET only reports whether delivery is configured.
// Every page stays a static file; this is the website's only server code.
import {sendEnquiry} from '../src/lib/send-enquiry.ts';
const json=(body,status=200)=>new Response(JSON.stringify(body),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
export async function POST(request){
 let input={};
 try{input=await request.json();}catch{}
 const result=await sendEnquiry(input,process.env);
 return json(result.body,result.status);
}
export function GET(){return json({ok:true,configured:Boolean(process.env.RESEND_API_KEY)});}
