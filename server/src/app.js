const express = require('express');
const app = express()

//pagina das rotas
const router = require('./routes/router');





app.use('/', router);





module.exports = app;