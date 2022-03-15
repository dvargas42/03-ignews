<h1 align="center">
  <img alt="Logo" src="https://res.cloudinary.com/dvargas42/image/upload/v1618784238/ignews/logo_xtsxjg.svg" width="500px">
  <img alt="avatar" src="https://res.cloudinary.com/dvargas42/image/upload/v1618792526/ignews/avatar_bau7hs.svg" width="100px">
</h1>

<h3 align="center">
  The Next Application for React World News.
</h3>

<p align="center">The best way to find news out about React World!</p>

<p align="center">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dvargas42/03-ignews?color=yellow">

  <a href="https://www.linkedin.com/in/daniel-santos-040983ab/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Daniel%20Vargas-yellow">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/dvargas42/03-ignews?color=yellow">

  <a href="https://github.com/dvargas42/03-ignews/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/dvargas42/03-ignews?color=yellow">
  </a>

  <a href="https://github.com/dvargas42/03-ignews/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/dvargas42/03-ignews?color=yellow">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/dvargas42/03-ignews?color=yellow">
</p>




<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-screnshots">Screenshots</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 💇🏼 About the project

This application was part of an exercise given in class to establish knowledge of resources and
functions for rendering information in a Next Web application.

## 📸 Screenshots

Images of the application in operation.

<p align="center">
<img alt="ScreenShot01" src="https://res.cloudinary.com/dvargas42/image/upload/v1618792072/ignews/screenshot01_x7bdbt.png" width="400px">
<img alt="ScreenShot01" src="https://res.cloudinary.com/dvargas42/image/upload/v1618792084/ignews/screenshot02_sjdpe1.png" width="400px">
</p>

<p align="center">
<img alt="ScreenShot01" src="https://res.cloudinary.com/dvargas42/image/upload/v1618792096/ignews/screenshot03_nlimvz.png" width="400px">
<img alt="ScreenShot01" src="https://res.cloudinary.com/dvargas42/image/upload/v1618792106/ignews/screenshot04_ordjlo.png" width="400px">
</p>

<p align="center">
<img alt="ScreenShot01" src="https://res.cloudinary.com/dvargas42/image/upload/v1618792117/ignews/screenshot05_k2zwbi.png" width="400px">
<img alt="ScreenShot01" src="https://res.cloudinary.com/dvargas42/image/upload/v1618792131/ignews/screenshot06_l01woe.png" width="400px">
</p>

## 🚀 Technologies

Technologies that I used to develop this web application


- [Next](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next-Auth](https://next-auth.js.org/providers/github)
- [Axios](https://github.com/axios/axios)
- [Sass](https://sass-lang.com/)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/br)

## 💻 Getting started

### Requirements

- [Stripe-cli](https://stripe.com/docs/stripe-cli#install)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Create account on the following services**

These services will provide information for populating environment variables in the .env.local file

- [Stripe](https://stripe.com/br)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/dvargas42/03-ignews.git
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# To finish, run the webapp 
$ yarn dev

```
**In another tab or terminal to listen to the webhooks**

```bash
# Run the app to listen wehooks
$ stripe listen --forward-to localhost:3000/api/webhooks

# Well done, project is started!
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork dvargas42/03-ignews

```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd 03-ignews

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m "My new feature"

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Daniel Vargas 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/daniel-santos-040983ab/)