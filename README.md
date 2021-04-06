# Navedex

Projeto proposto para a realização do Desafio Técnico da empresa Nave.rs

**Telas**

### :page_with_curl: Informações sobre o Projeto

O Navedex é um sistema web onde é possivel visualizar informações dos funcionários, tais como: nome, cargo, idade, cargo, tempo de empresa e projetos que participou.

O sistema permite que apenas pessoas autorizadas visualizem tais informações, e também permite que ela adicione novo membro, edite e delete membros da listagem.

### :clipboard: Resolução

**Login**

O sistema possui um fluxo de autenticação, onde o usuário só pode ter acesso as telas internas do sistema informando as credenciais criadas previamente.

Para realizar a atenticação utilizei o Context API, um hook do React que permite que mais de um componente tenha acesso aos dados passados por ele. E nele armazenei o token passado pela API e que precisei utilizadas no header das requisições futuras.

E para o controle de rotas utilizei o React-Router-Dom, criando uma rota privada que só permite acesso a elas quando recebe a informação do Context de que o usuário está autenticado.

**Visualização**

A listagem dos funcionários é a tela principal do sistema, assim que ela carrega é realizado uma consulta a API. A chamada da função que realiza a consulta inicial é realizada com a utilização do hook useEffect, ele não recebe nenhum parametro fazendo que assim que a tela for carregada ele seja executado.

Outra forma de visualização também foi aplicada, é possivel ver os dados de um único membro clicando em sua foto. O sistema realizada a chamada para a API passando o id do membro selecionado e torna os dados cadastrados do mesmo.

Para a visualização individual criei uma funcionalidade que calcula a idade e o tempo de empresa do membro com base na data informada, para que essas informações sejam mostradas de forma agradavel ao usuário.

**Criação/Edição/Deletar**

Para realizar o cadastro de um novo membro, foi criado um formalário com campos obrigatórios, onde o usuário deve preencher todos os campos, e a inclução da foto do membro se dá traves da url online da foto, no caso é possivel pegar a foto ja cadastrada no github, por exemplo.

Já a edição, possui o mesmo formulário porem ele ja inicia com os dados dos membro solicitado, assim o usuário edita o que precisa e salva os dados atualizados na API.

Para deletar um membro é possivel fazer direto na tela de listagem, ou na visualização individual do membro.


**Resposividade**

O sistema foi ajustado para dois tipos de tela, para desktop e para celulares, ajustando o layout para que fique de facil visualização para ambos os usuários.


### :running: Dificuldades

O meu maior desafio foi iniciar as chamadas a API, pois precisava retornar um token que autoriza o usuário a realizar as requisições. E como foi a primeira vez que precisei realizar chamadas utilizando o token, acabei demorando um pouco aprendendo como funcionava e como utilizar.

Mas não atrapalhou no desenvolvimento da aplicação, pois consegui entender e utilizar sem problemas durante as requisições.


### :hammer_and_wrench: Tecnologias usadas

Para concluir o desafio utilizei:
- React.js
- fetch: para realizar as chamadas http
- API: fornecida pela empresa

### :computer: Execução

Para você rodar o projeto localmente é necessário que realize o clone do projeto e executar o comando:

```bash
npm install
```

E para executar a aplicação de o seguinte comando:

```bash
npm start
```

Agora no navegar acesse [http://localhost:3000/](http://localhost:3000/)



