const express = require('express');
const Router = express.Router();

Router.post('/', (req, res, next) => {
    let word = req.body.word;
    let guess = req.body.guess;
    let jumbledWord = req.body.jumbledWord
    if (word === guess) {
        res.render('../views/win', {
            guess: `You WIN! the word was ${guess}`
        })
    }
    console.log(req.body);
    res.render('../views/index', {
        word: word,
        jumbledWord: jumbledWord,
        wrongGuess: `Your guess of ${guess} was wrong! try again`
    })
})

// Router.get('/', (req, res, next) => {
//     let guess = req.body.guess
//     if (guess === )
// })

module.exports = Router