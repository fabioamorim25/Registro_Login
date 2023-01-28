const privateController = require('../controllers/privateController')
const express= require('express');
const router= express.Router();


const authMiddoware = require('../middowares/auth')
router.use(authMiddoware);//chamar o middoware de autenticação do token para todas as rotas privadas



//ROTAS PRIVADAS 
router.get('/all',privateController.All);








module.exports = (app)=>{
    app.use('/allPrivate', router);
}