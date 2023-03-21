const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const transport = require('./services/mailtrap/transport');
const cors = require('cors')

//Definir a origem das requisições (permitir apenas o front end)
const corsOptions = {
    origin: process.env.URL_CLIENT,
    credentials: true,//access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))






//DEFINIR AS ROTAS
require('../src/app/routes/index')(app);





module.exports = app;