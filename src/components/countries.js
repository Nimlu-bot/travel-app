import PropTypes from 'prop-types';
import * as images from './countryImаges';

export const countryPropTypes = PropTypes.shape({
    name: PropTypes.shape({
        ru: PropTypes.string,
        en: PropTypes.string,
        ua: PropTypes.string,
    }),
    capital: PropTypes.shape({
        name: PropTypes.shape({
            ru: PropTypes.string,
            en: PropTypes.string,
            ua: PropTypes.string,
        }),
    }),
    iso: PropTypes.string,
    thumbnail: PropTypes.shape({
        url: PropTypes.string,
    }),
});

export const countries = [
    {
        id: '6e904621-4185-4357-8140-17198979f524',
        iso: 'GB',
        name: {
            en: 'Great Britain',
            ru: 'Великобритания',
            ua: 'Великобританія',
        },
        capital: {
            name: {
                en: 'London',
                ru: 'Лондон',
                ua: 'Лондон',
            },
            coords: [51.509865, -0.118092],
            timezone: {
                standard: '0',
                dst: {
                    type: 'northern',
                    value: 'UTC+01',
                    start: '2021-03-28T01:00:00Z',
                    end: '2021-10-31T01:00:00Z',
                },
            },
        },
        currency: {
            iso: 'GBP',
            name: {
                en: 'Pound sterling',
                ru: 'Фунт стерлингов',
                ua: 'Фунт стерлінгів',
            },
            symbol: '£',
        },
        thumbnail: {
            url: images['GB'],

            width: 100,
            height: 100,
        },
        summary: {
            en: [
                'The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK or U.K.), or Britain, is a sovereign country in north-western Europe, off the north-­western coast of the European mainland. The United Kingdom includes the island of Great Britain, the north-­eastern part of the island of Ireland, and many smaller islands within the British Isles. Northern Ireland shares a land border with the Republic of Ireland. Otherwise, the United Kingdom is surrounded by the Atlantic Ocean, with the North Sea to the east, the English Channel to the south and the Celtic Sea to the south-west, giving it the 12th-longest coastline in the world. The Irish Sea separates Great Britain and Ireland. The total area of the United Kingdom is 94,000 square miles (240,000 km2).',
            ],
            ru: [
                'Великобрита́ния (русское название происходит от англ. Great Britain [ˌɡreɪt ˈbrɪtn]), или Соединённое Короле́вство (United Kingdom [jʊnaɪtɪd kɪŋdəm], сокращённо: UK), полная официальная форма — Соединённое Короле́вство Великобрита́нии и Се́верной Ирла́ндии (англ. The United Kingdom of Great Britain and Northern Ireland), — островное государство на северо-западе от континентальной Европы.',
                'Единое Королевство Великобритания образовалось в 1707 году вследствие политического объединения королевств Шотландии и Англии; но ещё ранее, в 1603 году, король Шотландии Яков VI унаследовал престолы Англии и Ирландии в порядке личной унии (Яков I). В 1800 году Королевство Великобритания и Королевство Ирландия объединились, образовав Соединённое Королевство Великобритании и Ирландии, которое после отделения от него в 1922 году Ирландского Свободного государства стало именоваться Соединённым Королевством Великобритании и Северной Ирландии',
            ],
            ua: [
                'Вели́ка Брита́нія (англ. Great Britain), офіційна назва Сполу́чене Королі́вство Вели́кої Брита́нії та Півні́чної Ірла́ндії (англ. the United Kingdom of Great Britain and Northern Ireland), скорочено — Сполу́чене Королі́вство (англ. the United Kingdom) — суверенна держава, розташована на північному заході від Континентальної Європи, на Британських островах. Територія включає острів Велика Британія, північну частину острова Ірландія та численні невеликі острови[2]. Північна Ірландія — єдина частина Сполученого Королівства, що має суходільний кордон з іншою суверенною країною — Республікою Ірландією. Усі інші кордони є водними: Сполучене Королівство оточене Атлантичним Океаном, Північним морем, Англійським каналом та Ірландським морем, що утворює 12-ту за довжиною берегову лінію у світі. Ірландське море лежить між Великою Британією та Ірландією.',
            ],
        },
        video: {
            url: 'https://www.youtube.com/embed/Uy9sXRk7its',
        },
    },
    {
        id: '6e904621-4185-4357-8140-17198979f524',
        iso: 'FR',
        name: {
            en: 'France',
            ru: 'Франция',
            ua: 'Франція',
        },
        capital: {
            name: {
                en: 'Paris',
                ru: 'Париж',
                ua: 'Париж',
            },
            coords: [51.509865, -0.118092],
            timezone: {
                standard: '1',
                dst: {
                    type: 'northern',
                    value: 'UTC+02',
                    start: '2021-03-28T01:00:00Z',
                    end: '2021-10-31T01:00:00Z',
                },
            },
        },
        currency: {
            iso: 'EUR',
            name: {
                en: 'Euro',
                ru: 'Евро',
                ua: 'Евро',
            },
            symbol: '€',
        },
        thumbnail: {
            url: images['FR'],

            width: 100,
            height: 100,
        },
        summary: {
            en: [
                'The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK or U.K.), or Britain, is a sovereign country in north-western Europe, off the north-­western coast of the European mainland. The United Kingdom includes the island of Great Britain, the north-­eastern part of the island of Ireland, and many smaller islands within the British Isles. Northern Ireland shares a land border with the Republic of Ireland. Otherwise, the United Kingdom is surrounded by the Atlantic Ocean, with the North Sea to the east, the English Channel to the south and the Celtic Sea to the south-west, giving it the 12th-longest coastline in the world. The Irish Sea separates Great Britain and Ireland. The total area of the United Kingdom is 94,000 square miles (240,000 km2).',
            ],
            ru: [
                'Фра́нция (фр. France, [fʁɑ̃s] Информация о файле слушать), официальное название — Францу́зская Респу́блика[11] (фр. République française, [ʁe.py.blik fʁɑ̃.sɛz] Информация о файле слушать), — трансконтинентальное государство, включающее основную территорию в Западной Европе и ряд заморских регионов и территорий. Столица — Париж. Девиз Республики — «Свобода, равенство, братство», её принцип — правление народа, народом и для народа[12].',
            ],
            ua: [
                'Фра́нція (фр. France, фр.: [fʁɑ̃s] ( прослухати)), офіційна назва — Францу́зька Респу́бліка (фр. République française, [ʁepyblik fʁɑ̃sɛːz] ( прослухати)) — держава, територія якої складається з метрополії у Західній Європі та низки заморських володінь. Територія метрополії простягається від Середземного моря до Ла-Маншу та Північного моря, а також від Рейну до Атлантичного океану. Межує на північному сході з Бельгією, Люксембургом і Німеччиною, південному заході з Іспанією та Андоррою, на південному сході з Італією та Монако. До заморських територій входять Французька Гвіана в Південній Америці та кілька островів в Атлантичному, Тихому та Індійському океанах, серед яких Гваделупа, Сен-Бартелемі, Сен-Мартен, Мартиніка, Майотта, Реюньйон, Сен-Пєр і Мікелон, Нова Каледонія та Волліс і Футуна. 18 регіонів країни (5 з яких є заморськими) охоплюють загальну площу у 643 801 км² та мають населення у 67,08 мільйонів осіб (станом на 2020).[2] Франція — унітарна змішана республіка зі столицею у місті Париж, найбільшим містом країни і її головним культурним та економічним центром. Іншими основними міськими територіями є Ліон, Марсель, Тулуза, Бордо, Лілль та Ніцца. Франція, включаючи її заморські території, має найбільшу кількість часових поясів серед усіх країн світу, ',
            ],
        },
        video: {
            url: 'https://www.youtube.com/embed/3Ceo_igCZVY',
        },
    },
    {
        id: '6e904621-4185-4357-8140-17198979f524',
        iso: 'IT',
        name: {
            en: 'Itali',
            ru: 'Италия',
            ua: 'Італія',
        },
        capital: {
            name: {
                en: 'Roma',
                ru: 'Рим',
                ua: 'Рим',
            },
            coords: [51.509865, -0.118092],
            timezone: {
                standard: '1',
                dst: {
                    type: 'northern',
                    value: 'UTC+02',
                    start: '2021-03-28T01:00:00Z',
                    end: '2021-10-31T01:00:00Z',
                },
            },
        },
        currency: {
            iso: 'eur',
            name: {
                en: 'Euro',
                ru: 'Евро',
                ua: 'Евро',
            },
            symbol: '€',
        },
        thumbnail: {
            url: images['IT'],

            width: 100,
            height: 100,
        },
        summary: {
            en: [
                'Italy (Italian: Italia [iˈtaːlja] (About this soundlisten)), officially the Italian Republic (Italian: Repubblica Italiana [reˈpubːlika itaˈljaːna]),[13][14][15][16] is a country consisting of a continental part, delimited by the Alps, a peninsula and several islands surrounding it. Italy is located in Southern Europe,[17][18] and is also considered part of Western Europe.[19][20] A unitary parliamentary republic with Rome as its capital, the country covers a total area of 301,340 km2 (116,350 sq mi) and shares land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. Italy has a territorial enclave in Switzerland (Campione) and a maritime exclave in Tunisian waters (Lampedusa). With around 60 million inhabitants, Italy is the third-most populous member state of the European Union.',
            ],
            ru: [
                'Ита́лия (итал. Italia [iˈtaːlja]), официальное название — Италья́нская Респу́блика (итал. Repubblica Italiana [reˈpubːlika itaˈljaːna]) — государство в Южной Европе, в центре Средиземноморья. Входит в Евросоюз и НАТО с момента их создания, является третьей по величине экономикой еврозоны.	Граничит с Францией на северо-западе (протяжённость границы — 488 км), Швейцарией (740 км) и Австрией (430 км) — на севере, Словенией — на северо-востоке (232 км).	Внутри территории Италии находятся два государства-анклава: государство Сан-Марино и расположенное внутри территории Рима ассоциированное с Италией государство Ватикан, с каждым из которых Италия имеет внутреннюю границу протяжённостью соответственно 39 км и 3,2 км. Занимает Апеннинский полуостров, крайний северо-запад Балканского полуострова, Паданскую равнину, южные склоны Альп, острова Сицилия, Сардиния и ряд мелких островов[7]. На территории Италии находится 55 памятников Всемирного наследия ЮНЕСКО — Италия разделяет с Китаем первое место по их количеству[8].',
            ],
            ua: [
                'Іта́лія (італ. Italia [iˈtaːlja] ( прослухати)), офіційна назва — Італі́йська Респу́бліка (італ. Repubblica Italiana [reˈpubblika itaˈljaːna])[2][3][4][5] — держава на півдні Європи, що складається з півострова, відмежованого Альпами та оточеного кількома островами. Країна розташована у південно-центральній Європі[6][7] і вважається частиною західної Європи.[8][9] Унітарна парламентська республіка зі столицею у місті Рим, що займає територію загальною площею 301 340 км² і межує на суходолі з Францією на північному заході, зі Швейцарією та Австрією на півночі та Словенією на північному сході, а також анклавованими мікродержавами Ватикан, Сан-Марино та Суверенний Мальтійський орден. Італія має територіальний ексклав у Швейцарії (Кампіоне) та морський ексклав у водах Тунісу (Лампедуза). Населення країни — близько 60 мільйонів, що робить її третьою за чисельністю країною-членом Європейського Союзу.',
            ],
        },
        video: {
            url: 'https://www.youtube.com/embed/1rvSsnqZyyc',
        },
    },
    {
        id: '6e904621-4185-4357-8140-17198979f524',
        iso: 'UA',
        name: {
            en: 'Ukraine',
            ru: 'Украина',
            ua: 'Україна',
        },
        capital: {
            name: {
                en: 'Kiev',
                ru: 'Киев',
                ua: 'Київ',
            },
            coords: [51.509865, -0.118092],
            timezone: {
                standard: '2',
                dst: {
                    type: 'northern',
                    value: 'UTC+03',
                    start: '2021-03-28T01:00:00Z',
                    end: '2021-10-31T01:00:00Z',
                },
            },
        },
        currency: {
            iso: 'uah',
            name: {
                en: 'Hryvnia',
                ru: 'Гривна',
                ua: 'Гривня',
            },
            symbol: '₴',
        },
        thumbnail: {
            url: images['UA'],

            width: 100,
            height: 100,
        },
        summary: {
            en: [
                'Ukraine (Ukrainian: Україна, romanized: Ukrayina, pronounced [ʊkrɐˈjinɐ] (About this soundlisten); Russian: Украина, romanized: Ukraina pronounced [ʊkrɐˈinə]) is a country in Eastern Europe. It is bordered by Russia to the east and north-east[c]; Belarus to the north; Poland, Slovakia and Hungary to the west; and Romania, Moldova and the Black Sea to the south. Including Crimea, Ukraine has an area of 603,628 km2 (233,062 sq mi), and is the second-largest country in Europe after Russia. Excluding Crimea, Ukraine has a population of about 41.5 million, making it the eighth-most populous country in Europe. Its capital and largest city is Kyiv.',
            ],
            ru: [
                'Украи́на (укр. Україна [ukrɑˈjinɑ]) — государство в Восточной и частично Центральной Европе. Население, по итогам переписи 2001 года, составляло 48 240 902 постоянных жителя[13] и 48 457 102 человека наличного населения[14], по оценкам государственной службы статистики Украины на 1 сентября 2020 года — 41 554 361 постоянных жителя и 41 723 998 человек наличного населения[6][15]. Территория в пределах международно признанных границ[c] — 603 549 км². Занимает 34-е место в мире по численности населенияПерейти к разделу «#Численность, расселение», 44-е по территории. Украина является первым по размеру территории европейским государством, целиком находящимся в Европе.',
            ],
            ua: [
                'Украї́на (МФА: [ʊkrɐˈjɪn̪ɐ] ( прослухати)) — держава, розташована в Східній і в Центральній Європі, у південно-західній частині Східноєвропейської рівнини, держава-правонаступниця Української Радянської Соціалістичної Республіки[4][5], Союзу Радянських Соціалістичних Республік[4][5] та одночасно — Української Народної Республіки, Гетьманщини, Королівства Руського й Київської Русі. Площа становить 603 548 км²[6] населення, за оцінкою держслужби статистики, складає 41 588 354 особи станом на 1 січня 2021 року (без урахування окупованого Криму). Найбільша за площею країна з тих, чия територія повністю лежить у Європі.[7] Межує з Республікою Білорусь на півночі, Польщею, Словаччиною та Угорщиною — на заході, Румунією і Республікою Молдова — на південному заході, Російською Федерацією на сході й північному сході. На півдні й південному сході омивається Чорним та Азовським морями.',
            ],
        },
        video: {
            url: 'https://www.youtube.com/embed/Pu8tL3ptXRM',
        },
    },
    {
        id: '6e904621-4185-4357-8140-17198979f524',
        iso: 'DE',
        name: {
            en: 'Germany',
            ru: 'Германия',
            ua: 'Німеччина',
        },
        capital: {
            name: {
                en: 'Berlin',
                ru: 'Берлин',
                ua: 'Берлін',
            },
            coords: [51.509865, -0.118092],
            timezone: {
                standard: '1',
                dst: {
                    type: 'northern',
                    value: 'UTC+02',
                    start: '2021-03-28T01:00:00Z',
                    end: '2021-10-31T01:00:00Z',
                },
            },
        },
        currency: {
            iso: 'EUR',
            name: {
                en: 'Euro',
                ru: 'Евро',
                ua: 'Евро',
            },
            symbol: '€',
        },
        thumbnail: {
            url: images['DE'],

            width: 100,
            height: 100,
        },
        summary: {
            en: [
                'Germany (German: Deutschland, German pronunciation: [ˈdɔʏtʃlant]), officially the Federal Republic of Germany,[e] is a country at the intersection of Central and Western Europe. It is situated between the Baltic and North seas to the north, and the Alps to the south; covering an area of 357,022 square kilometres (137,847 sq mi), with a population of over 83 million within its 16 constituent states. It borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west. Germany is the second-most populous country in Europe after Russia, as well as the most populous member state of the European Union. Its capital and largest city is Berlin, and its financial centre is Frankfurt; the largest urban area is the Ruhr.',
            ],
            ru: [
                'Герма́ния (нем. Deutschland [ˈdɔʏt͡ʃlant]), официальное название — Федерати́вная Респу́блика Герма́ния (нем. Bundesrepublik Deutschland), ФРГ (нем. BRD) — государство в Центральной Европе. Площадь территории — 357 408,74 км²[10]. Численность населения на 30 сентября 2019 года — 83 149 300 жителей[11]. Занимает 18-е место в мире по численности населения (2-е в Европе) и 62-е в мире по территории (8-е в Европе).',
            ],
            ua: [
                'Німе́ччина (нім. Deutschland) — країна в Центральній Європі, демократична федеративна республіка. Складається з 16 федеральних земель. Столиця і найбільше місто країни — Берлін. Займає площу 357 578 км². Клімат помірний сезонний. Населення — 82,9 млн осіб. Член Європейського Союзу та НАТО. Країна з найбільшою кількістю населення і найбільшим рівнем економіки в Європейському союзі. Провідна політична сила на Європейському континенті, технологічний лідер в багатьох галузях. Німеччина є другим за популярністю місцем міграції в світі, поступаючись тільки США.[4]	',
            ],
        },
        video: {
            url: 'https://www.youtube.com/embed/hbb4PYiSnVs',
        },
    },
    {
        id: '6e904621-4185-4357-8140-17198979f524',
        iso: 'CZ',
        name: {
            en: 'Czech Republic',
            ru: 'Чехия',
            ua: 'Чехія',
        },
        capital: {
            name: {
                en: 'Prague',
                ru: 'Прага',
                ua: 'Прага',
            },
            coords: [51.509865, -0.118092],
            timezone: {
                standard: '1',
                dst: {
                    type: 'northern',
                    value: 'UTC+02',
                    start: '2021-03-28T01:00:00Z',
                    end: '2021-10-31T01:00:00Z',
                },
            },
        },
        currency: {
            iso: 'czk',
            name: {
                en: 'Czech koruna',
                ru: 'Фунт стерлингов',
                ua: 'Чеська крона',
            },
            symbol: '',
        },
        thumbnail: {
            url: images['CZ'],

            width: 100,
            height: 100,
        },
        summary: {
            en: [
                'The Czech Republic (/ˈtʃɛk -/ (About this soundlisten);[13] Czech: Česká republika [ˈtʃɛskaː ˈrɛpublɪka] (About this soundlisten)),[14] also known by its short-form name, Czechia[15] (/ˈtʃɛkiə/ (About this soundlisten); Czech: Česko [ˈtʃɛsko] (About this soundlisten)), is a landlocked country in Central Europe. It is bordered by Austria to the south, Germany to the west, Poland to the northeast, and Slovakia to the east.[16] The Czech Republic has a hilly landscape that covers an area of 78,866 square kilometers (30,450 sq mi) with a mostly temperate continental climate and oceanic climate. It is a unitary parliamentary republic.',
            ],
            ru: [
                'Че́хия (чеш. Česko, МФА (чешск.): [ˈʧɛskɔ][6], официально[7] — Че́шская Респу́блика (аббревиатура — ЧР); чеш. Česká republika (аббревиатура — ČR), МФА (чешск.): [ˈʧɛskaː ˈrɛpuˌblɪka]) — государство в Центральной Европе. Граничит с Польшей на севере (длина границы — 796 км), Германией — на северо-западе и западе (810 км), Австрией — на юге (466 км) и Словакией — на востоке (252 км)[8]. Общая протяжённость границы — 2324 км. Площадь — 78 866 км².',
            ],
            ua: [
                'Че́хія (чеськ. Česko), друга офіційна назва — Че́ська Респу́бліка[3][4] (абревіатура ЧР, чеськ. Česká republika, абревіатура ČR) — держава в центральній Європі без виходу до моря, що межує на півночі і заході з Німеччиною, на північному сході — з Польщею, на південному сході — зі Словаччиною, на півдні — з Австрією, що робить її однієї з двох, разом із Люксембургом, країною-членом Європейського Союзу, які повністю оточені ЄС.[5] Країна має горбистий ландшафт, що займає площу 78 866 км² з переважно помірним континентальним та морським кліматами. Чеська Республіка — унітарна парламентська республіка, де проживає 10,6 мільйонів жителів. Її столиця та найбільше місто — Прага, з 1,3 мільйонами жителів; інші великі міста — Брно, Острава, Оломоуць та Пльзень. Основні річки: Морава, Лаба (Ельба), Влтава, Сазава.',
            ],
        },
        video: {
            url: 'https://www.youtube.com/embed/k0Fo-skevo0',
        },
    },
    {
        id: '6e904621-4185-4357-8140-17198979f524',
        iso: 'AT',
        name: {
            en: 'Austria',
            ru: 'Австрия',
            ua: 'Австрія',
        },
        capital: {
            name: {
                en: 'Vien',
                ru: 'Вена',
                ua: 'Відень',
            },
            coords: [51.509865, -0.118092],
            timezone: {
                standard: '1',
                dst: {
                    type: 'northern',
                    value: 'UTC+02',
                    start: '2021-03-28T01:00:00Z',
                    end: '2021-10-31T01:00:00Z',
                },
            },
        },
        currency: {
            iso: 'EUR',
            name: {
                en: 'Euro',
                ru: 'Евро',
                ua: 'Евро',
            },
            symbol: '€',
        },
        thumbnail: {
            url: images['AT'],

            width: 100,
            height: 100,
        },
        summary: {
            en: [
                'Austria (/ˈɒstriə/ (About this soundlisten), /ˈɔːs-/;[10] German: Österreich [ˈøːstɐʁaɪ̯ç] (About this soundlisten)), officially the Republic of Austria (German: Republik Österreich, About this soundlisten (help·info)), is a landlocked East Alpine country in the southern part of Central Europe. It is composed of nine federated states (Bundesländer), one of which is Vienna, Austrias capital and largest city. It is bordered by Germany to the northwest, the Czech Republic to the north, Slovakia to the northeast, Hungary to the east, Slovenia and Italy to the south, and Switzerland and Liechtenstein to the west. Austria occupies an area of 83,879 km2 (32,386 sq mi) and has a population of nearly 9 million people. While German is the countrys official language,[11] many Austrians communicate informally in a variety of Bavarian dialects.[',
            ],
            ru: [
                'А́встрия (нем. Österreich, МФА (нем.): [ˈøːstɐˌʁaɪç] Информация о файле слушать), официальное название — Австри́йская Респу́блика (Republik Österreich) — государство в Центральной Европе. Население составляет 8,46 млн человек, территория — 83 879 км². Занимает 94-е место в мире по численности населения и 112-е по территории.Столица — Вена. Государственный язык — немецкий. Федеративное государство, парламентская республика. С 7 января 2020 года федеральным канцлером является Себастьян Курц.Подразделяется на 9 федеральных земель: Бургенланд, Каринтия, Нижняя Австрия, Верхняя Австрия, Зальцбург, Тироль, Штирия, Форарльберг, Вена.На севере граничит с Чехией (362 км), на северо-востоке — со Словакией (91 км), на востоке — с Венгрией (366 км), на юге — со Словенией (330 км) и Италией (430 км), на западе — с Лихтенштейном (35 км) и Швейцарией (164 км), на северо-западе — с Германией (784 км). Около 74 % населения католики. Постиндустриальная страна с динамично развивающейся экономикой. Объём ВВП по паритету покупательной способности за 2017 год составил 441 млрд долларов США (около 50 000 долларов на душу населения). Денежная единица — евро.',
            ],
            ua: [
                'А́встрія (нім. Österreich), офіційно Респу́бліка А́встрія (нім. Republik Österreich, Аудіо Republik Österreichопис файлу) — держава в Центральній Європі, яка складається з девяти федеративних земель. Столицею, найбільшим містом і однією з федеративних земель є місто Відень. Країна має площу у 83 879 км², населення чисельністю у майже 9 млн осіб, і номінальний ВВП у 477 мільярдів доларів США. Межує з Німеччиною та Чехією на півночі, Словаччиною та Угорщиною на сході, Словенією та Італією на півдні та Швейцарією і Ліхтенштейном на заході. Австрія — це переважно гірська країна, що не має виходу до моря, і лежить в межах Альп; лише 32 % країни знаходиться нижче 500 м, а її найвища точка — 3 798 м.[3] Більшість населення розмовляє баварським діалектом, як рідною мовою, та німецькою, яка має статус державної мови.[4] Регіональні мови: словенська, градіщансько-хорватська та угорська.',
            ],
        },
        video: {
            url: 'https://www.youtube.com/embed/dKTDQa20IEQ',
        },
    },
    {
        id: '6e904621-4185-4357-8140-17198979f524',
        iso: 'ES',
        name: {
            en: 'Spain',
            ru: 'Испания',
            ua: 'Іспанія',
        },
        capital: {
            name: {
                en: 'Madrid',
                ru: 'Мадрид',
                ua: 'Мадрид	',
            },
            coords: [51.509865, -0.118092],
            timezone: {
                standard: '1',
                dst: {
                    type: 'northern',
                    value: 'UTC+01',
                    start: '2021-03-28T01:00:00Z',
                    end: '2021-10-31T01:00:00Z',
                },
            },
        },
        currency: {
            iso: 'EUR',
            name: {
                en: 'Euro',
                ru: 'Евро',
                ua: 'Евро',
            },
            symbol: '€',
        },
        thumbnail: {
            url: images['ES'],

            width: 100,
            height: 100,
        },
        summary: {
            en: [
                'Spain (Spanish: España, [esˈpaɲa] (About this soundlisten)), formally the Kingdom of Spain[13] (Spanish: Reino de España),[a][b] is a country in Southwestern Europe with some pockets of territory across the Strait of Gibraltar and the Atlantic Ocean.[13] Its continental European territory is situated on the Iberian Peninsula. Its territory also includes two archipelagos: the Canary Islands off the coast of North Africa, and the Balearic Islands in the Mediterranean Sea. The African exclaves of Ceuta, Melilla, and Peñón de Vélez de la Gomera[14] make Spain the only European country to have a physical border with an African country (Morocco).[h] Several small islands in the Alboran Sea are also part of Spanish territory. The countrys mainland is bordered to the south and east by the Mediterranean Sea; to the north and northeast by France, Andorra, and the Bay of Biscay; and to the west and northwest by Portugal and the Atlantic Ocean respectively.',
            ],
            ru: [
                'Испа́ния (исп. España, МФА: [esˈpaɲa]), официально Короле́вство Испа́ния (исп. Reino de España, МФА: [ˈreino ðe esˈpaɲa]) — трансконтинентальное суверенное государство на юго-западе Европы и частично в Африке, член Европейского союза и НАТО. Испания занимает бо́льшую часть (80 %) Пиренейского полуострова, а также Канарские и Балеарские острова, имеет общую площадь 504 782 км² (вместе с небольшими суверенными территориями на африканском побережье, городами Сеута и Мелилья), являясь четвёртой по величине страной в Европе (после России, Украины и Франции).',
            ],
            ua: [
                'Іспа́нія (ісп. España, МФА: [esˈpaɲa]— від лат. Hispania), офіційно Королі́вство Іспа́нія (іспанська Reino de España) — держава на південному заході Європи, із заморськими територіями через Гібралтарську протоку та Атлантичний океан. Її континентальна європейська територія займає більшу частину Піренейського півострова. До складу країни також входять два архіпелаги: Пітіузькі острови в Середземному морі, і Канарські острови біля узбережжя Африки в Атлантичному океані. Африканські анклави Сеута, Мелілья та Пеньон-де-Велес де ла Гомера роблять Іспанію єдиною європейською країною, яка має фізичний кордон з африканською країною (Марокко). Кілька невеликих островів в Алборанському морі також є частиною території Іспанії. Материкова частина країни омивається Середземним морем на півдні та сході, за винятком невеликої сухопутної межі з Гібралтаром; на півночі та північному сході межує з Францією (623 км) та Андоррою (63,7 км); на заході — з Португалією (1214 км) та Атлантичним океаном.',
            ],
        },
        video: {
            url: 'https://www.youtube.com/embed/rPLPn-Ws-eY',
        },
    },
];
