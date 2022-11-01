const dotenv = require('dotenv').config();

const router = require('./routes/router');
const express = require('express');
const app = express()
const path= require('path');


//Definir onde esta os arquivos do sistema
app.set("views", path.join(__dirname,'public'));
app.set('views engine', 'ejs'); 




app.use('/', router);






app.listen(process.env.PORT, ()=>{
   console.log("Servidor rodando na porta:", process.env.PORT);
});