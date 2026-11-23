// Vercel Routing Middleware: the bare address opens the site in the visitor's language (src/lib/language-home.mjs).
import {languageHome} from './src/lib/language-home.mjs';

export const config={matcher:['/']};

export default function middleware(request){
 return new Response(null,{status:302,headers:{Location:languageHome(request.headers.get('accept-language')),Vary:'Accept-Language','Cache-Control':'private, no-store'}});
}
