const express = require('express');
// const auth = require('../controllers/auth');
const errorHandler = require('../middlewares/error');
const start = require('../routes/startPage');

module.exports = function (app) {
    app.use(express.json());
    app.use('/', start);
    // app.use('/api/auth', auth);
    app.use(errorHandler);
}