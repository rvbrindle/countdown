const express = require('express');
const axios = require('axios');

const Router = express.Router();

Router.get('/', (req, res, next) => {
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
    }).then( randomWord => {
        let word = randomWord.data.word;
 
        res.render('../views/index', {
            word: word
        })
    })
})
module.exports = Router;