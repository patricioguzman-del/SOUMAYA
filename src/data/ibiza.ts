import type {AreaId,Language} from '../lib/routes';
import areaHomes from './auba/area-homes.json';
/* IBIZA PERSPECTIVE and its six areas. Copied from AUBA as a starting point (Nov 2026): Soumaya should rewrite
   these in her own words. Drive times are estimates in ordinary traffic. French drafted Nov 2026 for review. */
type Copy={title:string;places:string;text:string;life:string;note:string;alt:string};
export interface Area{id:AreaId;number:string;marker:[number,number];image:string;homes:string[];en:Copy;es:Copy;fr:Copy}

export const areas:Area[]=[
 {id:'heart',number:'01',marker:[280,184],image:'ibiza-heart',homes:[],
  en:{title:'The heart of the island',places:'Santa Gertrudis · Sant Llorenç · Sant Mateu',
   text:'Fields, stone walls and three villages that never close. This is where I send clients who want a real community around them all year.',
   life:'Life here moves at village pace. Santa Gertrudis, Sant Llorenç and Sant Mateu keep their squares, cafés and shops open through the year, and the countryside around them is rural and quiet, away from the clubs and the flight path. Every beach is a drive away, but so is most of what you need: from Santa Gertrudis, Ibiza Town is about 14 minutes by car and the airport 18. Morna International College is on the edge of the village.',
   note:'A village address and a countryside home offer different daily routines. Consider the approach to the house and the journeys you would make most often.',
   alt:'The whitewashed church of Santa Gertrudis with its ochre bell gable, strings of coloured flags above the square'},
  es:{title:'El corazón de la isla',places:'Santa Gertrudis · Sant Llorenç · Sant Mateu',
   text:'Campos, muros de piedra y tres pueblos que nunca cierran. Aquí es donde llevo a los clientes que quieren una comunidad de verdad a su alrededor todo el año.',
   life:'Aquí la vida va al ritmo del pueblo. Santa Gertrudis, Sant Llorenç y Sant Mateu mantienen sus plazas, cafés y tiendas abiertos todo el año, y el campo que los rodea es tranquilo, lejos de las discotecas y de la ruta de los aviones. Todas las playas quedan a un trayecto en coche, como casi todo lo demás: desde Santa Gertrudis, Ibiza ciudad está a unos 14 minutos y el aeropuerto a 18. Morna International College está a las afueras del pueblo.',
   note:'Una dirección en el pueblo y una casa en el campo suponen rutinas diarias distintas. Ten en cuenta el acceso a la casa y los trayectos que harías más a menudo.',
   alt:'La iglesia encalada de Santa Gertrudis con su campanario ocre y banderines de colores sobre la plaza'},
  fr:{title:"Le cœur de l’île",places:"Santa Gertrudis · Sant Llorenç · Sant Mateu",text:"Des champs, des murets de pierre et trois villages qui ne ferment jamais. C’est là que j’emmène les clients qui veulent une vraie vie de village toute l’année.",life:"Ici, la vie suit le rythme du village. Santa Gertrudis, Sant Llorenç et Sant Mateu gardent leurs places, leurs cafés et leurs commerces ouverts toute l’année, et la campagne alentour reste rurale et calme, loin des clubs et du couloir aérien. Chaque plage demande un trajet en voiture, comme presque tout le reste : depuis Santa Gertrudis, Ibiza Ville est à environ 14 minutes et l’aéroport à 18. Le Morna International College se trouve à l’entrée du village.",note:"Une adresse au village et une maison à la campagne impliquent des quotidiens différents. Pensez à l’accès à la maison et aux trajets que vous feriez le plus souvent.",alt:"L’église blanchie à la chaux de Santa Gertrudis, son clocher ocre et des fanions colorés au-dessus de la place"}},
 {id:'east',number:'02',marker:[382,220],image:'area-east-street',homes:[],
  en:{title:'Santa Eulalia and the east',places:'Santa Eulalia · Sant Carles · The surrounding countryside',
   text:'A proper town on the sea, with the calm countryside of Sant Carles behind it. Easy for families, and lively without the clubs.',
   life:'Santa Eulalia is a working town on the coast, and it stays a full town all year. Daily life can revolve around its promenade and town beach, with coves further along the east coast and the quieter countryside of Sant Carles inland. There are no large clubs here; in summer the change is mostly town traffic. From Santa Eulalia, Ibiza Town is about 18 minutes by car, the airport 23 and Morna International College 12.',
   note:'Decide whether you want to live in town or use it as your local centre. Two homes described as “Santa Eulalia” may have very different surroundings.',
   alt:'A village street with bougainvillea over a stone wall and a green gate'},
  es:{title:'Santa Eulalia y el este',places:'Santa Eulalia · Sant Carles · El campo de alrededor',
   text:'Un pueblo de verdad junto al mar, con el campo tranquilo de Sant Carles detrás. Cómodo para las familias, y animado sin discotecas.',
   life:'Santa Eulalia es un pueblo con vida propia junto al mar, y lo sigue siendo todo el año. El día a día puede girar en torno a su paseo y su playa, con calas más adelante en la costa este y el campo más tranquilo de Sant Carles hacia el interior. No hay grandes discotecas; en verano el cambio se nota sobre todo en el tráfico. Desde Santa Eulalia, Ibiza ciudad está a unos 18 minutos en coche, el aeropuerto a 23 y Morna International College a 12.',
   note:'Decide si quieres vivir en el pueblo o tenerlo como centro de referencia. Dos casas descritas como «Santa Eulalia» pueden tener entornos muy distintos.',
   alt:'Una calle de pueblo con buganvillas sobre un muro de piedra y una puerta verde'},
  fr:{title:"Santa Eulalia et l’est",places:"Santa Eulalia · Sant Carles · La campagne alentour",text:"Une vraie petite ville au bord de la mer, avec la campagne paisible de Sant Carles derrière. Facile pour les familles, et animée sans les clubs.",life:"Santa Eulalia est une vraie petite ville en bord de mer, vivante toute l’année. Le quotidien peut s’organiser autour de sa promenade et de sa plage, avec des criques plus loin sur la côte est et la campagne plus paisible de Sant Carles à l’intérieur. Il n’y a pas de grands clubs ici ; en été, le changement se ressent surtout dans la circulation. Depuis Santa Eulalia, Ibiza Ville est à environ 18 minutes en voiture, l’aéroport à 23 et le Morna International College à 12.",note:"Décidez si vous voulez vivre en ville ou en faire votre centre de référence. Deux maisons décrites comme « Santa Eulalia » peuvent avoir des environnements très différents.",alt:"Une rue de village avec des bougainvilliers sur un mur de pierre et un portail vert"}},
 {id:'north',number:'03',marker:[365,106],image:'area-north-benirras',homes:[],
  en:{title:'The north',places:'Sant Joan · Sant Miquel · Portinatx',
   text:'The wildest, quietest part of the island. Wonderful if you want seclusion, but I always check how far the nearest village really is.',
   life:'This is the island at its most secluded. Sant Joan and Sant Miquel keep a local life through the winter, while much of the coast, Portinatx included, closes at the end of the season. In summer the coves of the north coast are close at hand. It is very quiet here, far from the airport and the clubs. From Sant Joan, Ibiza Town is about 25 minutes by car, the airport 29 and Morna International College 15.',
   note:'Start with how connected you want to be to a village. A secluded setting is a choice about everyday access as much as the view.',
   alt:'The bay of Benirràs between wooded hills, open to the sea'},
  es:{title:'El norte',places:'Sant Joan · Sant Miquel · Portinatx',
   text:'La parte más salvaje y tranquila de la isla. Maravillosa si buscas aislamiento, pero siempre compruebo a qué distancia queda de verdad el pueblo más cercano.',
   life:'Es la isla en su versión más apartada. Sant Joan y Sant Miquel mantienen una vida local en invierno, mientras que buena parte de la costa, Portinatx incluido, cierra al acabar la temporada. En verano, las calas de la costa norte quedan muy cerca. Es una zona muy tranquila, lejos del aeropuerto y de las discotecas. Desde Sant Joan, Ibiza ciudad está a unos 25 minutos en coche, el aeropuerto a 29 y Morna International College a 15.',
   note:'Empieza por decidir cuánto quieres estar conectado con un pueblo. Un entorno apartado es una decisión sobre el acceso diario tanto como sobre las vistas.',
   alt:'La bahía de Benirràs entre colinas boscosas, abierta al mar'},
  fr:{title:"Le nord",places:"Sant Joan · Sant Miquel · Portinatx",text:"La partie la plus sauvage et la plus calme de l’île. Idéale si vous cherchez l’isolement, mais je vérifie toujours à quelle distance se trouve vraiment le village le plus proche.",life:"C’est l’île dans sa version la plus retirée. Sant Joan et Sant Miquel gardent une vie locale en hiver, tandis qu’une grande partie de la côte, Portinatx compris, ferme à la fin de la saison. En été, les criques de la côte nord sont toutes proches. Le calme est total, loin de l’aéroport et des clubs. Depuis Sant Joan, Ibiza Ville est à environ 25 minutes en voiture, l’aéroport à 29 et le Morna International College à 15.",note:"Commencez par savoir à quel point vous voulez être relié à un village. Un cadre isolé est un choix d’accès au quotidien autant que de vue.",alt:"La baie de Benirràs entre des collines boisées, ouverte sur la mer"}},
 {id:'west',number:'04',marker:[166,208],image:'area-west-hort',homes:[],
  en:{title:'The west and southwest',places:'Sant Antoni · Cala Salada · Cala Comte · Cala Vadella',
   text:'The sunsets, the famous coves, and Sant Antoni, which is very different in July and in January. Here the exact bay matters more than the area.',
   life:'Sant Antoni is a busy resort town in summer and a town in its own right all year. The bays around it, Cala Salada, Cala Comte and Cala Vadella, are far calmer, and go quiet in winter. Bars and clubs keep Sant Antoni lively through the summer, so the exact setting matters. From Sant Antoni, Ibiza Town is about 17 minutes by car, the airport 22 and Morna International College 19.',
   note:'A coastal address does not always mean easy access to the beach. Visit the route, and consider the home’s outlook and surroundings at different times.',
   alt:'The turquoise bay of Cala d’Hort, with the rock of Es Vedrà offshore'},
  es:{title:'El oeste y el suroeste',places:'Sant Antoni · Cala Salada · Cala Comte · Cala Vadella',
   text:'Las puestas de sol, las calas famosas y Sant Antoni, que es muy distinto en julio y en enero. Aquí importa más la bahía exacta que la zona.',
   life:'Sant Antoni es un destino muy animado en verano y un pueblo con vida propia todo el año. Las calas de alrededor, Cala Salada, Cala Comte y Cala Vadella, son mucho más tranquilas y se quedan en calma en invierno. Los bares y las discotecas animan Sant Antoni durante todo el verano, así que el entorno concreto importa. Desde Sant Antoni, Ibiza ciudad está a unos 17 minutos en coche, el aeropuerto a 22 y Morna International College a 19.',
   note:'Una dirección en la costa no siempre significa un acceso fácil a la playa. Recorre el camino y observa las vistas y el entorno de la casa en distintos momentos del día.',
   alt:'La bahía turquesa de Cala d’Hort, con la roca de Es Vedrà frente a la costa'},
  fr:{title:"L’ouest et le sud-ouest",places:"Sant Antoni · Cala Salada · Cala Comte · Cala Vadella",text:"Les couchers de soleil, les criques célèbres, et Sant Antoni, très différente en juillet et en janvier. Ici, la baie exacte compte plus que la zone.",life:"Sant Antoni est une station animée en été et une ville à part entière toute l’année. Les baies alentour, Cala Salada, Cala Comte et Cala Vadella, sont bien plus calmes et deviennent silencieuses en hiver. Bars et clubs animent Sant Antoni tout l’été, le cadre précis compte donc. Depuis Sant Antoni, Ibiza Ville est à environ 17 minutes en voiture, l’aéroport à 22 et le Morna International College à 19.",note:"Une adresse en bord de mer ne signifie pas toujours un accès facile à la plage. Faites le trajet, et observez la vue et l’environnement de la maison à différents moments.",alt:"La baie turquoise de Cala d’Hort, avec le rocher d’Es Vedrà au large"}},
 {id:'town',number:'05',marker:[301,302],image:'ibiza-town',homes:[],
  en:{title:'Ibiza Town and its surroundings',places:'Dalt Vila · Marina Botafoch · Talamanca · Jesús',
   text:'The capital: Dalt Vila, the marina, restaurants on foot, and life all year. The right choice if you want everything within ten minutes.',
   life:'This is the island’s capital: old streets, the marina and restaurants within walking distance, and the liveliest place out of season. Talamanca beach is on the edge of town. Town and marina life carry on into the evening, and in summer the clubs of Playa d’en Bossa are close. The airport is about 10 minutes away by car, and Morna International College about 13.',
   note:'If walking is part of the appeal, check the actual route from a home to the places you would use. Proximity on a map is only a starting point.',
   alt:'The cathedral and walls of Dalt Vila above the white houses and palms of Ibiza Town'},
  es:{title:'Ibiza ciudad y alrededores',places:'Dalt Vila · Marina Botafoch · Talamanca · Jesús',
   text:'La capital: Dalt Vila, el puerto, restaurantes a pie y vida todo el año. La elección adecuada si quieres tenerlo todo a diez minutos.',
   life:'Es la capital de la isla: calles antiguas, el puerto y restaurantes a los que se llega a pie, y el lugar con más vida fuera de temporada. La playa de Talamanca está en el límite de la ciudad. La vida del centro y de la marina se alarga hasta la noche, y en verano las discotecas de Playa d’en Bossa quedan cerca. El aeropuerto está a unos 10 minutos en coche y Morna International College a unos 13.',
   note:'Si caminar forma parte del atractivo, comprueba el recorrido real desde la casa hasta los lugares que usarías. La cercanía en un mapa es solo un punto de partida.',
   alt:'La catedral y las murallas de Dalt Vila sobre las casas blancas y las palmeras de Ibiza ciudad'},
  fr:{title:"Ibiza Ville et ses environs",places:"Dalt Vila · Marina Botafoch · Talamanca · Jesús",text:"La capitale : Dalt Vila, le port, les restaurants à pied et la vie toute l’année. Le bon choix si vous voulez tout à dix minutes.",life:"C’est la capitale de l’île : vieilles rues, port et restaurants accessibles à pied, et l’endroit le plus vivant hors saison. La plage de Talamanca est aux portes de la ville. La vie du centre et de la marina se prolonge le soir, et en été les clubs de Playa d’en Bossa sont proches. L’aéroport est à environ 10 minutes en voiture, et le Morna International College à 13.",note:"Si marcher fait partie de l’attrait, vérifiez le trajet réel entre la maison et les lieux que vous fréquenteriez. La proximité sur une carte n’est qu’un point de départ.",alt:"La cathédrale et les remparts de Dalt Vila au-dessus des maisons blanches et des palmiers d’Ibiza Ville"}},
 {id:'south',number:'06',marker:[170,300],image:'area-south-cubells',homes:[],
  en:{title:'The south',places:'Sant Josep · Es Cubells · Cala Jondal · Porroig',
   text:'Sheltered coves, Sant Josep and some of the island’s most beautiful hillsides. Before any house here, I check the flight path.',
   life:'Sant Josep is a village lived in all year, with hills inland and a sheltered southern coast at Cala Jondal, Porroig and the coves near Es Cubells. Parts of the south lie under the airport approach, so the flight path is worth checking for any house. From Sant Josep, the airport is about 12 minutes by car, Ibiza Town 17 and Morna International College 28.',
   note:'Look beyond the headline view. Orientation, shade, outdoor space and access all shape how a home feels through the day.',
   alt:'The coast at Es Cubells: low headlands and coves on a calm blue sea'},
  es:{title:'El sur',places:'Sant Josep · Es Cubells · Cala Jondal · Porroig',
   text:'Calas resguardadas, Sant Josep y algunas de las colinas más bonitas de la isla. Antes de cualquier casa aquí, compruebo la ruta de los aviones.',
   life:'Sant Josep es un pueblo habitado todo el año, con colinas hacia el interior y una costa sur resguardada en Cala Jondal, Porroig y las calas cercanas a Es Cubells. Parte del sur queda bajo la aproximación al aeropuerto, así que conviene comprobar la ruta de los aviones en cualquier casa. Desde Sant Josep, el aeropuerto está a unos 12 minutos en coche, Ibiza ciudad a 17 y Morna International College a 28.',
   note:'Mira más allá de la vista principal. La orientación, la sombra, el espacio exterior y el acceso influyen en cómo se vive una casa a lo largo del día.',
   alt:'La costa de Es Cubells: cabos bajos y calas sobre un mar azul en calma'},
  fr:{title:"Le sud",places:"Sant Josep · Es Cubells · Cala Jondal · Porroig",text:"Des criques abritées, Sant Josep et certaines des plus belles collines de l’île. Avant toute maison ici, je vérifie le couloir aérien.",life:"Sant Josep est un village habité toute l’année, avec des collines à l’intérieur et une côte sud abritée à Cala Jondal, Porroig et dans les criques près d’Es Cubells. Une partie du sud se trouve sous l’approche de l’aéroport : mieux vaut vérifier le couloir aérien pour chaque maison. Depuis Sant Josep, l’aéroport est à environ 12 minutes en voiture, Ibiza Ville à 17 et le Morna International College à 28.",note:"Regardez au-delà de la vue principale. L’orientation, l’ombre, les espaces extérieurs et l’accès façonnent la façon dont une maison se vit au fil de la journée.",alt:"La côte d’Es Cubells : caps bas et criques sur une mer bleue et calme"}}
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
  statement:'Same island, different lives.',
  lede:'Village, countryside or sea: the right house starts with the right part of the island.',
  explore:'Explore the island',
  coverAlt:'Wooded cliffs at Es Cubells running down to a deep blue sea under a sky of small clouds',
  preface:{label:'A PLACE TO BEGIN',heading:'Look beyond the address.',body:['The same island can mean a village on your doorstep, a house surrounded by fields, or a walk beside the water. Those differences matter when you begin to imagine everyday life here.']},
  orientation:{label:'EXPLORE THE ISLAND',heading:'Six starting points.',body:'A first orientation, from the centre to the coast. Choose an area on the map or in the list.',caption:'Markers show broad areas, not boundaries.'},
  area:{back:'Living in Ibiza',life:'Life here',choosing:'When choosing a home',drives:'Drive times are estimates in ordinary traffic; summer evenings can take longer.',count:(n,total)=>`Area ${n} of ${total}`,homes:'Homes in this area',previous:'Previous area',next:'Next area'},
  close:{heading:'Where would you feel at home?',body:'Tell me how you imagine living on the island. We can explore the areas, the practicalities and the homes that might suit you.',action:'Speak with Soumaya'}
 },
 es:{
  statement:'Una misma isla, vidas distintas.',
  lede:'Pueblo, campo o mar: la casa adecuada empieza por la parte adecuada de la isla.',
  explore:'Descubre la isla',
  coverAlt:'Acantilados boscosos en Es Cubells que descienden hasta un mar azul intenso bajo un cielo de nubes pequeñas',
  preface:{label:'POR DÓNDE EMPEZAR',heading:'Mira más allá de la dirección.',body:['Una misma isla puede significar un pueblo a la puerta de casa, una casa rodeada de campos o un paseo junto al agua. Esas diferencias importan cuando empiezas a imaginar tu día a día aquí.']},
  orientation:{label:'DESCUBRE LA ISLA',heading:'Seis puntos de partida.',body:'Una primera orientación, del centro a la costa. Elige una zona en el mapa o en la lista.',caption:'Los marcadores indican zonas amplias, no límites.'},
  area:{back:'Vivir en Ibiza',life:'La vida aquí',choosing:'Al elegir una casa',drives:'Los tiempos en coche son estimaciones con tráfico normal; en las tardes de verano pueden ser mayores.',count:(n,total)=>`Zona ${n} de ${total}`,homes:'Casas en esta zona',previous:'Zona anterior',next:'Zona siguiente'},
  close:{heading:'¿Dónde te sentirías en casa?',body:'Cuéntame cómo imaginas tu vida en la isla. Podemos explorar las zonas, los aspectos prácticos y las casas que podrían encajar contigo.',action:'Habla con Soumaya'}
 },
 fr:{
  statement:'Une même île, des vies différentes.',
  lede:'Village, campagne ou mer : la bonne maison commence par la bonne partie de l’île.',
  explore:'Découvrir l’île',
  coverAlt:'Falaises boisées à Es Cubells descendant vers une mer d’un bleu profond sous un ciel de petits nuages',
  preface:{label:'PAR OÙ COMMENCER',heading:'Regarder au-delà de l’adresse.',body:['Une même île peut signifier un village au pas de sa porte, une maison entourée de champs ou une promenade au bord de l’eau. Ces différences comptent quand on commence à imaginer son quotidien ici.']},
  orientation:{label:'DÉCOUVRIR L’ÎLE',heading:'Six points de départ.',body:'Une première orientation, du centre à la côte. Choisissez une zone sur la carte ou dans la liste.',caption:'Les repères indiquent de grandes zones, pas des limites.'},
  area:{back:'Vivre à Ibiza',life:'La vie ici',choosing:'Pour choisir une maison',drives:'Les temps de trajet sont des estimations en circulation normale ; les soirs d’été, ils peuvent être plus longs.',count:(n,total)=>`Zone ${n} sur ${total}`,homes:'Maisons dans cette zone',previous:'Zone précédente',next:'Zone suivante'},
  close:{heading:'Où vous sentiriez-vous chez vous ?',body:'Dites-moi comment vous imaginez votre vie sur l’île. Nous pourrons explorer les zones, les aspects pratiques et les maisons qui pourraient vous correspondre.',action:'Parler à Soumaya'}
 }
};
