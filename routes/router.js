const functionalities = require('../controllers/functionalities');
const express= require('express');
const router= express.Router();

//ROTAS DOS TEMPLETES (API)
router.get('/',functionalities.viewLogin);






//R0TAS DA API Rest









module.exports = router;