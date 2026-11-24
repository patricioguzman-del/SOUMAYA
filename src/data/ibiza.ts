import type {AreaId,Language} from '../lib/routes';
import areaHomes from './auba/area-homes.json';
/* IBIZA PERSPECTIVE and its six areas. Rewritten 24 Nov 2026 so no sentence repeats the AUBA site (the two sites
   show the same homes). Facts kept as they were; Soumaya should still check drive times and school distances. */
type Copy={title:string;places:string;text:string;life:string;note:string;alt:string};
export interface Area{id:AreaId;number:string;marker:[number,number];image:string;homes:string[];en:Copy;es:Copy;fr:Copy}

export const areas:Area[]=[
 {id:'heart',number:'01',marker:[280,184],image:'ibiza-heart',homes:[],
  en:{title:'The heart of the island',places:'Santa Gertrudis · Sant Llorenç · Sant Mateu',
   text:'Fields, stone walls and three villages that never close. This is where I send clients who want a real community around them all year.',
   life:'The three villages here, Santa Gertrudis, Sant Llorenç and Sant Mateu, are lived in all year: in January the squares, cafés and shops are still open. Around them is farmland, quiet, with no clubs and no planes overhead. You drive to the beach, and to most errands, but the distances are short: from Santa Gertrudis, about 14 minutes to Ibiza Town and 18 to the airport. Morna International College is just outside the village.',
   note:'Living in the village and living in the fields around it are two different routines. On a visit, drive the access road and time the trips you will make most.',
   alt:'The whitewashed church of Santa Gertrudis with its ochre bell gable, strings of coloured flags above the square'},
  es:{title:'El corazón de la isla',places:'Santa Gertrudis · Sant Llorenç · Sant Mateu',
   text:'Campos, muros de piedra y tres pueblos que nunca cierran. Aquí es donde llevo a los clientes que quieren una comunidad de verdad a su alrededor todo el año.',
   life:'Los tres pueblos, Santa Gertrudis, Sant Llorenç y Sant Mateu, tienen vida todo el año: en enero las plazas, los cafés y las tiendas siguen abiertos. Alrededor hay campo, tranquilo, sin discotecas y sin aviones por encima. A la playa, y a casi todo, se va en coche, pero las distancias son cortas: desde Santa Gertrudis, unos 14 minutos a Ibiza ciudad y 18 al aeropuerto. Morna International College está a las afueras del pueblo.',
   note:'Vivir en el pueblo y vivir en el campo de alrededor son rutinas distintas. En la visita, recorre el camino de acceso y calcula los trayectos que harás más a menudo.',
   alt:'La iglesia encalada de Santa Gertrudis con su campanario ocre y banderines de colores sobre la plaza'},
  fr:{title:"Le cœur de l’île",places:"Santa Gertrudis · Sant Llorenç · Sant Mateu",text:"Des champs, des murets de pierre et trois villages qui ne ferment jamais. C’est là que j’emmène les clients qui veulent une vraie vie de village toute l’année.",life:"Les trois villages, Santa Gertrudis, Sant Llorenç et Sant Mateu, vivent toute l’année : en janvier, les places, les cafés et les commerces restent ouverts. Autour, la campagne est calme, sans clubs ni avions au-dessus. On rejoint la plage, et presque tout, en voiture, mais les distances sont courtes : depuis Santa Gertrudis, environ 14 minutes jusqu’à Ibiza Ville et 18 jusqu’à l’aéroport. Le Morna International College est à la sortie du village.",note:"Vivre au village ou dans la campagne autour, ce sont deux quotidiens différents. Lors de la visite, faites le chemin d’accès et chronométrez les trajets que vous ferez le plus souvent.",alt:"L’église blanchie à la chaux de Santa Gertrudis, son clocher ocre et des fanions colorés au-dessus de la place"}},
 {id:'east',number:'02',marker:[382,220],image:'area-east-street',homes:[],
  en:{title:'Santa Eulalia and the east',places:'Santa Eulalia · Sant Carles · The surrounding countryside',
   text:'A proper town on the sea, with the calm countryside of Sant Carles behind it. Easy for families, and lively without the clubs.',
   life:'Santa Eulalia is a real town by the sea, busy in winter as well as summer. You can live around its promenade and town beach, with more coves along the east coast and the calmer fields of Sant Carles behind. There are no big clubs; what changes in summer is mainly the traffic. From Santa Eulalia: about 18 minutes to Ibiza Town, 23 to the airport and 12 to Morna International College.',
   note:'Ask yourself whether you want to live in the town or just near it. “Santa Eulalia” in a listing can mean a flat on the promenade or a farmhouse ten minutes inland.',
   alt:'A village street with bougainvillea over a stone wall and a green gate'},
  es:{title:'Santa Eulalia y el este',places:'Santa Eulalia · Sant Carles · El campo de alrededor',
   text:'Un pueblo de verdad junto al mar, con el campo tranquilo de Sant Carles detrás. Cómodo para las familias, y animado sin discotecas.',
   life:'Santa Eulalia es un pueblo de verdad junto al mar, con movimiento en invierno igual que en verano. Puedes vivir en torno a su paseo y su playa, con más calas a lo largo de la costa este y los campos más tranquilos de Sant Carles detrás. No hay grandes discotecas; lo que cambia en verano es sobre todo el tráfico. Desde Santa Eulalia: unos 18 minutos a Ibiza ciudad, 23 al aeropuerto y 12 a Morna International College.',
   note:'Pregúntate si quieres vivir en el pueblo o solo cerca. «Santa Eulalia» en un anuncio puede ser un piso en el paseo o una casa de campo a diez minutos hacia el interior.',
   alt:'Una calle de pueblo con buganvillas sobre un muro de piedra y una puerta verde'},
  fr:{title:"Santa Eulalia et l’est",places:"Santa Eulalia · Sant Carles · La campagne alentour",text:"Une vraie petite ville au bord de la mer, avec la campagne paisible de Sant Carles derrière. Facile pour les familles, et animée sans les clubs.",life:"Santa Eulalia est une vraie petite ville au bord de la mer, animée l’hiver comme l’été. On peut vivre autour de sa promenade et de sa plage, avec d’autres criques le long de la côte est et la campagne plus calme de Sant Carles derrière. Pas de grands clubs ; ce qui change en été, c’est surtout la circulation. Depuis Santa Eulalia : environ 18 minutes jusqu’à Ibiza Ville, 23 jusqu’à l’aéroport et 12 jusqu’au Morna International College.",note:"Demandez-vous si vous voulez vivre en ville ou simplement à côté. « Santa Eulalia » dans une annonce peut désigner un appartement sur la promenade ou une maison de campagne à dix minutes à l’intérieur.",alt:"Une rue de village avec des bougainvilliers sur un mur de pierre et un portail vert"}},
 {id:'north',number:'03',marker:[365,106],image:'area-north-benirras',homes:[],
  en:{title:'The north',places:'Sant Joan · Sant Miquel · Portinatx',
   text:'The wildest, quietest part of the island. Wonderful if you want seclusion, but I always check how far the nearest village really is.',
   life:'The north is the island at its most remote. Sant Joan and Sant Miquel keep a village life in winter, but much of the coast, Portinatx included, shuts when the season ends. In summer the northern coves are on your doorstep, and all year it is very quiet, far from the airport and the clubs. From Sant Joan: about 25 minutes to Ibiza Town, 29 to the airport and 15 to Morna International College.',
   note:'Decide first how close you want a village to be. Seclusion is wonderful for the view; it also means every errand is a drive.',
   alt:'The bay of Benirràs between wooded hills, open to the sea'},
  es:{title:'El norte',places:'Sant Joan · Sant Miquel · Portinatx',
   text:'La parte más salvaje y tranquila de la isla. Maravillosa si buscas aislamiento, pero siempre compruebo a qué distancia queda de verdad el pueblo más cercano.',
   life:'El norte es la isla en su versión más remota. Sant Joan y Sant Miquel mantienen vida de pueblo en invierno, pero buena parte de la costa, Portinatx incluido, cierra al terminar la temporada. En verano tienes las calas del norte al lado, y todo el año es muy tranquilo, lejos del aeropuerto y de las discotecas. Desde Sant Joan: unos 25 minutos a Ibiza ciudad, 29 al aeropuerto y 15 a Morna International College.',
   note:'Decide primero a qué distancia quieres tener un pueblo. El aislamiento es maravilloso para las vistas; también significa que cada recado es un trayecto en coche.',
   alt:'La bahía de Benirràs entre colinas boscosas, abierta al mar'},
  fr:{title:"Le nord",places:"Sant Joan · Sant Miquel · Portinatx",text:"La partie la plus sauvage et la plus calme de l’île. Idéale si vous cherchez l’isolement, mais je vérifie toujours à quelle distance se trouve vraiment le village le plus proche.",life:"Le nord, c’est l’île dans ce qu’elle a de plus isolé. Sant Joan et Sant Miquel gardent une vie de village en hiver, mais une grande partie de la côte, Portinatx compris, ferme à la fin de la saison. En été, les criques du nord sont à votre porte, et toute l’année le calme est complet, loin de l’aéroport et des clubs. Depuis Sant Joan : environ 25 minutes jusqu’à Ibiza Ville, 29 jusqu’à l’aéroport et 15 jusqu’au Morna International College.",note:"Décidez d’abord à quelle distance vous voulez un village. L’isolement est merveilleux pour la vue ; il veut aussi dire que chaque course se fait en voiture.",alt:"La baie de Benirràs entre des collines boisées, ouverte sur la mer"}},
 {id:'west',number:'04',marker:[166,208],image:'area-west-hort',homes:[],
  en:{title:'The west and southwest',places:'Sant Antoni · Cala Salada · Cala Comte · Cala Vadella',
   text:'The sunsets, the famous coves, and Sant Antoni, which is very different in July and in January. Here the exact bay matters more than the area.',
   life:'Sant Antoni is two places: a lively resort in summer and an ordinary town the rest of the year. The bays around it, Cala Salada, Cala Comte and Cala Vadella, are much calmer, and very quiet in winter. Bars and clubs keep Sant Antoni busy all summer, so the exact spot matters. From Sant Antoni: about 17 minutes to Ibiza Town, 22 to the airport and 19 to Morna International College.',
   note:'A sea view does not always come with an easy walk to the beach. Try the route, and see the house in the morning and at sunset.',
   alt:'The turquoise bay of Cala d’Hort, with the rock of Es Vedrà offshore'},
  es:{title:'El oeste y el suroeste',places:'Sant Antoni · Cala Salada · Cala Comte · Cala Vadella',
   text:'Las puestas de sol, las calas famosas y Sant Antoni, que es muy distinto en julio y en enero. Aquí importa más la bahía exacta que la zona.',
   life:'Sant Antoni son dos lugares: un destino animado en verano y un pueblo normal el resto del año. Las calas de alrededor, Cala Salada, Cala Comte y Cala Vadella, son mucho más tranquilas, y en invierno muy silenciosas. Los bares y las discotecas mantienen Sant Antoni lleno todo el verano, así que el punto exacto importa. Desde Sant Antoni: unos 17 minutos a Ibiza ciudad, 22 al aeropuerto y 19 a Morna International College.',
   note:'Una vista al mar no siempre viene con un paseo fácil hasta la playa. Haz el camino y mira la casa por la mañana y al atardecer.',
   alt:'La bahía turquesa de Cala d’Hort, con la roca de Es Vedrà frente a la costa'},
  fr:{title:"L’ouest et le sud-ouest",places:"Sant Antoni · Cala Salada · Cala Comte · Cala Vadella",text:"Les couchers de soleil, les criques célèbres, et Sant Antoni, très différente en juillet et en janvier. Ici, la baie exacte compte plus que la zone.",life:"Sant Antoni, ce sont deux endroits : une station animée l’été et une ville ordinaire le reste de l’année. Les baies alentour, Cala Salada, Cala Comte et Cala Vadella, sont bien plus calmes, et très silencieuses en hiver. Bars et clubs font vivre Sant Antoni tout l’été, l’emplacement exact compte donc. Depuis Sant Antoni : environ 17 minutes jusqu’à Ibiza Ville, 22 jusqu’à l’aéroport et 19 jusqu’au Morna International College.",note:"Une vue sur la mer ne va pas toujours avec un accès facile à la plage. Faites le chemin, et voyez la maison le matin et au coucher du soleil.",alt:"La baie turquoise de Cala d’Hort, avec le rocher d’Es Vedrà au large"}},
 {id:'town',number:'05',marker:[301,302],image:'ibiza-town',homes:[],
  en:{title:'Ibiza Town and its surroundings',places:'Dalt Vila · Marina Botafoch · Talamanca · Jesús',
   text:'The capital: Dalt Vila, the marina, restaurants on foot, and life all year. The right choice if you want everything within ten minutes.',
   life:'The capital has the old streets of Dalt Vila, the marina and restaurants you can walk to, and it is the liveliest place on the island out of season. Talamanca beach is at the edge of town. Evenings run late around the centre and the marina, and in summer the clubs of Playa d’en Bossa are close by. About 10 minutes to the airport by car, and 13 to Morna International College.',
   note:'If walking matters to you, walk it: from the door to the café, the shops, the marina. A short distance on the map can be a steep hill.',
   alt:'The cathedral and walls of Dalt Vila above the white houses and palms of Ibiza Town'},
  es:{title:'Ibiza ciudad y alrededores',places:'Dalt Vila · Marina Botafoch · Talamanca · Jesús',
   text:'La capital: Dalt Vila, el puerto, restaurantes a pie y vida todo el año. La elección adecuada si quieres tenerlo todo a diez minutos.',
   life:'La capital tiene las calles antiguas de Dalt Vila, el puerto y restaurantes a los que vas andando, y es el lugar con más vida de la isla fuera de temporada. La playa de Talamanca está en el borde de la ciudad. Las noches se alargan en el centro y en la marina, y en verano las discotecas de Playa d’en Bossa quedan cerca. Unos 10 minutos en coche al aeropuerto y 13 a Morna International College.',
   note:'Si caminar es importante para ti, camínalo: de la puerta al café, a las tiendas, al puerto. Una distancia corta en el mapa puede ser una cuesta empinada.',
   alt:'La catedral y las murallas de Dalt Vila sobre las casas blancas y las palmeras de Ibiza ciudad'},
  fr:{title:"Ibiza Ville et ses environs",places:"Dalt Vila · Marina Botafoch · Talamanca · Jesús",text:"La capitale : Dalt Vila, le port, les restaurants à pied et la vie toute l’année. Le bon choix si vous voulez tout à dix minutes.",life:"La capitale, ce sont les vieilles rues de Dalt Vila, le port et des restaurants où l’on va à pied, et l’endroit le plus vivant de l’île hors saison. La plage de Talamanca est en bordure de ville. Les soirées se prolongent autour du centre et de la marina, et en été les clubs de Playa d’en Bossa sont tout près. Environ 10 minutes en voiture jusqu’à l’aéroport, et 13 jusqu’au Morna International College.",note:"Si marcher compte pour vous, faites le trajet à pied : de la porte au café, aux commerces, au port. Une courte distance sur la carte peut être une rue en pente raide.",alt:"La cathédrale et les remparts de Dalt Vila au-dessus des maisons blanches et des palmiers d’Ibiza Ville"}},
 {id:'south',number:'06',marker:[170,300],image:'area-south-cubells',homes:[],
  en:{title:'The south',places:'Sant Josep · Es Cubells · Cala Jondal · Porroig',
   text:'Sheltered coves, Sant Josep and some of the island’s most beautiful hillsides. Before any house here, I check the flight path.',
   life:'Sant Josep is a village lived in all year, with hills behind it and a sheltered coast in front: Cala Jondal, Porroig and the coves around Es Cubells. Some of the south sits under the airport approach, so I check the flight path for every house. From Sant Josep: about 12 minutes to the airport, 17 to Ibiza Town and 28 to Morna International College.',
   note:'Don’t judge a house by its best view alone. Where the sun falls, where the shade is, how you reach the door: that is how it feels to live in, hour by hour.',
   alt:'The coast at Es Cubells: low headlands and coves on a calm blue sea'},
  es:{title:'El sur',places:'Sant Josep · Es Cubells · Cala Jondal · Porroig',
   text:'Calas resguardadas, Sant Josep y algunas de las colinas más bonitas de la isla. Antes de cualquier casa aquí, compruebo la ruta de los aviones.',
   life:'Sant Josep es un pueblo con vida todo el año, con colinas detrás y una costa resguardada delante: Cala Jondal, Porroig y las calas en torno a Es Cubells. Parte del sur queda bajo la aproximación al aeropuerto, así que compruebo la ruta de los aviones en cada casa. Desde Sant Josep: unos 12 minutos al aeropuerto, 17 a Ibiza ciudad y 28 a Morna International College.',
   note:'No juzgues una casa solo por su mejor vista. Dónde da el sol, dónde está la sombra, cómo se llega a la puerta: así es como se vive, hora a hora.',
   alt:'La costa de Es Cubells: cabos bajos y calas sobre un mar azul en calma'},
  fr:{title:"Le sud",places:"Sant Josep · Es Cubells · Cala Jondal · Porroig",text:"Des criques abritées, Sant Josep et certaines des plus belles collines de l’île. Avant toute maison ici, je vérifie le couloir aérien.",life:"Sant Josep est un village habité toute l’année, avec des collines derrière et une côte abritée devant : Cala Jondal, Porroig et les criques autour d’Es Cubells. Une partie du sud se trouve sous l’approche de l’aéroport, je vérifie donc le couloir aérien pour chaque maison. Depuis Sant Josep : environ 12 minutes jusqu’à l’aéroport, 17 jusqu’à Ibiza Ville et 28 jusqu’au Morna International College.",note:"Ne jugez pas une maison sur sa plus belle vue seulement. Où tombe le soleil, où est l’ombre, comment on arrive à la porte : c’est cela qui fait la vie dans la maison, heure par heure.",alt:"La côte d’Es Cubells : caps bas et criques sur une mer bleue et calme"}}
];
// Which homes are in each area comes from AUBA with the listings (scripts/sync-auba.mjs).
for(const area of areas)area.homes=(areaHomes as Record<string,string[]>)[area.id]??[];
export const areaOf=(reference:string)=>areas.find(area=>area.homes.includes(reference))?.id;
export const areaById=(id:AreaId)=>areas.find(area=>area.id===id)!;

