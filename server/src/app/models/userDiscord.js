const mongoose = require('../../database/index');


const UserDiscordSchema = new mongoose.Schema({
    discordId:{
        type: String,
        require: true,
    },
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
    guilds:{
        type: Array,
        require: true
    },
    
},{
    timestamps:true
});



const UserDiscord = mongoose.model('UserDiscord', UserDiscordSchema);


module.exports = UserDiscord;