const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    stats: [{ type: Types.ObjectId, ref: 'Stat' }],
});

module.exports = model('User', schema);
