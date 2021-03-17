import { sortAttr } from './attractionImages';
import ES6 from '../assets/img/es/triumf-arka.jpg';
import ES6t from '../assets/img/es/triumf-arka_t.jpg';

it('attractions six or more ', () => {
    const attractions = sortAttr('ES');
    expect(attractions.length).toBeGreaterThanOrEqual(6);
});

it('attraction contain proper fields', () => {
    const country = {
        id: 'ES6',
        name: {
            ru: 'Помпеи',
            en: 'Pompeii',
            uk: 'Помпеї',
        },
        coutryId: 'ES',
        thumbnail: {
            url: ES6,
            urlt: ES6t,
            alt: {
                ru: 'Триумфальная арка',
                en: 'The Arc de Triomphe',
                uk: 'Тріумфальна арка ',
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
    };
    const attractions = sortAttr('ES');
    expect(attractions[5]).toMatchObject(country);
});
