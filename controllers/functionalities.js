//Funcionalidade: Mostra a tela de login
const viewLogin = async (req,res)=>{
    try { 
        res.render('viewLogin.ejs');
    } catch (error) {
        res.status(404).send(error);
    }
}


module.exports = {viewLogin};