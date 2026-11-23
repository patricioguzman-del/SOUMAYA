// The search brief under the letter: a few short questions that change with what the visitor wants
// (buy, rent for the holidays, sell). Every answer is optional; answered ones are added to the letter as
// "Label: answer" lines, in the visitor's language. Areas follow the six areas of the Ibiza map.
import type {Language} from '../lib/routes';
type L=Record<Language,string>;
export interface BriefField{id:string;label:L;kind:'select'|'date'|'number'|'text';options?:L[];}
const areas:L[]=[
 {en:'Anywhere on the island',es:'Cualquier zona de la isla',fr:'N’importe où sur l’île'},
 {en:'Heart of the island',es:'El corazón de la isla',fr:'Le cœur de l’île'},
 {en:'Santa Eulalia and the east',es:'Santa Eulalia y el este',fr:'Santa Eulalia et l’est'},
 {en:'The north',es:'El norte',fr:'Le nord'},
 {en:'The west and southwest',es:'El oeste y el suroeste',fr:'L’ouest et le sud-ouest'},
 {en:'Ibiza Town and surroundings',es:'Ibiza ciudad y alrededores',fr:'Ibiza Ville et ses environs'},
 {en:'The south',es:'El sur',fr:'Le sud'}
];
const timing:L[]=[
 {en:'As soon as possible',es:'Lo antes posible',fr:'Dès que possible'},
 {en:'Within 6 months',es:'En los próximos 6 meses',fr:'Dans les 6 mois'},
 {en:'Within a year',es:'En el próximo año',fr:'Dans l’année'},
 {en:'Just exploring',es:'Solo estoy explorando',fr:'Je me renseigne'}
];
export const brief:Record<'buy'|'rent'|'sell',BriefField[]>={
 buy:[
  {id:'purpose',kind:'select',label:{en:'The home is',es:'La casa es',fr:'La maison sera'},options:[{en:'A holiday home',es:'Una segunda residencia',fr:'Une résidence secondaire'},{en:'My main home',es:'Mi residencia principal',fr:'Ma résidence principale'},{en:'An investment',es:'Una inversión',fr:'Un investissement'}]},
  {id:'budget',kind:'select',label:{en:'Budget',es:'Presupuesto',fr:'Budget'},options:[{en:'Up to €3M',es:'Hasta 3 M€',fr:'Jusqu’à 3 M€'},{en:'€3M–€5M',es:'3–5 M€',fr:'3–5 M€'},{en:'€5M–€10M',es:'5–10 M€',fr:'5–10 M€'},{en:'€10M–€20M',es:'10–20 M€',fr:'10–20 M€'},{en:'Over €20M',es:'Más de 20 M€',fr:'Plus de 20 M€'}]},
  {id:'area',kind:'select',label:{en:'Area',es:'Zona',fr:'Zone'},options:areas},
  {id:'bedrooms',kind:'select',label:{en:'Bedrooms',es:'Dormitorios',fr:'Chambres'},options:[{en:'3 or more',es:'3 o más',fr:'3 ou plus'},{en:'4 or more',es:'4 o más',fr:'4 ou plus'},{en:'5 or more',es:'5 o más',fr:'5 ou plus'},{en:'6 or more',es:'6 o más',fr:'6 ou plus'}]},
  {id:'timing',kind:'select',label:{en:'Timing',es:'Plazo',fr:'Calendrier'},options:timing}
 ],
 rent:[
  {id:'arrival',kind:'date',label:{en:'Arrival',es:'Llegada',fr:'Arrivée'}},
  {id:'departure',kind:'date',label:{en:'Departure',es:'Salida',fr:'Départ'}},
  {id:'guests',kind:'number',label:{en:'Guests',es:'Huéspedes',fr:'Personnes'}},
  {id:'weekly',kind:'select',label:{en:'Budget per week',es:'Presupuesto por semana',fr:'Budget par semaine'},options:[{en:'Up to €15,000',es:'Hasta 15.000 €',fr:'Jusqu’à 15 000 €'},{en:'€15,000–€30,000',es:'15.000–30.000 €',fr:'15 000–30 000 €'},{en:'€30,000–€60,000',es:'30.000–60.000 €',fr:'30 000–60 000 €'},{en:'Over €60,000',es:'Más de 60.000 €',fr:'Plus de 60 000 €'}]},
  {id:'rent-area',kind:'select',label:{en:'Area',es:'Zona',fr:'Zone'},options:areas}
 ],
 sell:[
  {id:'home-type',kind:'select',label:{en:'Type of home',es:'Tipo de propiedad',fr:'Type de bien'},options:[{en:'Villa',es:'Villa',fr:'Villa'},{en:'Country house',es:'Casa de campo',fr:'Maison de campagne'},{en:'Apartment',es:'Apartamento',fr:'Appartement'},{en:'Plot',es:'Parcela',fr:'Terrain'}]},
  {id:'home-area',kind:'select',label:{en:'Area',es:'Zona',fr:'Zone'},options:areas.slice(1)},
  {id:'sale',kind:'select',label:{en:'Sale',es:'Venta',fr:'Vente'},options:[{en:'Discreet, off-market',es:'Discreta, fuera de mercado',fr:'Discrète, hors marché'},{en:'Public',es:'Pública',fr:'Publique'},{en:'Not sure yet',es:'Aún no lo sé',fr:'Pas encore décidé'}]},
  {id:'sell-timing',kind:'select',label:{en:'Timing',es:'Plazo',fr:'Calendrier'},options:timing}
 ]
};
export const briefHeading:L={en:'A few details (optional)',es:'Algunos detalles (opcional)',fr:'Quelques détails (facultatif)'};
export const choose:L={en:'Choose',es:'Elige',fr:'Choisir'};
