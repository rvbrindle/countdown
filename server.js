const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const util = require('util');

const app = express();

// const mainRoute = require('./routes/main-page');

// const productController = require('./controllers/product');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

axios({
    'method': 'GET',
    'url':'https://wordsapiv1.p.rapidapi.com/words/',
    'headers':{
    'content-type':'application/octet-stream',
    'x-rapidapi-host':'wordsapiv1.p.rapidapi.com',
    'x-rapidapi-key':'D0XaG8sCX6mshQxZV73Wrc6QDJdWp1c0sv0jsnF6FXKjSUrlrr'
    },
    'params':{
        'letters': '7'
    }
}).then( res => {
    let maxPulled = res.data.results.total;
    const wordCollection = res.data.results.data
    let randNum = Math.floor(Math.random(1) * 100)
    console.log(wordCollection[randNum]);
})

app.get('/', (req, res) => {
    res.render('index');
})

const server = app.listen(8880, () => {
    console.log(`server running on ${server.address().port}`);
})