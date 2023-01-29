const express = require('express');
const bodyParser = require('body-parser')
const app = express();



app.use(bodyParser.json());//conseguir compreender dados em json nas requisições 
app.use(bodyParser.urlencoded({extended:false}))//conseguir interpretar dados vindos da url da requisição






//DEFINIR AS ROTAS
// require('./app/routes/routerAuth')(app) //acessar [localhost:5000/auth]
// require('./app/routes/routerPrivate')(app) //acessar [localhost:5000/allPrivate]


require('../src/app/routes/index')(app);





module.exports = app;