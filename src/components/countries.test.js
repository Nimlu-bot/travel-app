import { countries } from './countries';
import * as images from './countryImаges';

it('countries length to be 8', () => {
    expect(countries).toHaveLength(8);
});

it('countries contain Great Britain', () => {
    const GB = {
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
                'Вели́ка Брита́нія (англ. Great Britain), офіційна назва Сполу́чене Королі́вство Вели́кої Брита́нії та Півні́чної Ірла́ндії (англ. the United Kingdom of Great Britain and Northern Ireland), скорочено — Сполу́чене Королі́вство (англ. the United Kingdom) — суверенна держава, розташована на північному заході від Континентальної Європи, на Британських островах. Територія включає острів Велика Британія, північну частину острова Ірландія та численні невеликі острови. Північна Ірландія — єдина частина Сполученого Королівства, що має суходільний кордон з іншою суверенною країною — Республікою Ірландією. Усі інші кордони є водними: Сполучене Королівство оточене Атлантичним Океаном, Північним морем, Англійським каналом та Ірландським морем, що утворює 12-ту за довжиною берегову лінію у світі. Ірландське море лежить між Великою Британією та Ірландією.',
            ],
        },
        video: {
            url: 'https://www.youtube.com/embed/Uy9sXRk7its',
        },
    };
    expect(countries).toContainEqual(GB);
});

it('Great Britain contain field iso', () => {
    expect(countries[0]).toHaveProperty('iso');
});

it('iso contain 2 capital letter', () => {
    expect(countries[0].iso).toMatch(/^[A-Z]{2}$/);
});

it('GB youtube url have been present', () => {
    expect(countries[0].video.url).not.toBe('https://www.youtube.com/embed/3Ceo_igCZVY');
});
