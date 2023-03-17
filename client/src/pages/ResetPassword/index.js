import React, { useContext,useState } from "react";

import { AuthContext } from "../../contexts/auth";

function ResetPassword() {

  const { resetPassword} = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");


  function actionReset(event) {
    event.preventDefault();
    resetPassword(email,token,password)
  }


  return (
    <div className='containerFrom'>
      <div className='fromBox'>
        <form onSubmit={actionReset}>
          <input type='email' value={email} placeholder="Digite seu E-mail"
            onChange={(event) => setEmail(event.target.value)}>
          </input>

          <input type='text' value={token} placeholder="Digite o Token do Email"
            onChange={(event) => setToken(event.target.value)}>
          </input>

          <input type='password' value={password} placeholder="Digite sua nova Senha"
            onChange={(event) => setPassword(event.target.value)}>
          </input>

          <button type='submit'>Resetar</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword;