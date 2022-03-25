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
  <a href="#eslint-\&-prettier">ESlint & Prettier</a>&nbsp;|&nbsp;
  <a href="#remote-dev">Remote Dev</a>
</p>

---
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

### **Analytics**

Google Analytics e Hotjar gravam os eventos necessários automaticamente.

### **Logflare**

Logs adicionais são feitos através do pino_logflare.ts, que envia eventos para o Logflare.

### **ESlint & Prettier**
  Hoje, o nosso projeto está configurado utilizando o lint do próprio Next e o plugin base do Airbnb. Para que ele funcione adequadamente será necessário ter em sua IDE as seguintes extensões instaladas:

  * [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  * [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

  Outro ponto importante é a necessidade de acrescentar nas configurações do VS Code (settings.json) algumas instruções para que haja o funcionamento automátizado.

  Para tal, aperte Ctrl-Shift-P (Windows e Linux) ou Cmd-Shift-P (Mac), e digite `Preferences: Open Settings (JSON)` e acrescente as seguintes linhas no arquivo:

  ```json
  ...
  "editor.formatOnSave": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.formatDocument": true,
    "source.fixAll": true
  },
  ...

  ```


###  ⚠ **Problemas conhecidos**
- Fique atendo para não deixar instruções duplicadas no `settings.json` do VS Code, pois o salvamento automático pode deixar de funcionar;

- Outro problema é com relação ao plugin do Eslint quando ele está em um terceiro nível do diretório `~/home`, ele não consegue encontrar o path para o Prettier o que impede de reconhecer erros e diferenças do padão em tempo real. Por exemplo:

  - ✔️ `~/home/dir1/fluir-webapp`
  - ❌ `~/home/dir1/dir2/fluir-webapp`

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


