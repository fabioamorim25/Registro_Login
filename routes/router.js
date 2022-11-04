const functionalities = require('../controllers/functionalities');
const express= require('express');
const router= express.Router();

//ROTAS DOS TEMPLETES (API)
router.get('/',functionalities.viewLogin);
router.get('/register',functionalities.viewRegister);



//R0TAS DA API Rest









module.exports = router;