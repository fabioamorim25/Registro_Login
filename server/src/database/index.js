const mongoose = require("mongoose");


//Conectar com o banco de dados
mongoose.connect(process.env.MONGO_CONNECTION_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 
mongoose.Promise = global.Promise;


//Verificação da conexão com o banco de dados
let db=mongoose.connection;
db.on("error", ()=>{
    console.log(error)
})
db.once("open", ()=>{
    console.log("banco de dados carregado")
})





module.exports = mongoose;