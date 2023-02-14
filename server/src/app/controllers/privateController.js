const jwt = require('jsonwebtoken');
const User = require('../models/user')


const All = async(req,res)=>{
    
    res.send({
        msg:"Página privada. Apenas para usuários autenticados", 
        id:req.userId
    })
}


const SetUserFrontBack = async (req, res) => {

    const { token } = req.body;

    try {
        const user = jwt.verify(token, process.env.SECRET, (error, decoded) => {
            if (error) {
                return res.status(401).send({ error: "Token invalido" });
            }
            return req.userId = decoded.id;
        });

        const docUser = await User.findOne({ _id: user },{_id:0})
        return res.status(200).send(docUser)
    } catch (error) {
        return res.status(400).send({ error: "Token invalido" })
    }
}

module.exports = {All,SetUserFrontBack}