import type {Language} from './routes';
// One phrase in the three languages: tr(lang,{en:'…',es:'…',fr:'…'}).
export const tr=<T>(lang:Language,phrases:Record<Language,T>):T=>phrases[lang];
