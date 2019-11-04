# Desafio 

## URL para acesso a apicação
Para mais rapido acesso ao app, foi criado uma URL no Heroku a qual está recebendo atualizações sempre que um Pull Request é aceito da branch `develop`.
- `https://test-boanerges-souza.herokuapp.com/`

## Verões de ferramentas e frameworks
- Angular CLI - Versão 8.2.2.
- NPM - Versão 6.9.0.
- NodeJs - Versão 10.16.3.

## Instalação de dependências
Para inicializar o proje é neccessário a instalação de suas dependencias com o comando `npm install` ou `npm i` no prompt de comando.

## Inicialização do projeto
Para servir a aplicação deverrá ser utilizado o comando `ng serve` no prompt de comando. A aplicação será servida na url `http://localhost:4200/` que é a porta padrão do Angular CLI.

### PWA
Em tempo de desenvolvimento, foi criado um PWA ao executar os passos 
- `ng add @angular/pwa`;
- Alterado o nome do PWA que esterá na "Home screem" do usuário no arquivo `manifest.webmanifest`;
- Alteradas as fores no mesmo arquivo apenas para diferenciar o PWA da aplicação no browser.
