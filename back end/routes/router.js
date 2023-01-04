const functionalities = require('../controllers/functionalities');
const express= require('express');
const router= express.Router();

//ROTAS DOS TEMPLETES (API)
router.get('/',functionalities.viewHome);
router.get('/login',functionalities.viewLogin);
router.get('/register',functionalities.viewRegister);
router.get('/all',functionalities.viewAll);


//R0TAS DA API Rest









module.exports = router;