const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const router = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://alanmaranto:am3r1c41@cluster0-93ixr.mongodb.net/blog?retryWrites=true',{ useNewUrlParser: true });

const PORT = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(morgan('dev'));

app.use('/api/v1', router);

//http://localhost:8000/api/v1/prueba


app.listen(PORT,() => {
    console.log(`Works in port ${PORT}`)
});

module.exports = app;