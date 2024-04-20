# OneBitFlix

OneBitFlix é uma aplicação web que oferece um painel de administração para gerenciar conteúdo de vídeo, similar a plataformas de streaming populares. Construído com AdminJS, Express e Sequelize, este projeto serve como uma solução robusta para backend.

## Recursos

- Interface moderna do painel de administração com AdminJS.
- Modelos de dados robustos com o ORM Sequelize.
- Integração com o banco de dados PostgreSQL.
- Configuração escalável do servidor Express.
- Suporte a TypeScript para tipagem forte.

## Pré-requisitos

Antes de iniciar, certifique-se de que atende aos seguintes requisitos:

- Node.js versão 14 ou superior.
- PostgreSQL instalado e em execução em sua máquina.
- Um navegador web moderno.

## Instalação

Para instalar o OneBitFlix, siga estes passos:

Clone o repositório: git clone https://github.com/AlissonJLO/onebitflix.git

Navegue até o diretório do projeto: cd onebitflix

Instale as dependências com `npm`: npm install


## Configuração

Crie um arquivo `.env` no diretório raiz e preencha suas credenciais do PostgreSQL e outras variáveis de ambiente conforme necessário:

DATABASE_URL=postgres://USUARIO:SENHA@localhost:5432/NOME_DO_BD

DATABASE_DIALECT=postgres

DATABASE_NAME=NOME_DO_BD

DATABASE_HOST=localhost

DATABASE_USER=USUARIO

DATABASE_PASSWORD=SENHA

COOKIE_SECRET=SEU_SEGREDO_AQUI

PORT=3000

## Compilação

Compile o TypeScript para JavaScript usando o script de build: npm run build

## Executando a Aplicação

Para iniciar o servidor, execute: npm run start

O servidor iniciará e você poderá acessar o painel AdminJS em `http://localhost:3000/admin`.

## Contribuindo para o OneBitFlix

Para contribuir com o OneBitFlix, siga estes passos:

1. Faça um fork deste repositório.
2. Crie uma branch: `git checkout -b <nome_da_branch>`.
3. Faça suas alterações e commit: `git commit -m '<mensagem_do_commit>'`
4. Envie para a branch original: `git push origin onebitflix/<local>`
5. Crie a pull request.

Alternativamente, consulte a documentação do GitHub sobre [como criar uma pull request](https://docs.github.com/pt/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contato

Se você tiver qualquer dúvida ou desejar entrar em contato com o mantenedor, envie um e-mail para `developer@example.com`.

## Licença

Este projeto está sob a licença MIT - veja o arquivo LICENSE.md para detalhes.