export const island:Record<Language,{
 statement:string;lede:string;explore:string;coverAlt:string;
 preface:{label:string;heading:string;body:string[]};
 orientation:{label:string;heading:string;body:string;caption:string};
 area:{back:string;life:string;choosing:string;drives:string;count:(n:string,total:string)=>string;homes:string;previous:string;next:string};
 close:{heading:string;body:string;action:string}
}>={
 en:{
  statement:'Six areas, six ways of living.',
  lede:'Village, countryside or sea: the right house starts with the right part of the island.',
  explore:'Explore the island',
  coverAlt:'Wooded cliffs at Es Cubells running down to a deep blue sea under a sky of small clouds',
  preface:{label:'A PLACE TO BEGIN',heading:'What I ask first.',body:['Before we look at a single house, I ask how you want your days to go: a village café in the morning, fields around you, or the sea at the end of the path. On an island this small, those answers point to very different places.']},
  orientation:{label:'EXPLORE THE ISLAND',heading:'Six starting points.',body:'Six parts of the island, from the centre to the coast. Pick one on the map or in the list.',caption:'The markers show general areas, not exact borders.'},
  area:{back:'Living in Ibiza',life:'Life here',choosing:'When choosing a home',drives:'Drive times are approximate, in normal traffic. On summer evenings, allow more.',count:(n,total)=>`Area ${n} of ${total}`,homes:'Homes in this area',previous:'Previous area',next:'Next area'},
  close:{heading:'Where would you feel at home?',body:'Tell me how you picture your life here. I’ll suggest the areas worth seeing, and the homes in them.',action:'Speak with Soumaya'}
 },
 es:{
  statement:'Seis zonas, seis maneras de vivir.',
  lede:'Pueblo, campo o mar: la casa adecuada empieza por la parte adecuada de la isla.',
  explore:'Descubre la isla',
  coverAlt:'Acantilados boscosos en Es Cubells que descienden hasta un mar azul intenso bajo un cielo de nubes pequeñas',
  preface:{label:'POR DÓNDE EMPEZAR',heading:'Lo primero que pregunto.',body:['Antes de ver una sola casa, te pregunto cómo quieres que sean tus días: un café en el pueblo por la mañana, campos alrededor o el mar al final del camino. En una isla tan pequeña, esas respuestas llevan a lugares muy distintos.']},
  orientation:{label:'DESCUBRE LA ISLA',heading:'Seis puntos de partida.',body:'Seis partes de la isla, del centro a la costa. Elige una en el mapa o en la lista.',caption:'Los marcadores señalan zonas generales, no fronteras exactas.'},
  area:{back:'Vivir en Ibiza',life:'La vida aquí',choosing:'Al elegir una casa',drives:'Los tiempos en coche son aproximados, con tráfico normal. En las tardes de verano, cuenta con más.',count:(n,total)=>`Zona ${n} de ${total}`,homes:'Casas en esta zona',previous:'Zona anterior',next:'Zona siguiente'},
  close:{heading:'¿Dónde te sentirías en casa?',body:'Cuéntame cómo te imaginas la vida aquí. Te propondré las zonas que merece la pena ver, y las casas que hay en ellas.',action:'Habla con Soumaya'}
 },
 fr:{
  statement:'Six zones, six façons de vivre.',
  lede:'Village, campagne ou mer : la bonne maison commence par la bonne partie de l’île.',
  explore:'Découvrir l’île',
  coverAlt:'Falaises boisées à Es Cubells descendant vers une mer d’un bleu profond sous un ciel de petits nuages',
  preface:{label:'PAR OÙ COMMENCER',heading:'Ce que je demande d’abord.',body:['Avant de visiter une seule maison, je vous demande comment vous voulez vivre vos journées : un café au village le matin, des champs autour de vous, ou la mer au bout du chemin. Sur une île aussi petite, ces réponses mènent à des endroits très différents.']},
  orientation:{label:'DÉCOUVRIR L’ÎLE',heading:'Six points de départ.',body:'Six parties de l’île, du centre à la côte. Choisissez-en une sur la carte ou dans la liste.',caption:'Les repères montrent des zones générales, pas des limites exactes.'},
  area:{back:'Vivre à Ibiza',life:'La vie ici',choosing:'Pour choisir une maison',drives:'Les temps de trajet sont approximatifs, en circulation normale. Les soirs d’été, prévoyez davantage.',count:(n,total)=>`Zone ${n} sur ${total}`,homes:'Maisons dans cette zone',previous:'Zone précédente',next:'Zone suivante'},
  close:{heading:'Où vous sentiriez-vous chez vous ?',body:'Dites-moi comment vous imaginez votre vie ici. Je vous proposerai les zones à voir, et les maisons qui s’y trouvent.',action:'Parler à Soumaya'}
 }
};
