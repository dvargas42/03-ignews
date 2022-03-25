<h1 align="center">
  <img alt="Logo" src="public/img/FluirLogoCompleto.svg" width="400px">
</h1>

# Fluir web app
[Staging](https://fluir-staging.vercel.app/) | [Production](https://app.fluir.io/)

---

<p align="center">
  <a href="#git">Git</a>&nbsp;|&nbsp;
  <a href="#workflow">Workflow</a>&nbsp;|&nbsp;
  <a href="#código">Código</a>&nbsp;|&nbsp;
  <a href="#tratativa-de-erros">Tratativa de erros</a>&nbsp;|&nbsp;
  <a href="#analytics">Analytics</a>&nbsp;|&nbsp;
  <a href="#logflare">Logflare</a>&nbsp;|&nbsp;
  <a href="#remote-dev">Remote Dev</a>&nbsp;|&nbsp;
</p>

## Manual para os devs

### Autenticação no app
- E-mail: Seu email
- Senha: 123

### Git

- Sempre criar um branch novo a partir do `staging`, com o nome `dev/[nome_programador]/feature123`
- O branch `main` é a produção, `staging` é o branch onde consultores podem realizar testes

#### Workflow

1. Criar branch para a nova feature, a partir do `staging`
2. Quando as alterações estiverem completas, fazer um pull request para o branch `staging`

### Código

- Sempre tentar usar os componentes `reusables`, e sempre tentar criar componentes reutilizáveis
- Caso os componentes sejam apenas para uma tela/componente, deixar organizado em pastas
- Em GETs cachear usando o React-Query
- Sempre utilizar a API layer utils/api.ts

## Tratativa de erros
- Sempre importar o nosso toast de `/utils/hooks/useToast` para mostrar erros ou outras mensagens na tela

## Algumas observações do repo

### Analytics

Google Analytics e Hotjar gravam os eventos necessários automaticamente.

### Logflare

Logs adicionais são feitos através do pino_logflare.ts, que envia eventos para o Logflare.

## Remote Dev
* install [git](https://github.com/git-guides/install-git) or [github](https://desktop.github.com/)
* install [Visual Studio Code (VSCode)](https://code.visualstudio.com/download)
* install [Docker](https://docs.docker.com/get-docker/)
* install [VSCode Remote Containers Extension](https://code.visualstudio.com/docs/remote/containers-tutorial)
* clone this repository, e.g. using the command line (cli)
    ```bash
    git clone git@github.com:fluir-io/fluir-webapp.git
    ```
* open this repository in VSCode, e.g. using the cli
    ```bash
    code fluir-webapp
    ```
* when prompted 
    ```
    Folder contains a Dev Container configuration file...
    ````
    chose 
    ```
    Reopen in Container
    ```
* if not prompted, press `Ctrl+Shift+P` and type
    ```
    Remote-Containers: Reopen in Container
    ```
    `IMPORTANT` if VSCode prompts you to close/save existing terminal/files, that is ok</br>
    `IMPORTANT` if VSCode prompts you to choose a folder/configuration/etc, means you're in the wrong folder, i.e. the file `.devcontainer.json` is missing</br>
    `IMPORTANT` the Remote-Container default branch is 'staging', but you can switch from inside the Remote-Container once open</br>


