const express = require('express');
const Router = express.Router();

Router.post('/', (req, res, next) => {
    let word = req.body.word;
    let guess = req.body.guess;
    if (word === guess) {
        res.render('../views/win', {
            guess: `You WIN! the word was ${guess}`
        })
    }
    res.render('../views/guess', {
        guess: `Your guess of ${guess} was wrong! Go back and try again`
    })
})

// Router.get('/', (req, res, next) => {
//     let guess = req.body.guess
//     if (guess === )
// })

module.exports = Router