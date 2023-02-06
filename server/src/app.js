const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const transport = require('./services/mailtrap/transport');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))






//DEFINIR AS ROTAS
require('../src/app/routes/index')(app);





module.exports = app;