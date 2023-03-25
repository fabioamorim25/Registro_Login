# Registro_Login (front end)


<hr>
<h4 align = "center">
 👷‍♂️Projeto 🚧 Registro_Login em contrução 🚧 ...
</h4>
<hr>

### Desafios

<div>

- No front end o sistema utiliza o react.js. Aonde para navegar entre as páginas é utilizado o react-router-dom 

- O front end possui 5 paginas. Onde, três dessas paginas são publicas e duas privadas. São ela: (PRIVADAS: home, resetPassword; PUBLICAS: login, register, forgotPassword)

- O front end utiliza o axios para fazer as requisições ao back end e esperar a resposta

- No navegador do cliente sera armazenado apenas o token do usuário (localStorage) 

- Para ter acesso à página privada o front end precisa enviar os dados o usuário

- PROTEÇÃO: manter o usuário logado no sistema. Sera enviar o token do usuário para o back end. Onde o servidor vai validar o token e depois responde com os dados não sensíveis do usuário (name, email e createdDate). Esses dados serão usados para mantendo o usuário autenticado. Assim, toda vez que a tela for atualizada, sera enviado o token para o servidor. Caso o token seja invalido, o usuário é redirecionado para fora do sistema. (para fazer isso foi utilizado o useEffect)

</div>

<br>

<hr>
  <p align="center">
    <a href ="#desafios">Desafios</a> -
    <a href ="#features">Features</a> -
    <a href ="#pré-requisitos">Pré-requisitos</a> -
    <a href ="#tecnologias_framework">Tecnologias/framework</a> -
    <a href ="#autor">Autor</a>
  </p>
<hr>

<br>

<br>

### Features 

- [x] Registra usuário 
- [x] LogIn usuário no sistema
- [x] Esqueceu a senha
- [x] Armazenar token
- [x] Manter o usuário autenticação com o back end (user)
- [x] Recuperar conta
- [x] LogOut
- [ ] Autenticação com o Discord


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VScode](https://code.visualstudio.com/)

### ⚙️ Rodando o sistema

```bash
#Acesse a pasta do projeto no terminal/cmd
$ cd Registro_Login

# Instale as deprendências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

#O servidor iniciará na porta:3000 - acesse <http://localhost:3000>
```
### ⚙️ Rotas do Front end:
<h3>- ACESSO PUBLICO :</h3>

| Ação | Tipo de requisição | Rota |
|--- |--- |--- |
| Registra | GET | localhost:3000/register |
| LogIn | GET | localhost:3000/authenticate | 
| Forgot Password | GET | localhost:3000/forgot_password |
| Reset Password | GET | localhost:3000/reset_password |

<br>
<h3>- ACESSO PRIVADO :</h3>

| Ação | Tipo de requisição | Rota | Recebe |
|--- |--- |--- |--- |
| Autenticar usuário | POST | localhost:3000/allPrivate/setUserFrontBack | token |
| Tela admin | GET | localhost:3000/all |
### 🛠️Tecnologias_framework

As seguintes ferramentas foram usadas na construção do projeto:

#### Front end
- [React.js](https://pt-br.reactjs.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)


### Autor

[Fábio Amorim](https://linkedin.com/in/fabio-amorim-4545011a1) 😊
