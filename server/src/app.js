const dotenv = require('dotenv').config();

const router = require('./routes/router');
const express = require('express');
const app = express()

const mongoose = require('mongoose');

//conexão com o banco de dados local-------------------------------------------------------------------
mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
let db=mongoose.connection;

db.on("error", ()=>{
   console.log(error);
})
db.once("open", ()=>{
   console.log("banco de dados carregado");
})
//------------------------------------------------------------------------------------------------------



app.use('/', router);



app.listen(process.env.PORT, ()=>{
   console.log("Servidor rodando na porta:", process.env.PORT);
});