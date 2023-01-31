//ARQUIVO PRINCIPAL QUE DA ACESSO A TODAS AS SUB-ROUTERS
//(precisando assim que o arquivo [app.js] só precise chamar essa pagina que já vai da acesso a todas as outras rotas do sistema)

const fs = require('fs');//usado para carregar arquivos no node.js
const path = require('path');//usado para trabalhar com endereços de pastas


module.exports =(app) =>{

    //LER UM DIRETORIO
    fs
    .readdirSync(__dirname)
    .filter(file =>((file.indexOf('.')) !== 0 && (file !== "index.js")))
    .forEach(file =>require(path.resolve(__dirname,file))(app));

};


 



