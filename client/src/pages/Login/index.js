import React,{useContext, useState} from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';//chamar o contexto


function LoginPage() {
    const {signIn,user} = useContext(AuthContext)

    //receber os valores do email e senha do usuário
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //pegar a ação do botão enviar
    function actionSubmit(event){
        event.preventDefault();
        signIn(email,password)
    }

    return (
        <div >
            <h1>{user}</h1>
            <header>
                <h2>AmorimPg</h2>
                <h4>faça login e comece a usar</h4>
            </header>
            <form onSubmit={actionSubmit}>
                <input type='email' value={email}  placeholder="Digite seu E-mail" 
                onChange={(event) => setEmail(event.target.value)}></input>
                
                <input type='password' value={password} placeholder="Digite sua Senha" 
                onChange={(event) => setPassword(event.target.value)}></input>

                <button type='submit'>Entrar</button>
            </form>
            <footer>
                <Link to={'/forgotPassword'}>Esqueceu sua senha?</Link>
                <Link to={'/register'}>Não possui conta? Crie uma agora</Link>
            </footer>
        </div>
    )
}
export default LoginPage;