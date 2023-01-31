const authController = require('../controllers/authController');
const express= require('express');
const router= express.Router();




//R0TAS POST DA API Rest (login e registro)
router.post('/register',authController.Register);
router.post('/authenticate',authController.Login);

//ROTAS DA API Rest (recuperar senha)
router.post('/forgot_password',authController.ForgotPassword)






module.exports = (app)=>{   
    app.use('/auth', router);
} 