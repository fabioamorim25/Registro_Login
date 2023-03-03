# Registro_Login (back end)

<hr>
<h4 align = "center">
 👷‍♂️Projeto 🚧 Registro_Login em contrução 🚧 ...
</h4>
<hr>

### Desafios

<div>

- Sera usado as definições de API Restful para estruturar todo o back end
- A estrutura dos dados é o JSON. O que vai permitir o client e server interpretar os dados.
- Para ter acesos as rotas privadas é utilizado um middoware. Será usado para validar o token que o usuário enviou para o back end.
- O back end possui quatro rotas publicas onde o usuário pode fazer um post para o servidor e duas rotas privadas. Onde será preciso o usuário está autenticado no sistema

- No registro sera recebido os dados do usuário e armazenados no banco de dados mongoDB. Onde a senha registrada sera criptografada antes de chegar no banco de dados. Os dados são criptografados e validados utilizando o jwt e o bcrypt.
- No login sera validado os dados recebidos do front end. Caso tudo estiver certo, sera enviado como resposta o token e alguns dados do usuário para o front end. Onde esses dados serão usados para mostra informações do usuário na tela e sera usado para autenticar o usuário no sistema toda vez que a tela for atualizada
- Na recuperação da conta o usuário envia um email. Caso o back end encontre esse email no banco de dados sera gerado um token com validade de 1 hora. Assim, sera preparado um template de mesagem de recuperação de conta que vai conter o token gerado no back end e o link para a página para recuperar a conta. Com todos os dados do usuário atualizado sera enviado para o email do usuário um template de mensagem confirmando a recuperação da conta.
</div>

<br>

<hr>
  <p align="center">
    <a href ="#sobre">Sobre</a> -
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

- [x] Registra usuário no banco de dados 
- [x] Logar usuário no sistema
- [x] Autenticar o usuário no sistema (receber o token do front e enviar os dados do usuário)
- [x] Recuperar conta do usuário


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o [Mongo db compass](https://www.mongodb.com/try/download/compass). Para receber as mensagem de teste para recuperação da conta, sera usado [Mailtrap](https://mailtrap.io/). Além disto é bom ter um editor para trabalhar com o código como [VScode](https://code.visualstudio.com/)

Obs: Para testa apenas o back end do repositorio. Pode ser usado o [Insomnia](https://insomnia.rest/download) 

### ⚙️ Rodando o sistema back end

```bash
#Acesse a pasta do projeto no terminal/cmd
$ cd server
# Instale as deprendências
$ npm install

#Ir no arquivo [server/config/mail.json] e colocar os valores do seu mailtrap [Host, Port, User, Pass].

# Execute a aplicação em modo de desenvolvimento
$ npm start
#O servidor iniciará na porta:5000 - acesse <http://localhost:5000>
```

### 🛠️Tecnologias_framework

As seguintes ferramentas foram usadas na construção do projeto:

#### Back end
- [Node.js](https://nodejs.org/en/)
- [Express js](https://expressjs.com/pt-br/)
- [Mongo db](https://www.mongodb.com/pt-br/what-is-mongodb)
- [Mongoose](https://mongoosejs.com/)
- [Nodemailer](https://nodemailer.com/about/)



### Autor

[Fábio Amorim](https://linkedin.com/in/fabio-amorim-4545011a1) 😊
