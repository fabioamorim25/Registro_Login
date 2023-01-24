const User = require('../models/user');
const bcrypt = require('bcryptjs');



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

const Login = async (req,res)=>{

    const {email,password}= req.body;


    //pegar o primeiro usuário do banco que possui o mesmo email digitado
    const user = await User.findOne({email}).select('+password');
     
    //1° VERIFICAÇÃO: O usuário existe no banco
    if (!user){
        return res.status(400).send({error: "O usuário não existe"})
    }
    //2° VERIFICAÇÃO: Comparar a senha digitada com a senha do banco 
    if(! await bcrypt.compare(password, user.password)){
        return res.status(400).send({error:"Password invalido"})
    }
    user.password = undefined;//não retornar a senha

    res.send({user})
}

module.exports = {Register,Login}