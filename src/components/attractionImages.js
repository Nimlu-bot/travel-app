import IT1 from '../assets/img/it/pompei_3.jpg';
import IT2 from '../assets/img/it/rimskiy_forum_3.jpg';
import IT3 from '../assets/img/it/rimskiy_panteon_3.jpg';
import IT4 from '../assets/img/it/kolizei.jpg';
import IT5 from '../assets/img/it/pizanskaya_bashnya_2.jpg';
import IT6 from '../assets/img/it/sobor_sviatogo_marka.jpg';

import UA1 from '../assets/img/ua/hotinskaya-krep.jpg';
import UA2 from '../assets/img/ua/kamenec-podolskaya-krepost.jpg';
import UA3 from '../assets/img/ua/kievo-pech_lavra.jpg';
import UA4 from '../assets/img/ua/sofiyski-sobor.jpg';
import UA5 from '../assets/img/ua/sviat-nikol.jpg';
import UA6 from '../assets/img/ua/zapor-sech.jpg';

import GB1 from '../assets/img/gb/GB-1.jpg';
import GB2 from '../assets/img/gb/GB-2.jpg';
import GB3 from '../assets/img/gb/GB-3.jpg';
import GB4 from '../assets/img/gb/GB-4.jpg';
import GB5 from '../assets/img/gb/GB-5.jpg';
import GB6 from '../assets/img/gb/GB-6.jpg';

import DE1 from '../assets/img/de/mos-oberbaum.jpg';
import DE2 from '../assets/img/de/opera-zempera.jpg';
import DE3 from '../assets/img/de/reixstag.jpg';
import DE4 from '../assets/img/de/zam-moricburg.jpg';
import DE5 from '../assets/img/de/zam-naishvaish.jpg';
import DE6 from '../assets/img/de/zam-xoenswain.jpg';

import FR1 from '../assets/img/fr/efeleva-bashnya.jpg';
import FR2 from '../assets/img/fr/karkason.jpg';
import FR3 from '../assets/img/fr/reimsky-sobor.jpg';
import FR4 from '../assets/img/fr/sen-beneze.jpg';
import FR5 from '../assets/img/fr/zamok-anger.jpg';
import FR6 from '../assets/img/fr/zamok-shantiy.jpg';

import CZ1 from '../assets/img/cz/karlov-most.jpg';
import CZ2 from '../assets/img/cz/kornepruskie-pesceri.jpg';
import CZ3 from '../assets/img/cz/poroh-bashnia.jpg';
import CZ4 from '../assets/img/cz/sobor-sviat-vita.jpg';
import CZ5 from '../assets/img/cz/zam-karlstein.jpg';
import CZ6 from '../assets/img/cz/zam-lednice.jpg';

import AT1 from '../assets/img/at/dom-mozarda.jpg';
import AT2 from '../assets/img/at/dvorec-belveder.jpg';
import AT3 from '../assets/img/at/dvorec-hofburg.jpg';
import AT4 from '../assets/img/at/pescher-led-gigantov.jpg';
import AT5 from '../assets/img/at/zamok-herberstain.jpg';
import AT6 from '../assets/img/at/zamok-hoenzalcburg.jpg';

import ES1 from '../assets/img/es/alxaferia-v-saragose.jpg';
import ES2 from '../assets/img/es/dom-terrades.jpg';
import ES3 from '../assets/img/es/palma-de-malork.jpg';
import ES4 from '../assets/img/es/piram-guimar.jpg';
import ES5 from '../assets/img/es/stadion-kamp-nou.jpg';
import ES6 from '../assets/img/es/triumf-arka.jpg';

// import UA1 from '../assets/img/ua/Каменец-Подольская-крепость.jpg'
// Хотинская крепость.jpg
// Киево-Печерская Лавра.jpg
// Софийский собор.jpg
// Запорожская Сечь на острове Хортица.jpg
// Свято-Никольский храм.jpg

