const express = require('express');
const axios = require('axios');

exports.get_word = (req, res, next) => {
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
}