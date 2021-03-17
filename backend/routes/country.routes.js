const { Router } = require('express');
const shortid = require('shortid');

const Country = require('../models/Country');
const router = Router();

router.post('/generate', async (req, res) => {
    try {
        const id = shortid.generate();

        const country = new Country({
            country: 'Great Britain',
            countryShort: 'GB',
            id: id,
            capital: 'London',
            about:
                'Великобрита́ния (англ. Great Britain, валл. Prydain Fawr, гэльск. Breatainn Mhòr, корнск. Breten Veur, скотс Great Breetain) — крупнейший остров в Европе и седьмой по площади в мире. Площадь его составляет 229 946 км², чуть больше острова Хонсю. Протяжённость острова с севера на юг — около 1440 км, наибольшая ширина — в два с лишним раза меньше[источник не указан 1582 дня]. С населением около 63 млн человек занимает третье место в мире после Явы и Хонсю. Входит в состав Британских островов. На острове расположено до 95 % территории Соединённого Королевства, в частности, основные территории Англии, Шотландии и Уэльса.',
            videoLink: 'https://www.youtube.com/watch?v=Uy9sXRk7its',
            timeZone: 0,
        });
        await country.save();

        res.status(201).json({ country });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

module.exports = router;
