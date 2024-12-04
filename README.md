# **Documentação do Projeto: Previsão do Tempo**

**Descrição do Projeto**
  
  Este projeto é uma aplicação web simples que permite ao usuário consultar a previsão do tempo para uma cidade específica. A aplicação utiliza a API do OpenWeatherMap para obter dados meteorológicos e exibi-los de forma amigável. O design é responsivo e utiliza ícones da Font Awesome para melhorar a experiência do usuário.

**Tecnologias Utilizadas**

**Node.js**: Ambiente de execução JavaScript no lado do servidor.

**Express**: Framework para Node.js que facilita a criação de servidores web.

**HTML5**: Linguagem de marcação utilizada para estruturar o conteúdo da aplicação.

**CSS3**: Linguagem de estilo utilizada para estilizar a aplicação.

**JavaScript**: Linguagem de programação utilizada para adicionar interatividade à aplicação.

**OpenWeatherMap** **API**: API utilizada para obter dados meteorológicos em tempo real.

**Font** **Awesome**: Biblioteca de ícones que fornece ícones escaláveis e personalizáveis.

**Estrutura do Projeto**

/projeto
│
├── server.js          # Arquivo principal do servidor
├── public             # Diretório que contém arquivos estáticos
│   ├── index.html     # Página HTML principal
│   ├── style.css      # Folha de estilo da aplicação
│   └── js
│       └── script.js  # Script JavaScript para interatividade

## **Como Executar o Projeto**

1. Clone o repositório:

git clone https://github.com/nogeniuss/app-Previ-o-do-Clima.git
cd app-Previ-o-do-Clima

2. Instale as dependências:

npm install express

3. Inicie o servidor:

node server.js

4. Acesse a aplicação: Abra o navegador e vá para http://localhost:3000.

## **Detalhes do Código**

** -> server.js**
Este arquivo é responsável por configurar o servidor Express e servir a aplicação.

Express: O Express é utilizado para criar um servidor que escuta na porta 3000.
Rota Raiz: A rota raiz (/) serve o arquivo index.html localizado no diretório public.
Arquivos Estáticos: O middleware express.static é utilizado para servir arquivos estáticos, como CSS e JavaScript.

**-> index.html**
Este arquivo contém a estrutura HTML da aplicação.

Formulário de Entrada: Um campo de texto e um botão permitem que o usuário insira o nome da cidade.
Exibição de Dados: Elementos HTML são utilizados para exibir a previsão do tempo, incluindo temperatura, descrição do clima, um ícone do clima e detalhes como umidade e velocidade do vento.

**-> style.css**
Este arquivo contém estilos CSS para a aplicação.

Estilo Responsivo: O layout é projetado para ser responsivo e visualmente atraente.
Cores e Fontes: Utiliza um gradiente de fundo e fontes do Google Fonts para melhorar a legibilidade.

**-> script.js**
Este arquivo contém a lógica JavaScript para interatividade.

API Key: A chave da API do OpenWeatherMap é armazenada em uma variável.
Função GetWeather: Esta função faz uma requisição à API do OpenWeatherMap para obter dados meteorológicos com base na cidade inserida pelo usuário.
Manipulação de DOM: Os dados obtidos são exibidos na página através da manipulação do DOM.

## **Exemplo de Uso**
1. Insira o nome de uma cidade no campo de entrada.
2. Clique no botão de pesquisa.
3. A previsão do tempo para a cidade inserida será exibida na tela.

# **Contribuições**

_Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests._
