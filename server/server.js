require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use('/book', require('./controllers/book'));
app.use('/sheet', require('./controllers/sheet'));


mongoose.connect(process.env.DBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err, res) => {

        if (err) {
            throw err;
        }

        console.log('base de datos online');

    });

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto: ', process.env.PORT);
});