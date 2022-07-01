<h1 align="center">
    <br>
    <p align="center" style="font-weight: bold;">🚀 Projeto LabeX </p>
</h1>

<br>

<p align="justify">☄️ O projeto hoje será integrado com API labefy onde podemos fazer uma playlist, adicionar musicas, listar as músicas e ouvi-las. </p>

<h1>
    <br>
    <p style="font-weight: bold;">🔗 Link do projeto no Surge</p>
</h1>

https://satisfying-rail.surge.sh/

<h1>
    <br>
    <p style="font-weight: bold;">🔐 Informações para Login</p>
</h1>

📧 Email: elisabete@gmail.com.br
<br>
🔑 Senha: 1234567

<br>

<h1>
    <br>
    <p style="font-weight: bold;">🧠 Contexto</p>
</h1>

O objetivo foi criar um aplicativo para mostar novas mensagens.

- Como rodar o projeto
- Layout
- Tecnologias Utilizadas
- Bibliotecas Utilizadas
- Requisitos
- O que esta funcionando
- O que não está funcionando
- Saudações da Eli!

<br>

# 💻 Como rodar o projeto localmente

Siga os passos e inclua as informações abaixo:

| Passo                     | Comando/informação |
| ------------------------- | ------------------ |
| Faça o fork               | `botão de forkar`  |
| ou Faça o clone           | `git clone`        |
| Instale as dependências   | `npm i`            |
| utilize o script de start | `npm start`        |

<br>

<h1>
    <br>
    <p style="font-weight: bold;">🎨 Layout</p>
</h1>

## 🖥️ web

<p align="center">
     <img src="./images/desk1.png"  width="400px">   
     <img src="./images/desk2.png"  width="400px">
</p>

<p align="center">
     <img src="./images/desk3.png"  width="400px">
     <img src="./images/desk3.5.png"  width="400px">
     </p>

<p align="center">
     <img src="./images/desk4.png"  width="400px">
     <img src="./images/desk5.png"  width="400px"> 
</p>

<p align="center">
     <img src="./images/desk6.png"  width="400px">   
     <img src="./images/desk7.png"  width="400px">   
</p>

<p align="center">
     <img src="./images/desk8.png"  width="400px">   
     <img src="./images/desk9.png"  width="400px">   
</p>

## 📱 Mobile

<p align="center">
     <img src="./images/mobile1.png">  
     <img src="./images/mobile2.png">  
</p>

<p align="center">
     <img src="./images/mobile3.png"> 
     <img src="./images/mobile4.png">  
</p>

---

<h1>
    <br>
    <p style=" font-weight: bold;">🛠️ Tecnologias Utilizadas</p>
</h1>

 <div style="display: inline_block"><br>
 
  <img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Git" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg">
 
</div>

<br>

<h1>
    <br>
    <p style=" font-weight: bold;">📚 Bibliotecas Utilizadas</p>
</h1>

 <div style="display: inline_block"><br>

- npm
- styled-components
- axios
- react-router-dom
- material-UI

</div>

<br>

<h1>
    <br>
    <p style="font-weight: bold;">⚙️ Requisitos</p>
</h1>

A ideia será criar uma plataforma de gerenciamento de viagens espaciais. A plataforma terá **duas partes: uma pública e uma privada**. 😝

<aside>
⚠️ Muita atenção na descrição abaixo! Sempre que tiver dúvidas sobre o funcionamento do site, você pode referenciar esse trecho do enunciado

</aside>

Inicialmente, o usuário deve ser direcionado para uma página onde pode escolher entre dois fluxos:

- **Área Administrativa** (necessário login para acessar - é a parte **privada**)
- **Lista de Viagens** (para candidatos, sem login - é a parte **pública**)

Caso o usuário escolha ver a **Lista de Viagens**, será redirecionado à parte pública (sem login) do site. Na parte **pública** qualquer usuário deverá ser capaz de:

- Ver a lista de viagens existentes
- Ter acesso a uma página com formulário para se inscrever para uma viagem existente
- 💡 Dica

  Os endpoints que serão integrados nesse fluxo são apenas os que não possuem token de autenticação nos headers! São eles: `Get Trips` e `Apply To Trips`.

Caso o usuário escolha entrar na Área Administrativa, deverá ser redirecionado para uma página onde pode fazer login. Após fazer o login com uma conta válida, terá acesso à parte privada, onde deverá ser capaz de:

- Ver a lista de todas as viagens com a possibilidade de deletá-las
- Ter acesso a uma página com formulário para criar novas viagens
- Ver os detalhes de uma viagem e, dentro desta página:

  - Conseguir ver a lista de candidatos que se aplicaram para essa viagem e ainda estão pendentes
  - Aprovar ou reprovar os candidatos para a viagem
  - Ver lista atualizada de candidatos aprovados

<br>

<h1>
    <br>
    <p style="font-weight: bold;">✨ O que funciona</p>
</h1>

- Feito as rotas do site.
- Quando usuário faz login é guardado no localStorage o token.
- Pagina de detalhes do administrador.
- Usuário só consegue acessar área ADM logado.
- É possível se inscrever nas viagens.
- Pessoa com admin consegue excluir as viagens.
- Pessoa com admin consegue criar novas viagens.
- Pessoa com admin consegue aprovar ou reprovar candidato nas viagens.

<h1>
    <br>
    <p style="font-weight: bold;">	❌ O que não funciona</p>
</h1>

- No responsivo quando lista as Viagens para a pesssoa se inscrerver eu não consegui fazer rolar a página para mostrar todas as viagnes.

<h1>
    <br>
    <p style="font-weight: bold;">👋 Saudações, Eli!</p>
</h1>

_Caso queira contribuir com meu projeto, será totalmente bem-vindx!!!_

_Qualquer dúvida ou sugestão, chama no contatinho!_

<img  style="border-radius: 10%;" src="https://i.picasion.com/pic91/8dd880c47cfc761e805745c941097adb.gif" alt="Gif Yeah" width="200">

<br>

<a href="https://www.linkedin.com/in/elisabete-a-santos/"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>

<br>

### Feito com 💕 e muita dedicação
