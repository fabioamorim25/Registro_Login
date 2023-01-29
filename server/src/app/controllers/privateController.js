


const All = async(req,res)=>{
    
    res.send({
        msg:"Página privada. Apenas para usuários autenticados", 
        id:req.userId
    })
}














module.exports = {All}