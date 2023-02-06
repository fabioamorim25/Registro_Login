const transport = require('./transport');
const path = require('path');
const ejs = require('ejs');


//PASSAR OS DADOS DO USUÁRIO PARA O TEMPLATE E ENVIAR A MENSAGEM PARA O EMAIL DO USUÁRIO
const sendMessage = async (dataUser) => {

  const { email, name, token, data } = dataUser;

 
  //Definir o caminho onde esta o arquivo do template
  const template = path.join(__dirname, '../../resources/messageEmail.ejs')
  //Passar o nome, token e data para o template da mensagem
  const templateData = await ejs.renderFile(template, { name, token, data });

  //DEFINIR OS DADOS PARA SER ENVIADO A MENSAGEM
  const mainOptions = {
    from: process.env.EMAIL_SUPPORT,
    to: email,
    subject: 'Account Activated',
    html: templateData,
  }
  //enviar mensagem
  await transport.sendMail(mainOptions);
}

//ENVIAR A MENSAGEM PARA O EMAIL.CONFIRMANDO QUE A CONTA FOI RECUPERADA
const messageConfirme = async (email) => {
 
  //Definir o caminho onde esta o arquivo do template
  const template = path.join(__dirname, '../../resources/messageConfirmation.ejs')
  const templateData = await ejs.renderFile(template);

  //DEFINIR OS DADOS PARA SER ENVIADO A MENSAGEM
  const mainOptions = {
    from: process.env.EMAIL_SUPPORT,
    to: email,
    subject: 'Account Activated',
    html: templateData,
  }
  //enviar mensagem
  await transport.sendMail(mainOptions);
}

module.exports = {sendMessage, messageConfirme};