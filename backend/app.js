const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = config.get('port') || 5000;

// app.use(cors);

app.use(express.json({ extended: true }));
app.use(cors());
app.use('/api/auth', require('./routes/auth.routes'));

app.use('/api/stat', require('./routes/stat.routes'));

app.use('/api/country', require('./routes/country.routes'));

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        app.listen(PORT, () => console.log(`port ${PORT}`));
    } catch (e) {
        console.log('DBserver Error', e.message);
        process.exit(1);
    }
}
start();
