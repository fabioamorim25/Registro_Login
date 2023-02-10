import React,{useState} from 'react';



function LoginPage() {

    //receber os valores do email e senha do usuário
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //pegar a ação do botão enviar
    function actionSubmit(event) {
        event.preventDefault();
        console.log({ email, password });
    }

    return (
        <div >
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
                <a href='/resetPassword'>Esqueceu sua senha?</a>
                <a href='/register'>Não possui conta? Crie uma agora</a>
            </footer>
        </div>
    )
}
export default LoginPage;