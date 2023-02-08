import React,{useState} from "react";

function ResetPassword() {

    //receber os valores do email e senha do usuário
    const [email, setEmail] = useState("");


    //pegar a ação do botão enviar
    function actionReset(event) {
        event.preventDefault();
        console.log({email});
    }

    return (
        <div >
            <header>
                <h2>AmorimPg</h2>
                <h4>Redefinir sua conta aqui</h4>
            </header>

            <form onSubmit={actionReset}>
                <input type='email' value={email} placeholder="Digite seu E-mail"
                    onChange={(event) => setEmail(event.target.value)}></input>

                <button type='submit'>Enviar</button>
            </form>
        </div>
    )

}

export default ResetPassword;