const functionalities = require('../controllers/functionalities');
const userController = require('../controllers/userController')
const express= require('express');
const router= express.Router();

//ROTAS DAS PAGES
router.get('/',functionalities.viewHome);
router.get('/login',functionalities.viewLogin);
router.get('/register',functionalities.viewRegister);
router.get('/all',functionalities.viewAll);


//R0TAS POSG DA API Rest
router.post('/login',userController.login);








module.exports = router;