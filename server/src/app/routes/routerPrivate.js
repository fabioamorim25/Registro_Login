const privateController = require('../controllers/privateController')
const express= require('express');
const router= express.Router();


const authMiddoware = require('../middowares/auth');
router.use(authMiddoware);



//ROTAS PRIVADAS 
router.get('/all',privateController.All);
router.post('/setUserFrontBack',privateController.SetUserFrontBack);






module.exports = (app)=>{
    app.use('/allPrivate', router);
}

