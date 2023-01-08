const userController = require('../controllers/userController')
const express= require('express');
const router= express.Router();




//R0TAS POST DA API Rest
router.post('/login',userController.login);








module.exports = router;