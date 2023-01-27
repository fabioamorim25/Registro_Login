const privateController = require('../controllers/privateController')
const express= require('express');
const router= express.Router();



//ROTAS PRIVADAS 
router.get('/all',privateController.All);








module.exports = (app)=>{
    app.use('/allPrivate', router);
}