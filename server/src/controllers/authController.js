const User = require('../models/user'); 



const Register =  async (req,res)=>{

    const {email} = req.body;

    try {
       //1° VERIFICAÇÃO: exite usuário com o mesmo email
        if(await User.findOne({email})){
            return res.status(400).send({error: "O usuário já existe"})
        }

        
       const user = await User.create(req.body);
       user.password = undefined;//não retornar a senha

        return res.send({user});
    } catch (error) {
        return res.status(400).send({error: 'Registro do usuário falhou'})
    }
    



}

module.exports = {Register}