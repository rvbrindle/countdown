const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const util = require('util');

const app = express();

const mainRoute = require('./routes/mainRoute');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

axios({
    'method': 'GET',
    'url':'https://wordsapiv1.p.rapidapi.com/words/?random=true',
    'headers':{
    'content-type':'application/octet-stream',
    'x-rapidapi-host':'wordsapiv1.p.rapidapi.com',
    'x-rapidapi-key':'D0XaG8sCX6mshQxZV73Wrc6QDJdWp1c0sv0jsnF6FXKjSUrlrr'
    },
    'params':{
        'letters': '7'
    }
}).then( res => {
    let word = res.data.word;
    app.set('word', word);
})

app.use(mainRoute);

const server = app.listen(8880, () => {
    console.log(`server running on ${server.address().port}`);
})