const mongoose = require('../../database/index');
const bcrypt = require('bcryptjs');


//Estrutura do documento relacionado ao usuário
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        require: true,
        select: false,
    },
    passwordResetToken:{
        type: String,//formato de string
        select: false,//não sera mostrado nos resultados
    },
    passwordResetExpires:{
        type: Date,//formato de string
        select: false,//não sera mostrado nos resultados
    },
    createdDate:{
        type: Date,
        default: Date.now,
    },
    userAdm:{
        default: false
    }
});



//ANTES DE SALVAR OS DADOS NO SISTEMA A SENHA SERA CRIPTOGRAFADA
UserSchema.pre('save', async function(next){
    //criptografar a senha digitada
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next()
})


const User = mongoose.model('User', UserSchema);


module.exports = User;