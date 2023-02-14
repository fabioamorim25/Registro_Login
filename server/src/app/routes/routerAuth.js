const authController = require('../controllers/authController');
const express= require('express');
const router= express.Router();




//R0TAS (login e registro)
router.post('/register',authController.Register);
router.post('/authenticate',authController.Login);

//ROTAS (recuperar senha)
router.post('/forgot_password',authController.ForgotPassword)
router.post('/reset_password',authController.ResetPassword)



 

module.exports = (app)=>{   
    //DEFINIR UM ENDEREÇO PARA ESSE O ARQUIVO (routerAuth.js) definindo como (/auth). exemplo:[localhost:5000/auth/register] 
    app.use('/auth', router);
} 