//Funcionalidade: Mostra a tela de login
const viewLogin = async (req,res)=>{
    try { 
        res.send("página de login");
    } catch (error) {
        res.status(404).send(error);
    }
}
//Funcionalidade: Mostra a tela de registro
const viewRegister = async (req,res)=>{
    try { 
        res.send("página de registro");
    } catch (error) {
        res.status(404).send(error);
    }
}
//Funcionalidade: Mostra a tela de registro
const all = async (req,res)=>{
    try { 
        res.send("página home");
    } catch (error) {
        res.status(404).send(error);
    }
}


module.exports = {viewLogin,viewRegister,all};