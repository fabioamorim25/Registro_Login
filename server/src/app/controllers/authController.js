const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


function generateToken(params={}){
    //Criar e retornar um token para o registro ou login 
    return jwt.sign(params , process.env.SECRET,{
        //tempo para expirar o token: Aqui o tempo é de 1 dia (86400 segundos)
        expiresIn: process.env.EXPIRE_TOKEN,
    });
}


const Register =  async (req,res)=>{

    const {email} = req.body;

    try {
       //1° VERIFICAÇÃO: exite usuário com o mesmo email
        if(await User.findOne({email})){
            return res.status(400).send({error: "O usuário já existe"})
        }


       const user = await User.create(req.body);
       user.password = undefined;//não retornar a senha

       //retornar o usuario cadastrado e o token
        return res.send({
            user, 
            token:generateToken({id:user.id})
        });

    } catch (error) {
        return res.status(400).send({error: 'Registro do usuário falhou'})
    }
}

const Login = async (req,res)=>{

    const {email,password}= req.body;


    try {
        //pegar o primeiro usuário do banco que possui o mesmo email digitado
        const user = await User.findOne({email}).select('+password');
     

        //1° VERIFICAÇÃO: O usuário existe no banco
        if (!user){
            return res.status(400).send({error: "O usuário não existe"});
        }
        //2° VERIFICAÇÃO: Comparar a senha digitada com a senha do banco
        if(! await bcrypt.compare(password, user.password)){
            return res.status(400).send({error:"Password invalido"});
        }
    
        user.password = undefined;//não retornar a senha


        //retornar os dados do usuario e o token
        res.send({
           user,
           token:generateToken({id:user.id})
        })

    } catch (error) {
        return res.status(400).send({error: 'Falha no login'})
    }
}

module.exports = {Register,Login}