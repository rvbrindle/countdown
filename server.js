const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const util = require('util');

const app = express();

const mainRoute = require('./routes/mainRoute');
const guessRoute = require('./routes/guessRoute');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:true}))

app.use('/', mainRoute);
app.use('/guess', guessRoute);

const server = app.listen(8880, () => {
    console.log(`server running on ${server.address().port}`);
})