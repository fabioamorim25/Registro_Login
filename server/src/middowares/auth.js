const jwt = require('jsonwebtoken');


module.exports =(req,res,next)=>{

    //pegar os dados que estão no header do usuário
    const authHeader = req.headers.authorization;


    //1°VERIFICAR SE EXITE UM TOKEN NO HEADER
    if (!authHeader) {
        return res.status(401).send({ error: "O token não foi encontrado" })
    }

    //2° VERIFICAR SE O FORMATO DO TOKEN ESTA CERTO 
    //começa com [Bearer] depois vem o valor do token [asdf24kp24pf]
    //verificar se o teken tem as duas partes
    const parts = authHeader.split(' ');//[split(' ')]: separa o token em duas parte em um array. podendo assim ser selecionado pela posição
    //VERIFICAR SE O TOKEN TEM DOIS ESPAÇOS 
    if (!parts.length === 2) {
        return res.status(401).send({ error: "Token error" })
    }

    //definir chaves para o token e bearer. (scheme: bearer) e (token: token)
    const [scheme, token] = parts;

    //3° verificar se o valor: scheme tem o valor Bearer (usado regex)
    if (! /^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: "Token invalido" })
    }


    try {

        //validar o token vindo do header da requisição (Receber o valor do token e pegar o segredo)
        jwt.verify(token , process.env.SECRET, (error, decoded)=>{

            //VERIFICAR SE TEVE ERRO NA VALIDAÇÃO DO TOKEN
            if(error){
                //retornar um erro caso o token não bata com segredo da aplicação  
                return res.status(401).send({ error: "Token invalido" });
            }
       
            //SE NÃO TEVE ERROR. PEGAR O ID DO USUÁRIO QUE EXISTE NO TOKEN RECEBIDO
            req.userId = decoded.id;
            return next();
        });

    } catch (error) {
        return res.status(400).send({error: "Falha na validação do token"})
    }
         
} 