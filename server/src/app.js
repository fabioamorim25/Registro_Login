const express = require('express');
const bodyParser = require('body-parser')
const app = express();



app.use(bodyParser.json());//conseguir compreender dados em json nas requisições 
app.use(bodyParser.urlencoded({extended:false}))//conseguir interpretar dados vindos da url da requisição






//DEFINIR AS ROTAS
require('../src/app/routes/index')(app);





module.exports = app;