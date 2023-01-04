//Funcionalidade: Mostra a tela de registro
const viewHome = (req,res)=>{
    try { 
        res.send("página inicial");
    } catch (error) {
        res.status(404).send(error);
    }
}//Funcionalidade: Mostra a tela de login
const viewLogin = (req,res)=>{
    try { 
        res.send("página de login");
    } catch (error) {
        res.status(404).send(error);
    }
}
//Funcionalidade: Mostra a tela de registro
const viewRegister = (req,res)=>{
    try { 
        res.send("página de registro");
    } catch (error) {
        res.status(404).send(error);
    }
}
//Funcionalidade: Mostra a tela de registro
const viewAll = (req,res)=>{
    try { 
        res.send("página all");
    } catch (error) {
        res.status(404).send(error);
    }
}


module.exports = {viewHome,viewLogin,viewRegister,viewAll};