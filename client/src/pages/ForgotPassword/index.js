import React,{useContext, useState} from "react";

import { AuthContext } from "../../contexts/auth";

function ForgotPassword() {
    const {forgotPassword}= useContext(AuthContext)


    //receber os valores do email e senha do usuário
    const [email, setEmail] = useState("");

    //pegar a ação do botão enviar
    function actionReset(event) {
        event.preventDefault();
        forgotPassword(email);
    }



    return (
        <div className='containerFrom'>
            <div className='fromBox'>
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
        </div>
    )

}

export default ForgotPassword;