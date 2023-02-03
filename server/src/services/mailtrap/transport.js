const nodemailer = require('nodemailer');
const mail = require('../../../config/mail.json');

//CONFIGURAR O TRANSPORTER
const transport = nodemailer.createTransport({

    host: mail.Host,
    port: mail.Port,
    auth: {
        user: mail.User,
        pass: mail.Pass
    }
}); 

//VERIFICAR A CONEXÃO 
transport.verify(error=>{
    if (error){
        console.log(error)
    }else{
        console.log("Sucesso na conexão mailtrap")
    }
})

module.exports = transport;