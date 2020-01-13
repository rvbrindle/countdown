const express = require('express');

const Router = express.Router();

Router.get('/', (req, res, next) => {
    res.render('../views/index', {
        word: req.app.get('word')
    })
})

module.exports = Router;