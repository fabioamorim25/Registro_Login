const nodemailer = require('nodemailer');
const mail = require('../../../config/mail.json');//1.2: Chamar o arquivo mail que tem o valor para as chaves do transport

//1° CONFIGURAR O TRANSPORTER
const transport = nodemailer.createTransport({

    //1.1: pegar os dados transporte (aqui sera usado o mailtrap apenas para testes de envio de mensagem)
    host: mail.Host,
    port: mail.Port,
    auth: {
        user: mail.User,
        pass: mail.Pass
    }
}); 

//2° VERIFICAR A CONEXÃO 
transport.verify(error=>{
    if (error){
        console.log(error)
    }else{
        console.log("Sucesso na conexão mailtrap")
    }
})

module.exports = transport;