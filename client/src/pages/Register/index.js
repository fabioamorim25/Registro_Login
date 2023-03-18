import React,{useContext, useState} from "react";

import { AuthContext } from "../../contexts/auth";

function RegisterPage() {
  const{register} = useContext(AuthContext);


  //receber os valores do email e senha do usuário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function actionSave (event){
    event.preventDefault();
    register(name,email,password)
  }
  
  
  
  return (
    <div className='containerFrom'>
      <div className='fromBox'>
        <header>
          <h2>AmorimPg</h2>
          <h4>faça registro e comece a usar</h4>
        </header>

        <form onSubmit={actionSave}>
          <input type='text' value={name} placeholder="Digite seu Nome"
            onChange={(event) => setName(event.target.value)}>
          </input>

          <input type='email' value={email} placeholder="Digite seu E-mail"
            onChange={(event) => setEmail(event.target.value)}>
          </input>

          <input type='password' value={password} placeholder="Digite sua Senha"
            onChange={(event) => setPassword(event.target.value)}>
          </input>

          <button type='submit'>Registar</button>
        </form>
      </div>
    </div>
  )
}
export default RegisterPage;