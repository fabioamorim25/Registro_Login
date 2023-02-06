const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const crypto = require('crypto');//gera um token
const {sendMessage,messageConfirme} = require('../../services/mailtrap/sendMessage');


//Criar e retornar um token para o registro ou login 
function generateToken(params={}){
    return jwt.sign(params , process.env.SECRET,{
        expiresIn: process.env.EXPIRE_TOKEN,
    });
}


const Register =  async (req,res)=>{

    const {email} = req.body;

    try {
       //exite usuário com o mesmo email
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

const ForgotPassword = async(req,res)=>{

    const {email}  = req.body;

    try {
        //Verificar se o email esta no banco de dados
        const user =  await User.findOne({email});
        if(!user){
            return res.status(400).send({error: 'Usuário não existe'});
        }

        //Token com tempo de validade valido apenas para esse usuário
        const token = crypto.randomBytes(20).toString('hex');

        //Definir um tempo de expiração (1h)
        const now = new Date();
        now.setHours(now.getHours()+1);

        //SALVAR O TOKEN E A DATA/HORA NO DOCUMENTO USER
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

const ResetPassword = async(req,res)=>{
   
    const {email,token,password} = req.body;

    try {
        //fazer uma requisição para o banco de dados. para pegar o documento que possui o emal digitado. Tambem sera pego os items  
        const user = await User.findOne({email}).select('+passwordResetToken passwordResetExpires');

        if(!user)
           return res.status(400).send({error:'Usuário não exite'})
        
        //verificar se o token recebido é o mesmo que no sistema 
        if(token !== user.passwordResetToken)
            return res.status(400).send({error:'Token invalido'})


        
        const now = new Date();//pegar a data/hora atual

        //verifivar se a data/hora atual não é maior que a data/hora do token
        if(now > user.passwordResetExpires)
        return res.status(400).send({error:'O token expirado, gere um novo'})


        //remover o token de recuperação e a data/hora do documento do usuário
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;


        //ATUALIZAR A SENHA DO USUÁRIO
        user.password = password;
        await user.save(); 


        messageConfirme(email);

        return res.status(200).send({msg:'Usuário atualizado com sucesso'})
    
    } catch (error) {
        return res.status(400).send({error: 'Não é possível redefinir a senha, tente novamente'})
    }
}
module.exports = {Register, Login, ForgotPassword, ResetPassword}