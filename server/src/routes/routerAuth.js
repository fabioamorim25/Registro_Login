const authController = require('../controllers/authController');

const express= require('express');
const router= express.Router();




//R0TAS POST DA API Rest
router.post('/register',authController.Register);








module.exports = (app)=>{   
    // DEFINIR UM ENDEREÇO PARA ESSE O ARQUIVO (routerAuth.js) definindo como (/auth). exemplo:[localhost:5000/auth/register] 
    app.use('/auth', router);
} 