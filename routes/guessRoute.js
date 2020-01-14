const express = require('express');
const Router = express.Router();

Router.post('/', (req, res, next) => {
    console.log(req);
    res.render('../views/guess', {
        guess: req.body.guess
    })
})

module.exports = Router