const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const router = require('./routes/router');//pagina das rotas



//conseguir compreender dados em json nas requisições 
app.use(bodyParser.json());
//conseguir interpretar dados vindos da url da requisição
app.use(bodyParser.urlencoded({extended:false}))



app.use('/', router);





module.exports = app;