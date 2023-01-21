const express = require('express');
const bodyParser = require('body-parser')
const app = express();



app.use(bodyParser.json());//conseguir compreender dados em json nas requisições 
app.use(bodyParser.urlencoded({extended:false}))//conseguir interpretar dados vindos da url da requisição






//DEFINIR AS ROTAS (da acesso a todas as rotas do arquivo routerAuth.js)
require('./routes/routerAuth')(app) //acessar [localhost:5000/auth]









module.exports = app;