const { Router } = require('express');
// const config = require('config');
const shortid = require('shortid');
// const Link = require('../models/Link');
// const auth = require('../middleware/auth.middleware');
const Country = require('../models/Country');
const router = Router();

router.post('/generate', async (req, res) => {
    try {
        //     const baseUrl = config.get('baseUrl')
        //     const {from} = req.body
        // //
        const id = shortid.generate();

        // const existing = await Link.findOne({ from })

        // if (existing) {
        //   return res.json({ link: existing })
        // }

        // const to = baseUrl + '/t/' + code

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

// router.get('/', auth, async (req, res) => {
//     try {
//         const links = await Link.find({ owner: req.user.userId });
//         res.json(links);
//     } catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
//     }
// });

// router.get('/:id', auth, async (req, res) => {
//     try {
//         const link = await Link.findById(req.params.id);
//         res.json(link);
//     } catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
//     }
// });

module.exports = router;