const attractions = [
    {
        id: 'IT1',
        name: {
            ru: 'Помпеи',
            en: 'Pompeii',
            uk: 'Помпеї',
        },
        coutryId: 'IT',
        thumbnail: {
            url: IT1,
            alt: {
                ru: 'Помпеи',
                en: 'Pompeii',
                uk: 'Помпеї',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Помпе́и — древнеримский город недалеко от Неаполя, в регионе Кампания, погребённый под слоем вулканического пепла в результате извержения Везувия в 79 году н. э.',
            en:
                'Pompeii was an ancient city located in what is now the comune of Pompei near Naples in the Campania region of Italy. Pompeii, along with Herculaneum and many villas in the surrounding area (e.g. at Boscoreale, Stabiae), was buried under 4 to 6 m (13 to 20 ft) of volcanic ash and pumice in the eruption of Mount Vesuvius in AD 79.',
            ua:
                'Помпе́ї — давньоримське місто, руїни якого знаходяться в межах сучасної комуни Помпеї в регіоні Кампанія в Італії, неподалік від Неаполя. Помпеї загинули внаслідок виверження вулкана Везувій 24 серпня 79 року[2] або за уточненими даними 24 жовтня 79 р.[3], яке поховало місто під тоннами пилу. На розкопаній частині Помпеїв облаштовано музей просто неба.',
        },
    },
    {
        id: 'IT2',
        name: {
            ru: 'Ри́мский фо́рум',
            en: 'The Roman Forum',
            uk: 'Римський форум-форум',
        },
        coutryId: 'IT',
        thumbnail: {
            url: IT2,
            alt: {
                ru: 'Ри́мский фо́рум',
                en: 'The Roman Forum',
                uk: 'Римський форум-форум',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Ри́мский фо́рум— форум в центре Древнего Рима, вместе с прилегающими зданиями. Первоначально на нём размещался рынок, позже он включил в себя комиций, курию, и приобрел политические функции.',
            en:
                'The Roman Forum is a forum in the center of Ancient Rome, along with the adjacent buildings. Initially, it housed a market, later it included the comitia, curia, and acquired political functions.',
            ua:
                'Римський форум-форум в центрі Стародавнього Риму, разом з прилеглими будівлями. Спочатку на ньому розміщувався ринок, пізніше він включив в себе коміцій, курію, і придбав політичні функції.',
        },
    },
    {
        id: 'IT3',
        name: {
            ru: 'Пантео́н',
            en: 'Pantheon',
            uk: 'Пантеон',
        },
        coutryId: 'IT',
        thumbnail: {
            url: IT3,
            alt: {
                ru: 'Пантео́н',
                en: 'Pantheon',
                uk: 'Пантеон',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Пантео́н — так называемый «Храм всех богов», выдающийся памятник истории и архитектуры древнего Рима, построенный между 118 и 128 годами н. э.',
            en:
                'The Pantheon is the so-called "Temple of All Gods", an outstanding monument of the history and architecture of ancient Rome, built between 118 and 128 AD. e.',
            ua:
                "Пантеон - так званий «Храм всіх богів», видатний пам'ятник історії і архітектури Стародавнього Риму, побудований між 118 і 128 роками н. е.",
        },
    },
    {
        id: 'IT4',
        name: {
            ru: 'Колизей',
            en: 'Colosseum',
            uk: 'Колізей',
        },
        coutryId: 'IT',
        thumbnail: {
            url: IT4,
            alt: {
                ru: 'Колизей',
                en: 'Colosseum',
                uk: 'Колізей',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Колизей - это овальный амфитеатр в центре города Рима, Италия, к востоку от Римского форума, и является крупнейшим из когда-либо построенных древних амфитеатров, несмотря на свой возраст, до сих пор остается самым большим стоящим амфитеатром в мире.',
            en:
                'The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum and is the largest ancient amphitheatre ever built, and is still the largest standing amphitheater in the world today, despite its age.',
            ua:
                'Колізей - овальний амфітеатр у центрі міста Рим, Італія, на схід від Римського форуму, і є найбільшим стародавнім амфітеатром, коли-небудь побудованим, і досі є найбільшим амфітеатром у світі, незважаючи на свій вік.',
        },
    },
    {
        id: 'IT5',
        name: {
            ru: 'Пиза́нская башня',
            en: 'The Pisa Tower',
            uk: 'Пізанська вежа',
        },
        coutryId: 'IT',
        thumbnail: {
            url: IT5,
            alt: {
                ru: 'Пиза́нская башня',
                en: 'The Pisa Tower',
                uk: 'Пізанська вежа',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Пиза́нская башня — колокольная башня, часть ансамбля городского собора Санта-Мария-Ассунта, получившая всемирную известность благодаря непреднамеренному наклону. Строительство башни велось в 3 этапа, начиная с 9 августа 1173, и с двумя длинными перерывами продолжалось почти 200 лет, до 1360 года.',
            en:
                "The Pisa Tower is a bell tower, part of the ensemble of the city's Cathedral of Santa Maria Assunta, known worldwide for its unintentional tilt. The construction of the tower was carried out in 3 stages, starting on August 9, 1173, and with two long breaks lasted for almost 200 years, until 1360.",
            ua:
                'Пізанська вежа - дзвонова вежа, частина ансамблю міського собору Санта-Марія-Ассунта, яка здобула всесвітню популярність завдяки ненавмисному нахилу. Будівництво вежі велося в 3 етапи, починаючи з 9 серпня 1173, і з двома довгими перервами тривало майже 200 років, до 1360 року.',
        },
    },
    {
        id: 'IT6',
        name: {
            ru: 'Патриарший собор Базилика Святого Марка',
            en: 'The Patriarchal Cathedral Basilica of Saint Mark',
            uk: 'Патріархальна соборна базиліка Святого Марка',
        },
        coutryId: 'IT',
        thumbnail: {
            url: IT6,
            alt: {
                ru: 'Патриарший собор Базилика Святого Марка',
                en: 'The Patriarchal Cathedral Basilica of Saint Mark',
                uk: 'Патріархальна соборна базиліка Святого Марка',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Патриарший собор Базилика Святого Марка, широко известная как базилика Святого Марка, является кафедральным собором римско-католической архиепископии Венеции, север Италии. Это самая известная из церквей города и один из самых известных примеров итало-византийской архитектуры.',
            en:
                "The Patriarchal Cathedral Basilica of Saint Mark, commonly known as St Mark's Basilica, is the cathedral church of the Roman Catholic Archdiocese of Venice, northern Italy. It is the most famous of the city's churches and one of the best known examples of Italo-Byzantine architecture.",
            ua:
                'Патріархальна соборна базиліка Святого Марка, широко відома як Базиліка Святого Марка, є кафедральною церквою Римсько-католицької архієпархії Венеції, на півночі Італії. Це найвідоміша з міських церков і один з найвідоміших зразків італо-візантійської архітектури.',
        },
    },
    {
        id: 'UA1',
        name: {
            ru: 'Хоти́нская крепость',
            en: 'Khotyn fortress',
            uk: 'Хотинська фортеця',
        },
        coutryId: 'UA',
        thumbnail: {
            url: UA1,
            alt: {
                ru: 'Хоти́нская крепость',
                en: 'Khotyn fortress',
                uk: 'Хотинська фортеця',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Хоти́нская крепость — крепость X—XVIII веков, расположенная в городе Хотин, Украина. Одно из семи чудес Украины.',
            en:
                'Khotyn fortress - a fortress of the X-XVIII centuries, located in the city of Khotin, Ukraine. One of the seven wonders of Ukraine.',
            ua:
                'Хотинська фортеця - фортеця X-XVIII століть, розташована в місті Хотин, Україна. Одне з семи чудес України.',
        },
    },
    {
        id: 'UA2',
        name: {
            ru: 'Старый замок Каменца-Подольского',
            en: 'The old castle of Kamenets-Podolsk',
            uk: "Старий замок Кам'янця-Подільського",
        },
        coutryId: 'UA',
        thumbnail: {
            url: UA2,
            alt: {
                ru: 'Старый замок Каменца-Подольского',
                en: 'The old castle of Kamenets-Podolsk',
                uk: "Старий замок Кам'янця-Подільського",
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Старый замок Каменца-Подольского предположительно существовал ещё во времена Киевской Руси (как детинец древнерусского града), однако каменный замок построили литовские князья Кориатовичи. С 1362 по 1434 года крепость в комплексе с оборонными сооружениями города стала главным форпостом литовской, а с 1434 по 1793 года — польской власти в Подолье, и играла значительную роль в отражении турецко-татарских походов на Запад.',
            en:
                "The old castle of Kamenets-Podolsk presumably existed in the days of Kievan Rus (as a detinets of the ancient Russian city), but the stone castle was built by the Lithuanian princes Koriatovichi. From 1362 to 1434, the fortress in combination with the city's fortifications became the main outpost of the Lithuanian, and from 1434 to 1793 - the Polish power in Podolia, and played a significant role in repelling the Turkish-Tatar campaigns to the West.",
            ua:
                "Старий замок Кам'янця-Подільського імовірно існував ще за часів Київської Русі (як дитинець давньоруського граду), проте кам'яний замок побудували литовські князі Коріатовичі. З 1362 по 1434 фортеця в комплексі з оборонними спорудами міста стала головним форпостом литовської, а з 1434 по 1793 року - польської влади на Поділлі, і відігравала значну роль у відбитті турецько-татарських походів на Захід.",
        },
    },
    {
        id: 'UA3',
        name: {
            ru: 'Свя́то-Успе́нская Ки́ево-Пече́рская ла́вра',
            en: 'The Holy Dormition Kiev-Pechersk Lavra',
            uk: 'Свято-Успенська Києво-Печерська лавра',
        },
        coutryId: 'UA',
        thumbnail: {
            url: UA3,
            alt: {
                ru: 'Свя́то-Успе́нская Ки́ево-Пече́рская ла́вра',
                en: 'The Holy Dormition Kiev-Pechersk Lavra',
                uk: 'Свято-Успенська Києво-Печерська лавра',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Свя́то-Успе́нская Ки́ево-Пече́рская ла́вра — один из первых по времени основания монастырей Киевской Руси. Одна из важнейших православных святынь, третий Удел Богородицы.',
            en:
                'The Holy Dormition Kiev-Pechersk Lavra is one of the earliest monasteries in Kievan Rus. One of the most important Orthodox shrines, the third Lot of the Mother of God.',
            ua:
                'Свято-Успенська Києво-Печерська лавра - один з перших по часу заснування монастирів Київської Русі. Одна з найважливіших православних святинь, третій Доля Богородиці.',
        },
    },
    {
        id: 'UA4',
        name: {
            ru: 'Помпеи',
            en: 'Pompeii',
            uk: 'Помпеї',
        },
        coutryId: 'UA',
        thumbnail: {
            url: UA4,
            alt: {
                ru: 'Стоўнхендж',
                en: 'Pompeii',
                uk: 'Помпеї',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Софийский собор в Киеве, Украина, является памятником архитектуры Киевской Руси. Собор - одна из самых известных достопримечательностей города и первый объект культурного наследия в Украине, внесенный в Список всемирного наследия вместе с комплексом Киево-пещерного монастыря.',
            en:
                "Saint Sophia Cathedral in Kyiv, Ukraine, is an architectural monument of Kievan Rus. The cathedral is one of the city's best known landmarks and the first heritage site in Ukraine to be inscribed on the World Heritage List along with the Kiev Cave Monastery complex.",
            ua:
                "Софійський собор у Києві, Україна, є пам'яткою архітектури Київської Русі. Собор є однією з найвідоміших визначних пам'яток міста та першим об'єктом спадщини в Україні, який включений до Списку світової спадщини разом із комплексом Київського печерного монастиря.",
        },
    },
    {
        id: 'UA5',
        name: {
            ru: 'Национальный природный парк Святые горы',
            en: 'Holy Mountains National Nature Park',
            uk: 'Національний природний парк "Святі гори"',
        },
        coutryId: 'UA',
        thumbnail: {
            url: UA5,
            alt: {
                ru: 'Национальный природный парк Святые горы',
                en: 'Holy Mountains National Nature Park',
                uk: 'Національний природний парк "Святі гори"',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Национальный природный парк Святые горы расположен вдоль меловых скал и речных террас реки Донец в Восточной Украине. Границы парка представляют собой лоскутное одеяло из лесных массивов, тянущихся вдоль берегов Донца. Святые горы Украины содержат множество археологических, природных, исторических и рекреационных объектов.',
            en:
                "Holy Mountains National Nature Park is located along the chalk cliffs and river terraces of the Donets River in Eastern Ukraine. The park's boundaries are a patchwork of forested areas stretching along the banks of the Donets. The Holy Mountains of Ukraine contain many archaeological, natural, historical, and recreational sites. ",
            ua:
                'Національний природний парк "Святі гори" розташований уздовж крейдяних скель та річкових терас річки Донець на сході України. Межі парку є клаптиком лісистих ділянок, що тягнуться вздовж берегів Донецька. Святі гори України містять багато археологічних, природних, історичних та рекреаційних об’єктів.',
        },
    },
    {
        id: 'UA6',
        name: {
            ru: 'Хо́ртица',
            en: 'Khortitsa',
            uk: 'Хортиця',
        },
        coutryId: 'UA',
        thumbnail: {
            url: UA6,
            alt: {
                ru: 'Хо́ртица',
                en: 'Khortitsa',
                uk: 'Хортиця',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Хо́ртица — крупнейший остров на Днепре, расположен в черте города Запорожье ниже днепровских порогов (теперь у ДнепроГЭС). Национальный историко-культурный заповедник.',
            en:
                'Khortitsa is the largest island on the Dnieper, located within the city of Zaporozhye below the Dnieper rapids (now at the Dnieper hydroelectric power station). National Historical and Cultural Reserve.',
            ua:
                'Хортиця - найбільший острів на Дніпрі, розташований в межах міста Запоріжжя нижче дніпровських порогів (тепер у ДніпроГЕС). Національний історико-культурний заповідник.',
        },
    },
    {
        id: 'FR1',
        name: {
            ru: 'Э́йфелева ба́шня',
            en: 'Eiffel Tower',
            uk: 'Ейфелева вежа',
        },
        coutryId: 'FR',
        thumbnail: {
            url: FR1,
            alt: {
                ru: 'Э́йфелева ба́шня',
                en: 'Eiffel Tower',
                uk: 'Ейфелева вежа',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Э́йфелева ба́шня, впоследствии ставшая символом Парижа, была построена в 1889 году и первоначально задумывалась как временное сооружение, служившее входной аркой парижской Всемирной выставки 1889 года.',
            en:
                'The Eiffel Tower, which later became the symbol of Paris, was built in 1889 and was originally conceived as a temporary structure that served as the entrance arch of the Paris World Exhibition of 1889.',
            ua:
                'Ейфелева вежа, яка згодом стала символом Парижа, була побудована в 1889 році і спочатку замислювалася як тимчасова споруда, що служило вхідною аркою паризької Всесвітньої виставки 1889 року.',
        },
    },
    {
        id: 'FR2',
        name: {
            ru: 'Крепость Каркасон',
            en: 'Fortress Carcassonne',
            uk: 'Фортеця Каркасон',
        },
        coutryId: 'FR',
        thumbnail: {
            url: FR2,
            alt: {
                ru: 'Крепость Каркасон',
                en: 'Fortress Carcassonne',
                uk: 'Фортеця Каркасон',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Крепость Каркасон. Согласно дошедшим до наших дней историческим документам и благодаря археологическим раскопкам, можно с уверенностью утверждать, что оборонительное сооружение и целый город, надежно спрятавшийся за его стенами, были построены еще во II-м веке до нашей эры.',
            en:
                'Fortress Carcassonne. According to historical documents that have survived to this day and thanks to archaeological excavations, it can be confidently asserted that the defensive structure and the whole city, reliably hidden behind its walls, were built in the 2nd century BC.',
            ua:
                'Фортеця Каркасон. Згідно що дійшли до наших днів з історичними документами і завдяки археологічним розкопкам, можна з упевненістю стверджувати, що оборонна споруда і ціле місто, надійно сховався за його стінами, були побудовані ще в II-му столітті до нашої ери.',
        },
    },
    {
        id: 'FR3',
        name: {
            ru: 'Нотр-Дам де Пари',
            en: 'Notre Dame de Paris',
            uk: 'Нотр-Дам де Парі',
        },
        coutryId: 'FR',
        thumbnail: {
            url: FR3,
            alt: {
                ru: 'Нотр-Дам де Пари',
                en: 'Notre Dame de Paris',
                uk: 'Нотр-Дам де Парі',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru: 'Нотр-Дам де Пари - монументальное здание, славящееся фантастической красотой.',
            en: 'Notre Dame de Paris is a monumental building renowned for its fantastic beauty.',
            ua: 'Нотр-Дам де Парі - монументальна споруда, що славиться фантастичною красою.',
        },
    },
    {
        id: 'FR4',
        name: {
            ru: 'Папский дворец',
            en: 'The Palais des Papes',
            uk: 'Папський палац',
        },
        coutryId: 'FR',
        thumbnail: {
            url: FR4,
            alt: {
                ru: 'Папский дворец',
                en: 'The Palais des Papes',
                uk: 'Папський палац',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Папский дворец - это исторический дворец, расположенный в Авиньоне, на юге Франции. Это одно из самых больших и важных средневековых готических построек в Европе. Папская резиденция, когда-то бывшая крепостью и дворцом, была резиденцией западного христианства в 14 веке. Во Дворце было проведено шесть папских конклавов, на которых были избраны Бенедикт XII в 1334 году, Климент VI в 1342 году, Иннокентий VI в 1352 году, Урбан V в 1362 году, Григорий XI в 1370 году и Бенедикт XIII в 1394 году.',
            en:
                'The Palais des Papes is a historical palace located in Avignon, Southern France. It is one of the largest and most important medieval Gothic buildings in Europe. Once a fortress and palace, the papal residence was the seat of Western Christianity during the 14th century. Six papal conclaves were held in the Palais, leading to the elections of Benedict XII in 1334, Clement VI in 1342, Innocent VI in 1352, Urban V in 1362, Gregory XI in 1370 and Benedict XIII in 1394.',
            ua:
                'Папський палац - історичний палац, розташований в Авіньйоні на півдні Франції. Це одна з найбільших і найважливіших середньовічних готичних будівель в Європі. Колись фортеця та палац, папська резиденція була резиденцією західного християнства протягом 14 століття. У Палаці відбулося шість папських конклавів, що призвело до виборів Бенедикта XII у 1334 р., Климента VI в 1342 р., Інокентія VI у 1352 р., Урбана V у 1362 р., Григорія XI у 1370 р. Та Бенедикта XIII у 1394 р.',
        },
    },
    {
        id: 'FR5',
        name: {
            ru: 'Анжерский замок',
            en: 'Anzher castle',
            uk: 'Анжерський замок',
        },
        coutryId: 'FR',
        thumbnail: {
            url: FR5,
            alt: {
                ru: 'Анжерский замок',
                en: 'Anzher castle',
                uk: 'Анжерський замок',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'В 1562 году Екатерина Медичи укрепила Анжерский замок с целью привести его в соответствие с военными реалиями того времени. Однако в 1574 году Генрих III взойдя на французский престол и опасаясь военных восстаний протестантов, приказал срезать семнадцать башен Анжерского замка до уровня стен. Камень, полученный при разборке башен, был использован при строительстве улиц города. Несмотря на это, Генрих III продолжал поддерживать замок в боевой готовности и даже установил на стенах артиллерию.',
            en:
                'In 1562, Catherine de Medici fortified the Anzher castle in order to bring it into line with the military realities of that time. However, in 1574, Henry III ascended the French throne and fearing military uprisings of the Protestants, he ordered to cut seventeen towers of the Anzher castle to the level of the walls. The stone obtained during the dismantling of the towers was used in the construction of city streets. Despite this, Henry III continued to keep the castle on alert and even installed artillery on the walls.',
            ua:
                'У 1562 році Катерина Медічі зміцнила Анжерський замок з метою привести його у відповідність з військовими реаліями того часу. Однак в 1574 році Генріх III зійшовши на французький престол і побоюючись військових повстань протестантів, наказав зрізати сімнадцять веж Анжерський замку до рівня стін. Камінь, отриманий при розбиранні веж, був використаний при будівництві вулиць міста. Незважаючи на це, Генріх III продовжував підтримувати замок у бойовій готовності і навіть встановив на стінах артилерію.',
        },
    },
    {
        id: 'FR6',
        name: {
            ru: 'Замок Шантильи',
            en: 'Château de Chantilly',
            uk: 'Замок Шантільї',
        },
        coutryId: 'FR',
        thumbnail: {
            url: FR6,
            alt: {
                ru: 'Замок Шантильи',
                en: 'Château de Chantilly',
                uk: 'Замок Шантільї',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Замок Шантильи - это исторический французский замок, расположенный в городе Шантийи, Уаза, примерно в 50 км к северу от Парижа. Участок состоит из двух пристроенных зданий: Пети-Шато, построенного примерно в 1560 году для Анны де Монморанси, и Гранд-Шато, разрушенного во время Французской революции и восстановленного в 1870-х годах. Он принадлежит Институту Франции, которому он был завещан по завещанию Анри Орлеанского, герцога Омаля.',
            en:
                "The Château de Chantilly is a historic French château located in the town of Chantilly, Oise, about 50 kilometres north of Paris. The site comprises two attached buildings: the Petit Château built around 1560 for Anne de Montmorency and the Grand Château, which was destroyed during the French Revolution and rebuilt in the 1870s. It is owned by the Institut de France, to which it was bequeathed in the will of Henri d'Orléans, Duke of Aumale.",
            ua:
                "Замок Шантільї - це історичний французький замок, розташований у містечку Шантільї, штат Уаза, приблизно за 50 кілометрів на північ від Парижа. Місце включає дві прибудовані будівлі: Маленький замок, побудований близько 1560 року для Анни де Монморансі, та Великий замок, який був зруйнований під час Французької революції та відновлений у 1870-х роках. Він належить Інституту Франції, якому він був заповіданий за заповітом Анрі д'Орлеана, герцога Осмальського.",
        },
    },
    {
        id: 'GB1',
        name: {
            ru: 'Озеро Лох-Несс',
            en: 'Loch Ness',
            uk: 'Озеро Лох-Несс',
        },
        coutryId: 'GB',
        thumbnail: {
            url: GB1,
            alt: {
                ru: 'Озеро Лох-Несс',
                en: 'Loch Ness',
                uk: 'Озеро Лох-Несс',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Озеро Лох-Несс — второе по величине пресноводное озеро Шотландии, но первое по популярности; одна из самых интересных достопримечательностей Великобритании. Расположенное недалеко от Инвернесса, оно славится тем, что в нем водится огромное чудовище, хотя этот факт пока не был доказан.',
            en:
                'Loch Ness is the second largest freshwater lake in Scotland, but the first in popularity; one of the most interesting sights in Great Britain. Located near Inverness, it is famous for having a huge monster in it, although this fact has not yet been proven.',
            ua:
                "Озеро Лох-Несс - друге за величиною прісноводне озеро Шотландії, але перше за популярністю; одна з найцікавіших пам'яток Великобританії. Розташоване недалеко від Інвернесса, воно славиться тим, що в ньому водиться величезне чудовисько, хоча цей факт поки не був доведений.",
        },
    },
    {
        id: 'GB2',
        name: {
            ru: 'Виндзорский замок',
            en: 'Windsor Castle',
            uk: 'Віндзорський замок',
        },
        coutryId: 'GB',
        thumbnail: {
            url: GB2,
            alt: {
                ru: 'Виндзорский замок',
                en: 'Windsor Castle',
                uk: 'Віндзорський замок',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Виндзорский замок-резиденция монархов Англии, которую еще довольно часто называют «Извилистые берега», внесена в книгу Рекордов Гиннеса, как самый большой на планете замок. Его размеры составляют 580х165 метров.',
            en:
                'Windsor Castle, the residence of the monarchs of England, which is often called "Winding Shores", is included in the Guinness Book of Records as the largest castle on the planet. Its dimensions are 580x165 meters.',
            ua:
                'Віндзорський замок-резиденція монархів Англії, яку ще досить часто називають «Звивисті береги», внесена в книгу Рекордів Гіннеса, як найбільший на планеті замок. Його розміри становлять 580х165 метрів.',
        },
    },
    {
        id: 'GB3',
        name: {
            ru: 'Тауэрский мост',
            en: 'Tower Bridge',
            uk: 'Тауерський міст',
        },
        coutryId: 'GB',
        thumbnail: {
            url: GB3,
            alt: {
                ru: 'Тауэрский мост',
                en: 'Tower Bridge',
                uk: 'Тауерський міст',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Тауэрский мост — комбинированный подвесной (висячий) и разводной (раскрывающийся) мост в центре Лондона над рекой Темзой, недалеко от Лондонского Тауэра. Мост состоит из двух мостовых башен, соединенных на верхнем уровне двумя горизонтальными проходами, предназначенных для противостояния силе горизонтального натяжения, создаваемой подвесными секциями моста на боковых сторонах башен.',
            en:
                'Tower Bridge is a combined suspension (suspension) and drawbridge (drop-down) bridge in central London over the River Thames, near the Tower of London. The bridge consists of two bridge towers, connected at the upper level by two horizontal walkways, designed to withstand the horizontal tensile force generated by the suspension sections of the bridge on the sides of the towers.',
            ua:
                "Тауерський міст - комбінований підвісний (висячий) і розвідний (розкривається) міст в центрі Лондона над річкою Темзою, недалеко від Лондонського Тауера. Міст складається з двох мостових веж, з'єднаних на верхньому рівні двома горизонтальними проходами, призначених для протистояння силі горизонтального натягу, створюваної підвісними секціями моста на бічних сторонах веж.",
        },
    },
    {
        id: 'GB4',
        name: {
            ru: 'Стоўнхендж',
            en: 'Stonehenge',
            uk: 'Стоунхендж',
        },
        coutryId: 'GB',
        thumbnail: {
            url: GB4,
            alt: {
                ru: 'Стоўнхендж',
                en: 'Stonehenge',
                uk: 'Стоунхендж',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Один из самых знаменитых археологических памятников в мире, Стоунхендж состоит из кольцевых и подковообразных сооружений, построенных из больших менгиров. Он находится в центре самого плотного комплекса памятников неолита и бронзового века в Англии.',
            en:
                'One of the most famous archaeological sites in the world, Stonehenge is made up of ring and horseshoe structures built from large menhirs. It sits at the center of the densest Neolithic and Bronze Age complex in England.',
            ua:
                "Один з найзнаменитіших археологічних пам'яток в світі, Стоунхендж складається з кільцевих і підковоподібних споруд, побудованих з великих менгиров. Він знаходиться в центрі самого щільного комплексу пам'яток неоліту і бронзового століття в Англії.",
        },
    },
    {
        id: 'GB5',
        name: {
            ru: 'Дуврский замок',
            en: 'Dover castle',
            uk: 'замок Дувр',
        },
        coutryId: 'GB',
        thumbnail: {
            url: GB5,
            alt: {
                ru: 'Дуврский замок',
                en: 'Dover castle',
                uk: 'замок Дувр',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Построенный на высокой меловой скале, в стратегической позиции перед угрозами со стороны Ла-Манша, Дуврский замок всегда был важной частью британской линии обороны.',
            en:
                "Built on a high chalk cliff, in a strategic position facing threats from across the Channel, Dover castle has always been an important part of Britain's line of defence.",
            ua:
                'Побудований на високій крейдяній скелі, у стратегічному положенні, що стикається із загрозами з боку Ла-Маншу, замок Дувр завжди був важливою частиною лінії оборони Великобританії.',
        },
    },
    {
        id: 'GB6',
        name: {
            ru: 'А́льберт-холл',
            en: 'Albert Hall',
            uk: 'Альберт-хол',
        },
        coutryId: 'GB',
        thumbnail: {
            url: GB6,
            alt: {
                ru: 'А́льберт-холл',
                en: 'Albert Hall',
                uk: 'Альберт-хол',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'А́льберт-холл  — концертный зал в Лондоне. Считается одной из наиболее престижных концертных площадок в Великобритании и во всём мире. Построен в память принца-консорта Альберта при его вдове королеве Виктории. Расположен в Южном Кенсингтоне.',
            en:
                'Albert Hall is a concert hall in London. It is considered one of the most prestigious concert venues in the UK and around the world. Built in memory of the Prince Consort Albert during the reign of his widow Queen Victoria. Located in South Kensington.',
            ua:
                'Альберт-хол - концертний зал в Лондоні. Вважається однією з найбільш престижних концертних майданчиків в Великобританії і в усьому світі. Побудований на згадку принца-консорт Альберта при його вдові королеві Вікторії. Розташований в Південному Кенсінгтоні.',
        },
    },
    {
        id: 'DE1',
        name: {
            ru: 'Обербаумбрюкке',
            en: 'Oberbaumbrücke',
            uk: 'Обербаумбрюкке',
        },
        coutryId: 'DE',
        thumbnail: {
            url: DE1,
            alt: {
                ru: 'Обербаумбрюкке',
                en: 'Oberbaumbrücke',
                uk: 'Обербаумбрюкке',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Обербаумбрюкке — мост через Шпрее в Берлине, соединяющий районы Кройцберг и Фридрихсхайн, символ административного округа Фридрихсхайн-Кройцберг.',
            en:
                'Oberbaumbrücke is a bridge over the Spree in Berlin, connecting the districts of Kreuzberg and Friedrichshain, a symbol of the administrative district of Friedrichshain-Kreuzberg.',
            ua:
                "Обербаумбрюкке - міст через Шпрее в Берліні, що з'єднує райони Кройцберг і Фрідріхсхайн, символ адміністративного округу Фрідріхсхайн-Кройцберг.",
        },
    },
    {
        id: 'DE2',
        name: {
            ru: 'Цвингер',
            en: 'The Zwinger',
            uk: 'Цвінгер',
        },
        coutryId: 'DE',
        thumbnail: {
            url: DE2,
            alt: {
                ru: 'Цвингер',
                en: 'The Zwinger',
                uk: 'Цвінгер',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Цвингер — архитектурный комплекс дворцовых зданий в Дрездене, столице Саксонии. Построен в стиле южногерманского барокко. Расположен в северо-западной части «Внутреннего старого города». Цвингер — средневековый фортификационный термин, означающий пространство между бастионами, сходящимися под острым углом.',
            en:
                'The Zwinger is an architectural complex of palace buildings in Dresden, the capital of Saxony. Built in the style of the South German Baroque. Located in the northwestern part of the Innere Altstadt. Zwinger is a medieval fortification term meaning the space between bastions converging at an acute angle.',
            ua:
                'Цвінгер - архітектурний комплекс палацових будівель в Дрездені, столиці Саксонії. Побудований в стилі південнонімецького бароко. Розташований в північно-західній частині «Внутрішнього старого міста». Цвінгер - середньовічний фортифікаційний термін, що означає простір між бастіонами, що сходяться під гострим кутом.',
        },
    },
    {
        id: 'DE3',
        name: {
            ru: 'Площадь Республики',
            en: '"Republic Square',
            uk: 'Площа Республіки',
        },
        coutryId: 'DE',
        thumbnail: {
            url: DE3,
            alt: {
                ru: 'Площадь Республики',
                en: '"Republic Square',
                uk: 'Площа Республіки',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Площадь Республики расположена в берлинском районе Тиргартен в округе Митте в новом правительственном квартале германской столицы перед Рейхстагом. В непосредственной близости протекает Шпрее. На площади размером в 36 900 м², прилегающей к парку Тиргартен, разбит газон с боскетами.',
            en:
                "Republic Square is located in Berlin's Tiergarten district in the Mitte district in the new government quarter of the German capital in front of the Reichstag. The Spree flows in the immediate vicinity. On an area of ​​36,900 m² adjacent to the Tiergarten park, there is a lawn with bosquets.",
            ua:
                'Площа Республіки розташована в берлінському районі Тіргартен в окрузі Мітте в новому урядовому кварталі німецької столиці перед Рейхстагом. У безпосередній близькості протікає Шпрее. На площі розміром в 36 900 м, прилеглої до парку Тіргартен, розбитий газон з боскетами.',
        },
    },
    {
        id: 'DE4',
        name: {
            ru: 'Замок Морицбург',
            en: 'Moritzburg Castle',
            uk: 'Замок Морицбург',
        },
        coutryId: 'DE',
        thumbnail: {
            url: DE4,
            alt: {
                ru: 'Замок Морицбург',
                en: 'Moritzburg Castle',
                uk: 'Замок Морицбург',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Замок Морицбург — охотничий замок саксонских курфюрстов дома Веттинов, расположенный в городе Морицбург, в 14 км от Дрездена. Замок носит имя курфюрста Морица Саксонского, по указанию которого в 1542—1546 годах было построено загородное поместье для проведения придворной охоты.',
            en:
                'Moritzburg Castle is a hunting castle of the Saxon electors of the Wettin house, located in the city of Moritzburg, 14 km from Dresden. The castle bears the name of Elector Moritz of Saxony, on whose instructions a country estate was built in 1542-1546 for the court hunting.',
            ua:
                "Замок Морицбург - мисливський замок саксонських курфюрстів будинку Веттинів, розташований в місті Морицбург, в 14 км від Дрездена. Замок носить ім'я курфюрста Моріца Саксонського, за вказівкою якого в 1542-1546 роках було побудовано заміський маєток для проведення придворної полювання.",
        },
    },
    {
        id: 'DE5',
        name: {
            ru: 'Замок Нойшванштайн',
            en: 'Neuschwanstein Castle',
            uk: 'Замок Нойшванштайн',
        },
        coutryId: 'DE',
        thumbnail: {
            url: DE5,
            alt: {
                ru: 'Замок Нойшванштайн',
                en: 'Neuschwanstein Castle',
                uk: 'Замок Нойшванштайн',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Замок Нойшванштайн — романтический замок баварского короля Людвига II около городка Фюссен и замка Хоэншвангау в юго-западной Баварии, недалеко от австрийской границы. Одно из самых популярных среди туристов мест на юге Германии.',
            en:
                'Neuschwanstein Castle is a romantic castle of the Bavarian King Ludwig II near the town of Füssen and Hohenschwangau Castle in southwestern Bavaria, near the Austrian border. One of the most popular tourist destinations in southern Germany.',
            ua:
                'Замок Нойшванштайн - романтичний замок баварського короля Людвіга II біля містечка Фюссен і замку Хоеншвангау в південно-західній Баварії, недалеко від австрійського кордону. Одне з найпопулярніших серед туристів місць на півдні Німеччини.',
        },
    },
    {
        id: 'DE6',
        name: {
            ru: 'Замок Хоэншвангау',
            en: 'Hohenschwangau Castle',
            uk: 'Замок Хоеншвангау',
        },
        coutryId: 'DE',
        thumbnail: {
            url: DE6,
            alt: {
                ru: 'Замок Хоэншвангау',
                en: 'Hohenschwangau Castle',
                uk: 'Замок Хоеншвангау',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Замок Хоэншвангау и возводился, чтобы позволить членам королевских семей быть ближе к удивительной природе, наслаждаться прекрасными лесами и великолепным, кристально-чистым озером, находящимся неподалеку.',
            en:
                'Hohenschwangau Castle was built with the goal of allowing members of royal families to be closer to amazing nature, to enjoy beautiful forests and a magnificent, crystal-clear lake nearby.',
            ua:
                'Замок Хоеншвангау і зводився з метою, щоб дозволити членам королівських сімей бути ближче до дивовижну природу, насолоджуватися прекрасними лісами і чудовим, кристально-чистим озером, що знаходиться неподалік.',
        },
    },
    {
        id: 'CZ1',
        name: {
            ru: 'Ка́рлов мост',
            en: 'Charles Bridge',
            uk: 'Карлів міст',
        },
        coutryId: 'CZ',
        thumbnail: {
            url: CZ1,
            alt: {
                ru: 'Ка́рлов мост',
                en: 'Charles Bridge',
                uk: 'Карлів міст',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Ка́рлов мост — средневековый мост в Праге через реку Влтаву, соединяющий исторические районы Мала Страна и Старое Место. Длина моста 520 м, ширина — 9,5 м. Мост опирается на 16 мощных арок, облицованных тёсаными блоками из песчаника. Каменный мост изначально назывался Пражским, в 1870 году официально переименован в честь основателя Карла IV. Его украшают тридцать скульптур, преимущественно религиозного содержания.',
            en:
                'Charles Bridge is a medieval bridge in Prague over the Vltava River, connecting the historical districts of Mala Strana and Old Town. The length of the bridge is 520 m, width - 9.5 m. The bridge rests on 16 powerful arches, faced with hewn sandstone blocks. The stone bridge was originally called Prague Bridge, in 1870 it was officially renamed in honor of the founder Charles IV. It is decorated with thirty sculptures, mostly of religious content.',
            ua:
                "Карлів міст - середньовічний міст в Празі через річку Влтаву, що з'єднує історичні райони Мала Страна і Старе Місто. Довжина моста 520 м, ширина - 9,5 м. Міст спирається на 16 потужних арок, облицьованих тесаного блоками з пісковика. Кам'яний міст спочатку називався Празьким, в 1870 році офіційно перейменований на честь засновника Карла IV. Його прикрашають тридцять скульптур, переважно релігійного змісту.",
        },
    },
    {
        id: 'CZ2',
        name: {
            ru: 'Чешский карст',
            en: 'Bohemian Karst',
            uk: 'Чеськи карст',
        },
        coutryId: 'CZ',
        thumbnail: {
            url: CZ2,
            alt: {
                ru: 'Чешский карст',
                en: 'Bohemian Karst',
                uk: 'Чеськи карст',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Охраняемая ландшафтная зона Чешского карста была объявлена ​​в 1972 году на площади 128 км2 для защиты наиболее ценной части Баррандианской котловины. Он расположен в Среднечешском крае между Прагой (Радотин) и Бероун, самая известная часть туристической зоны - это Карлштейн.',
            en:
                'The protected landscape zone of the Bohemian Karst was declared in 1972 on an area of ​​128 km2 to protect the most valuable part of the Barrandian Basin. It is located in the Central Bohemian Region between Prague (Radotin) and Beroun, the most famous part of the tourist area is Karlštejn.',
            ua:
                'Під охороною ландшафтна зона Чеського карсту була оголошена в 1972 році на площі 128 км2 для захисту найціннішої частини Баррандіанской улоговини. Він розташований в Центральночеський краї між Прагою (Радотина) і Бероун, найвідоміша частина туристичної зони - це Карлштейн.',
        },
    },
    {
        id: 'CZ3',
        name: {
            ru: 'Помпеи',
            en: 'Pompeii',
            uk: 'Помпеї',
        },
        coutryId: 'CZ',
        thumbnail: {
            url: CZ3,
            alt: {
                ru: 'Стоўнхендж',
                en: 'Pompeii',
                uk: 'Помпеї',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Пороховая башня — готическая башня в Праге, памятник архитектуры XV века. Находится на Площади Республики по соседству с Общественным домом и соединяется с ним крытым мостом.',
            en:
                'Powder Tower - a Gothic tower in Prague, an architectural monument of the 15th century. It is located on Republic Square next to the Public House and is connected to it by a covered bridge.',
            ua:
                "Порохова вежа - готична вежа в Празі, пам'ятник архітектури XV століття. Знаходиться на Площі Республіки по сусідству з Громадським будинком і з'єднується з ним критим мостом.",
        },
    },
    {
        id: 'CZ4',
        name: {
            ru: 'Собор Святого Вита',
            en: 'The Cathedral of St. Vitus',
            uk: 'Собор Святого Віта',
        },
        coutryId: 'CZ',
        thumbnail: {
            url: CZ4,
            alt: {
                ru: 'Собор Святого Вита',
                en: 'The Cathedral of St. Vitus',
                uk: 'Собор Святого Віта',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Собор Святого Вита, Вацлава и Войтеха — готический католический собор в Пражском Граде, местопребывание архиепископа Пражского. Собор причисляется к жемчужинам европейской готики, является художественной и национально-исторической святыней Чехии.',
            en:
                'The Cathedral of St. Vitus, Wenceslas and Vojtech is a Gothic Catholic cathedral in Prague Castle, the seat of the Archbishop of Prague. The cathedral is ranked among the pearls of European Gothic, is an artistic and national-historical shrine of the Czech Republic.',
            ua:
                'Собор Святого Віта, Вацлава і Войтеха - готичний католицький собор в Празькому Граді, місцеперебування архієпископа Празького. Собор зараховується до перлин європейської готики, є художньої та національно-історичної святинею Чехії.',
        },
    },
    {
        id: 'CZ5',
        name: {
            ru: 'Замок Ка́рлштейн',
            en: 'Karlštejn Castle',
            uk: 'Замок Карлштейн',
        },
        coutryId: 'CZ',
        thumbnail: {
            url: CZ5,
            alt: {
                ru: 'Замок Ка́рлштейн',
                en: 'Karlštejn Castle',
                uk: 'Замок Карлштейн',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Замок Ка́рлштейн  назван в честь его основателя Карла IV, короля Чехии и императора Священной Римской империи. Основан в 1348 году как летняя резиденция Карла IV, а также хранилище чешских королевских регалий и святых реликвий, собирательство которых было страстью этого монарха.',
            en:
                "Karlštejn Castle is named after its founder Charles IV, King of Bohemia and Emperor of the Holy Roman Empire. Founded in 1348 as the summer residence of Charles IV, as well as a repository of Czech royal regalia and holy relics, the collection of which was the monarch's passion.",
            ua:
                'Замок Карлштейн названий на честь його засновника Карла IV, короля Чехії і імператора Священної Римської імперії. Заснований в 1348 році як літня резиденція Карла IV, а також сховище чеських королівських регалій і святих реліквій, збиральництво яких було пристрастю цього монарха.',
        },
    },
    {
        id: 'CZ6',
        name: {
            ru: 'Культу́рный ландша́фт Ле́днице-Ва́льтице',
            en: 'The cultural landscape of Ladnice-Valtice',
            uk: 'Культурний ландшафт Леднице-Вальтіце',
        },
        coutryId: 'CZ',
        thumbnail: {
            url: CZ6,
            alt: {
                ru: 'Культу́рный ландша́фт Ле́днице-Ва́льтице',
                en: 'The cultural landscape of Ladnice-Valtice',
                uk: 'Культурний ландшафт Леднице-Вальтіце',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Культу́рный ландша́фт Ле́днице-Ва́льтице — ландшафтный комплекс в Чехии, включён в список всемирного наследия ЮНЕСКО. ',
            en:
                'The cultural landscape of Ladnice-Valtice is a landscape complex in the Czech Republic, included in the UNESCO World Heritage List.',
            ua:
                'Культурний ландшафт Леднице-Вальтіце - ландшафтний комплекс в Чехії, включений в список всесвітньої спадщини ЮНЕСКО.',
        },
    },
    {
        id: 'AT1',
        name: {
            ru: 'Помпеи',
            en: 'Pompeii',
            uk: 'Помпеї',
        },
        coutryId: 'AT',
        thumbnail: {
            url: AT1,
            alt: {
                ru: 'Помпеи',
                en: 'Pompeii',
                uk: 'Помпеї',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Место рождения Моцарта было местом рождения Вольфганга Амадея Моцарта на улице Гетрайдегассе № 9 в Зальцбурге, Австрия. Семья Моцарта проживала на третьем этаже с 1747 по 1773 год. Сам Моцарт родился здесь 27 января 1756 года. Он был седьмым ребенком Леопольда Моцарта, который был музыкантом Королевской палаты Зальцбурга.',
            en:
                "Mozart's birthplace was the birthplace of Wolfgang Amadeus Mozart at No. 9 Getreidegasse in Salzburg, Austria. The Mozart family resided on the third floor from 1747 to 1773. Mozart himself was born here on 27 January 1756.He was the seventh child of Leopold Mozart, who was a musician of the Salzburg Royal Chamber.",
            ua:
                "Місцем народження Моцарта було місце народження Вольфганга Амадея Моцарта в №9 Getreidegasse в Зальцбурзі, Австрія. Сім'я Моцартів проживала на третьому поверсі з 1747 по 1773 рік. Сам Моцарт народився тут 27 січня 1756 року. Він був сьомою дитиною Леопольда Моцарта, який був музикантом Королівської палати Зальцбурга.",
        },
    },
    {
        id: 'AT2',
        name: {
            ru: 'Дворец Бельведер',
            en: 'The Belvedere Palace',
            uk: 'Палац Бельведер',
        },
        coutryId: 'AT',
        thumbnail: {
            url: AT2,
            alt: {
                ru: 'Дворец Бельведер',
                en: 'The Belvedere Palace',
                uk: 'Палац Бельведер',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Дворец Бельведер в Вене - это дворцовый комплекс, построенный Иоганном Лукасом фон Хильдебрандтом между 1714 и 1723 годами для принца Евгения Савойского. Верхний Бельведер и Нижний Бельведер (названные из-за их расположения на склоне к югу от города в то время) образуют ансамбль в стиле барокко с прилегающими садами. В двух дворцовых зданиях сейчас находятся коллекции Бельведера (австрийской галереи Бельведер) и залы для временных выставок.',
            en:
                'The Belvedere Palace in Vienna is a palace complex built by Johann Lucas von Hildebrandt between 1714 and 1723 for Prince Eugene of Savoy. The Upper Belvedere and the Lower Belvedere (named because of their location on a slope that climbed south of the city at that time) form a baroque ensemble with the connecting gardens. The two palace buildings now house the collections of the Belvedere (Austrian Belvedere Gallery) and rooms for temporary exhibitions.',
            ua:
                'Палац Бельведер у Відні - це палацовий комплекс, побудований Йоганом Лукасом фон Хільдебрандтом між 1714 і 1723 роками для принца Євгена Савойського. Верхній Бельведер і Нижній Бельведер (названі через розташування на схилі на південь від міста на той час) утворюють бароковий ансамбль із сполученими садами. Зараз у двох палацових будівлях розміщені колекції Бельведер (австрійська галерея Бельведер) та приміщення для тимчасових виставок.',
        },
    },
    {
        id: 'AT3',
        name: {
            ru: 'Хо́фбург',
            en: 'Hofburg',
            uk: 'Хофбург',
        },
        coutryId: 'AT',
        thumbnail: {
            url: AT3,
            alt: {
                ru: 'Хо́фбург',
                en: 'Hofburg',
                uk: 'Хофбург',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Хо́фбург — зимняя резиденция австрийских Габсбургов и основное местопребывание императорского двора в Вене. Всего в ней 2600 залов и комнат. Некоторые из помещений используются как официальная резиденция президента Австрии.',
            en:
                'Hofburg is the winter residence of the Austrian Habsburgs and the main seat of the imperial court in Vienna. There are 2,600 halls and rooms in it. Some of the premises are used as the official residence of the President of Austria.',
            ua:
                'Хофбург - зимова резиденція австрійських Габсбургів і основне місцеперебування імператорського двору у Відні. Всього в ній 2600 залів і кімнат. Деякі з приміщень використовуються як офіційна резиденція президента Австрії.',
        },
    },
    {
        id: 'AT4',
        name: {
            ru: 'А́йсризенвельт',
            en: 'Eisriesenwelt',
            uk: 'Айсризенвельт',
        },
        coutryId: 'AT',
        thumbnail: {
            url: AT4,
            alt: {
                ru: 'А́йсризенвельт',
                en: 'Pompeii',
                uk: 'Айсризенвельт',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'А́йсризенвельт — это протяжённая пещера в Тенненгебирге в земле Зальцбург в Австрии, рядом с местечком Верфен. Айсризенвельт является самой большой ледяной пещерой в мире. Общая длина пещеры 42 км, глубина — 407 м.',
            en:
                'Eisriesenwelt is an extended cave in Tennengebirge in Salzburg, Austria, near Werfen. Eisriesenwelt is the largest ice cave in the world. The total length of the cave is 42 km, the depth is 407 m.',
            ua:
                'Айсризенвельт - це протяжна печера в Тенненгебирге в землі Зальцбург в Австрії, поруч з містечком верфей. Айсризенвельт є найбільшою крижаною печерою в світі. Загальна довжина печери 42 км, глибина - 407 м.',
        },
    },
    {
        id: 'AT5',
        name: {
            ru: 'Замок Герберштейн',
            en: 'Herberstein Castle',
            uk: 'Замок Герберштейн',
        },
        coutryId: 'AT',
        thumbnail: {
            url: AT5,
            alt: {
                ru: 'Замок Герберштейн',
                en: 'Pompeii',
                uk: 'Замок Герберштейн',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Замок Герберштейн — замок, расположенный на территории австрийской общины Штубенберг, недалеко от одноимённого зоопарка; самые древние части замка, изначально называвшегося «Хервигштайн», датируются концом XIII века.',
            en:
                'Herberstein Castle - a castle located on the territory of the Austrian community of Stubenberg, not far from the zoo of the same name; the oldest parts of the castle, originally called "Herwigstein", date back to the end of the 13th century.',
            ua:
                'Замок Герберштейн - замок, розташований на території австрійського товариства Штубенберг, недалеко від однойменного зоопарку; найдавніші частини замку, спочатку називався «Хервігштайн», датуються кінцем XIII століття.',
        },
    },
    {
        id: 'AT6',
        name: {
            ru: 'Хоэнза́льцбург',
            en: 'Hohensalzburg',
            uk: 'Хоензальцбург',
        },
        coutryId: 'AT',
        thumbnail: {
            url: AT6,
            alt: {
                ru: 'Хоэнза́льцбург',
                en: 'Hohensalzburg',
                uk: 'Хоензальцбург',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Хоэнза́льцбург — одна из крупнейших средневековых крепостей Европы. Расположена на вершине горы Фестунг рядом с Зальцбургом, Австрия, на высоте 120 метров. Крепость Зальцбурга — одна из крупнейших из целиком сохранившихся средневековых крепостей Европы. Площадь крепости — 30 тыс. м².',
            en:
                'Hohensalzburg is one of the largest medieval fortresses in Europe. Located on the top of Mount Festung near Salzburg, Austria, at an altitude of 120 meters. The Salzburg Fortress is one of the largest surviving medieval fortresses in Europe. The area of ​​the fortress is 30 thousand square meters.',
            ua:
                'Хоензальцбург - одна з найбільших середньовічних фортець Європи. Розташована на вершині гори Фестунг поруч з Зальцбургом, Австрія, на висоті 120 метрів. Фортеця Зальцбурга - одна з найбільших з цілком збережених середньовічних фортець Європи. Площа фортеці - 30 тис. М².',
        },
    },
    {
        id: 'ES1',
        name: {
            ru: 'Альхафери́я',
            en: 'Aljafería',
            uk: 'Альхаферія',
        },
        coutryId: 'ES',
        thumbnail: {
            url: ES1,
            alt: {
                ru: 'Альхафери́я',
                en: 'Aljafería',
                uk: 'Альхаферія',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Альхафери́я — укреплённый дворец мавританского периода в Сарагосе, воссозданный усилиями реконструкторов во второй половине XX века.',
            en:
                'Aljafería is a fortified palace of the Moorish period in Zaragoza, recreated by the efforts of reenactors in the second half of the 20th century.',
            ua:
                'Альхаферія - укріплений палац мавританського періоду в Сарагосі, відтворений зусиллями реконструкторів у другій половині XX століття.',
        },
    },
    {
        id: 'ES2',
        name: {
            ru: 'Дом с шипа́ми',
            en: 'House with thorns',
            uk: 'Будинок з шипами',
        },
        coutryId: 'ES',
        thumbnail: {
            url: ES2,
            alt: {
                ru: 'Дом с шипа́ми',
                en: 'House with thorns',
                uk: 'Будинок з шипами',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Дом с шипа́ми — здание в Барселоне в районе Эшампле построенное по проекту архитектора-модерниста Жозепа Пуч-и-Кадафалька. Здание занимает квартал между проспектом Диагональ, улицей Брук и улицей Росельо и было построено в 1905 году.',
            en:
                'House with thorns is a building in Barcelona in the Eixample district, designed by the modernist architect Josep Puig y Cadafalca. The building occupies a block between Diagonal Avenue, Brook Street and Roselló Street and was built in 1905.',
            ua:
                'Будинок з шипами - будівля в Барселоні в районі Ешампле побудоване за проектом архітектора-модерніста Жозепа Пуч-і-Кадафальк. Будівля займає квартал між проспектом Діагональ, вулицею Брук і вулицею Росельо і було побудовано в 1905 році.',
        },
    },
    {
        id: 'ES3',
        name: {
            ru: 'Кафедральный собор Санта-Мария',
            en: 'Cathedral of Santa Maria',
            uk: 'Кафедральний собор Санта-Марія',
        },
        coutryId: 'ES',
        thumbnail: {
            url: ES3,
            alt: {
                ru: 'Кафедральный собор Санта-Мария',
                en: 'Cathedral of Santa Maria',
                uk: 'Кафедральний собор Санта-Марія',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Кафедральный собор Санта-Мария, также Ла Сеу — готический кафедральный собор епархии Мальорки, расположенный в городе Пальма-де-Мальорка, административном центре Балеарских островов. В обычной речи называется La Seu, или Sa Seu, — «Епископство»',
            en:
                'Cathedral of Santa Maria, also La Seu - Gothic cathedral of the Diocese of Mallorca, located in the city of Palma de Mallorca, the administrative center of the Balearic Islands. Commonly called La Seu, or Sa Seu, "Bishopric"',
            ua:
                'Кафедральний собор Санта-Марія, також Ла Сеу - готичний кафедральний собор єпархії Мальорки, розташований в місті Пальма-де-Мальорка, адміністративному центрі Балеарських островів. У звичайній мові називається La Seu, або Sa Seu, - «Єпископство»',
        },
    },
    {
        id: 'ES4',
        name: {
            ru: 'Атапуэрка',
            en: 'Atapuerca',
            uk: 'Атапуерка',
        },
        coutryId: 'ES',
        thumbnail: {
            url: ES4,
            alt: {
                ru: 'Атапуэрка',
                en: 'Atapuerca',
                uk: 'Атапуерка',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Археологические раскопки Атапуэрка являются одними из самых важных в Европе, здесь обнаружены следы жизни гоминидов миллион лет назад. Сима-де-лос-Уэсос - это пещера, в которой были обнаружены кости более 32 тел людей разного возраста и обоих полов, и является одним из самых известных примеров колонии той эпохи. Этот объект был внесен в список Всемирного наследия ЮНЕСКО в 2000 году.',
            en:
                'The archaeological site of Atapuerca is one of the most important in Europe, with traces of hominid life discovered here a million years ago. Sima de los Huesos is a cave in which the bones of more than 32 bodies of people of different ages and both genders were found, and is one of the most famous examples of a colony of that era. This site was declared a UNESCO World Heritage Site in 2000.',
            ua:
                "Археологічні розкопки Атапуерка є одними з найважливіших в Європі, тут виявлені сліди життя гомінідів мільйон років тому. Сіма-де-лос-Уесос - це печера, в якій були виявлені кістки більш 32 тіл людей різного віку і обох статей, і є одним з найвідоміших прикладів колонії тієї епохи. Цей об'єкт був внесений до списку Всесвітньої спадщини ЮНЕСКО в 2000 році.",
        },
    },
    {
        id: 'ES5',
        name: {
            ru: 'Камп Но́у',
            en: 'Camp Nou',
            uk: 'Камп Ноу',
        },
        coutryId: 'ES',
        thumbnail: {
            url: ES5,
            alt: {
                ru: 'Камп Но́у',
                en: 'Camp Nou',
                uk: 'Камп Ноу',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                '«Камп Но́у»  ( в переводе «Новое поле») — стадион футбольного клуба «Барселона». С момента своего открытия в 1957 году стадион принадлежал испанскому футбольному клубу и вначале был назван Estadi del FC Barcelona (Стадион ФК «Барселона»). Официально своё нынешнее название он получил в 2000 году после игры против футбольного клуба «Реал Мадрид».',
            en:
                'Camp Nou (translated as “New Field”) is the stadium of the Barcelona football club. Since its opening in 1957, the stadium has been owned by a Spanish football club and was originally named Estadi del FC Barcelona. It received its current name officially in 2000 after playing against Real Madrid football club.',
            ua:
                '«Камп Ноу» (в перекладі «Нове поле») - стадіон футбольного клубу «Барселона». З моменту свого відкриття в 1957 році стадіон належав іспанському футбольному клубу і спочатку був названий Estadi del FC Barcelona (Стадіон ФК «Барселона»). Офіційно свою нинішню назву він отримав в 2000 році після гри проти футбольного клубу «Реал Мадрид».',
        },
    },
    {
        id: 'ES6',
        name: {
            ru: 'Помпеи',
            en: 'Pompeii',
            uk: 'Помпеї',
        },
        coutryId: 'ES',
        thumbnail: {
            url: ES6,
            alt: {
                ru: 'Стоўнхендж',
                en: 'Pompeii',
                uk: 'Помпеї',
            },
            width: 100,
            height: 100,
        },
        summary: {
            ru:
                'Триумфальная арка — памятник в Барселоне, разделяющий бульвар Пасеч де Льюис Компаньс и бульвар Пасеч де Сан Жоан. Служила парадным входом Всемирной выставки 1888 года. Арка возведена архитектором Жузепом Виласекой из красного кирпича, в неомавританском стиле, широко распространённом в то время.',
            en:
                'The Arc de Triomphe is a monument in Barcelona that separates the Pasech de Lewis Compans boulevard and the Pasech de Sant Joan boulevard. Served as the front door of the 1888 World Exhibition. The arch was erected by the architect Josep Vilaseca from red brick, in the neo-Moorish style, which was widespread at that time.',
            ua:
                "Тріумфальна арка - пам'ятник в Барселоні, що розділяє бульвар Пасеч де Льюїс Компаньс і бульвар Пасеч де Сан Жоан. Служила парадним входом Всесвітньої виставки 1888 року. Арка зведена архітектором Жузеп Віласекой з червоної цегли, в неомавританском стилі, широко поширеному в той час.",
        },
    },
];

function sortAttr(country) {
    return attractions.filter((el) => el.coutryId === country);
}
export { sortAttr };
