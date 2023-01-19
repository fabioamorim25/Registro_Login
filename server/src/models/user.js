const mongoose = require('mongoose');



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
    createdDate:{
        type: Date,
        default: Date.now,
    },
    userAdm:{
        default: false,
    }
});

const User = mongoose.model('User', UserSchema); 


module.exports = User;