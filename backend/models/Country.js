const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    country: { type: String, default: '' },
    countryShort: { type: String, default: '' },
    id: { type: String, unique: true },
    capital: { type: String, default: '' },
    about: { type: String, default: '' },
    videoLink: { type: String, default: '' },
    timeZone: { type: Number, default: 0 },
});

module.exports = model('Country', schema);
