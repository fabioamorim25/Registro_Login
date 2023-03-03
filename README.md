# Registro_Login

### Sobre

<p align="center"> O sistema tem o intuito de registra um usuário ao acessar uma interface do sistema e armazenar os dados. Assim, quando o usuário for fazer o login no sistema, sera possível acessar toda aplicação </p>


<hr>
<h4 align = "center">
 👷‍♂️Projeto 🚧 Registro_Login em contrução 🚧 ...
</h4>
<hr>

### Desafios

<div>
DESAFIOS NO BACK-END:

- Sera usado as definições de API Restful para estruturar todo o back end

- A estrutura dos dados é o JSON. O que vai permitir o client e server interpretar os dados.

- Para ter acesos as rotas privadas é utilizado um middoware. Será usado para validar o token que o usuário enviou para o back end.
- O back end possui quatro rotas publicas onde o usuário pode fazer um post para o servidor e duas rotas privadas. Onde será preciso o usuário está autenticado no sistema.

- No registro sera recebido os dados do usuário e armazenados no banco de dados mongoDB. Onde a senha registrada sera criptografada antes de chegar no banco de dados. Os dados são criptografados e validados utilizando o jwt e o bcrypt.

- No login sera validado os dados recebidos do front end. Caso tudo estiver certo, sera enviado como resposta o token e alguns dados do usuário para o front end. Onde esses dados serão usados para mostra informações do usuário na tela e sera usado para autenticar o usuário no sistema toda vez que a tela for atualizada

- Na recuperação da conta o usuário envia um email. Caso o back end encontre esse email no banco de dados sera gerado um token com validade de 1 hora. Assim, sera preparado um template de mesagem de recuperação de conta que vai conter o token gerado no back end e o link para a página para recuperar a conta. Com todos os dados do usuário atualizado sera enviado para o email do usuário um template de mensagem confirmando a recuperação da conta.

DESAFIOS NO FRONT END:
- No front end o sistema utiliza o react.js. Aonde para navegar entre as páginas é utilizado o react-router-dom.

- O front end possui 5 paginas. Onde, três dessas paginas são publicas e duas privadas. São ela: (PRIVADAS: home, resetPassword; PUBLICAS: login, register, forgotPassword)
- O front end utiliza o axios para fazer as requisições ao back end e esperar a resposta.

- No navegador do cliente sera armazenado apenas o token do usuário (localStorage).

- Para ter acesso à página privada o front end precisa enviar os dados o usuário.

- PROTEÇÃO: manter o usuário logado no sistema. Sera enviar o token do usuário para o back end. Onde o servidor vai validar o token e depois responde com os dados não sensíveis do usuário (name, email e createdDate). Esses dados serão usados para mantendo o usuário autenticado. Assim, toda vez que a tela for atualizada, sera enviado o token para o servidor. Caso o token seja invalido, o usuário é redirecionado para fora do sistema. (para fazer isso foi utilizado o useEffect).

</div>

<br>

<hr>
  <p align="center">
    <a href ="#sobre">Sobre</a> -
    <a href ="#desafios">Desafios</a> -
    <a href ="#features">Features</a> -
    <a href ="#ilustração">Ilustração</a> - 
    <a href ="#pré-requisitos">Pré-requisitos</a> -
    <a href ="#tecnologias_framework">Tecnologias/framework</a> -
    <a href ="#autor">Autor</a>
  </p>
<hr>

<br>

<br>

### Features 

- [x] Registra usuário 
- [x] LogIn usuário
- [x] Esqueceu a senha
- [x] Armazenar token
- [x] Manter o usuário autenticação com o back end (user)
- [x] Recuperar conta
- [x] LogOut
- [ ] Autenticação com o Google

### Ilustração

<div align= "center">
  <img title="imagem da tela de login" src ="./github/logIn_page.jpg"/>
  <img style="max-width:300px;" title="" src ="./github"/>
  
  <div>
    <a href="https://www.figma.com/file/EvvFIBsGZcCgs1ZPj9nEmi/Untitled?t=9MO9mqwKkCKUwc1a-6">Layout do projeto no figma</a>
  </div>
</div>


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o [Mongo db compass](https://www.mongodb.com/try/download/compass). Para receber as mensagem de teste para recuperação da conta, sera usado [Mailtrap](https://mailtrap.io/). Além disto é bom ter um editor para trabalhar com o código como [VScode](https://code.visualstudio.com/)


### ⚙️ Rodando o sistema

```bash
#Clone este repositório
$ git clone <https://github.com/fabioamorim25/Registro_Login.git>

#Acesse a pasta do projeto no terminal/cmd
$ cd Registro_Login

  #INSTALAR BACK END

#Acesse a pasta do projeto no terminal/cmd
$ cd server
# Instale as deprendências
$ npm install
#Ir no arquivo [server/config/mail.json] e colocar os valores do seu mailtrap [Host, Port, User, Pass].

# Execute a aplicação em modo de desenvolvimento
$ npm start
#O servidor iniciará na porta:5000 - acesse <http://localhost:5000>



#Retornar para pasta raiz Registro_Login
$ cd ..



  #INSTALAR FRONT END

#Acesse a pasta do projeto no terminal/cmd
$ cd client
# Instale as deprendências
$ npm install
# Execute a aplicação em modo de desenvolvimento
$ npm start
#O cliente iniciará na porta:3000 - acesse <http://localhost:3000/login>
```

### 🛠️Tecnologias_framework

As seguintes ferramentas foram usadas na construção do projeto:

#### Front end
- [React.js](https://pt-br.reactjs.org/)
- [Axios](https://axios-http.com/docs/intro)

#### Back end
- [Node.js](https://nodejs.org/en/)
- [Express js](https://expressjs.com/pt-br/)
- [Mongo db](https://www.mongodb.com/pt-br/what-is-mongodb)
- [Mongoose](https://mongoosejs.com/)
- [Nodemailer](https://nodemailer.com/about/)


### Autor

[Fábio Amorim](https://linkedin.com/in/fabio-amorim-4545011a1) 😊
