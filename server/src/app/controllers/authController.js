const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const crypto = require('crypto');
const sendMessage = require('../../services/mailtrap/sendMessage');



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
       //VERIFICAÇÃO: exite usuário com o mesmo email
        if(await User.findOne({email}))
            return res.status(400).send({error: "O usuário já existe"})
        


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
     
        if (!user)
            return res.status(400).send({error: "O usuário não existe"});
        
        if(! await bcrypt.compare(password, user.password))
            return res.status(400).send({error:"Password invalido"});
        
    
        
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


const ForgotPassword = async(req,res)=>{

    const {email}  = req.body;

    try {
        //Verificar se o email esta no banco de dados
        const user =  await User.findOne({email});
       
        if(!user){
            return res.status(400).send({error: 'Usuário não existe'});
        }

        //Criar um token com tempo de validade valido
        const token = crypto.randomBytes(20).toString('hex');

        //Definir um tempo de expiração (1h)
        const now = new Date();
        now.setHours(now.getHours()+1)

        //SALVAR O TOKEN E A DATA/HORA NO DOCUMENTO QUE TEM O EMAIL DIGITADO
        await User.findByIdAndUpdate(user.id,{
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now,
            }
        });
        

        //ORGANIZAR OS DADOS DO USUÁRIO
        const dataUser = {
            email:email,
            name:user.name,
            token:token,
            data:now.toLocaleDateString()
        }
        
        //ENVIAR OS DADOS DO USUÁRIO PARA A FUNÇÃO QUE GERA O TEMPLATE E ENVIA A MENSAGEM
        sendMessage(dataUser);

        return res.status(200).send({msg:"Verifique sua caixa de e-mail. Enviamos uma mensagem de confirmação"})

    } catch (error) {
       return res.status(400).send(error);
    }

}

module.exports = {Register,Login,ForgotPassword}