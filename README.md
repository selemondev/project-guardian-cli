 <p align="center">
<img align="center" src="https://raw.githubusercontent.com/Selemondev/project-guardian-cli/master/src/assets/logo/icon.svg" style="height: 120px; width: 120px" />
<h1 align="center">
Project Guardian CLI
</h1>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/project-guardian-cli">
    <img alt="npm-version-src" src="https://img.shields.io/npm/v/project-guardian-cli/latest.svg?style=flat&colorA=020420&colorB=00DC82" />
  </a>
  <a href="https://npmjs.com/package/project-guardian-cli">
    <img alt="npm-downloads-src" src="https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=020420&colorB=00DC82" />
  </a>
  <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/selemondev/project-guardian-cli/ci.yml" />
</p>

## Why

I have been building open source projects for quiet sometime now and the one thing that is annoying most of the time is to have to setup the `README.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `LICENSE` and `github workflows` manually.

Why not create a template and clone it when starting a new project? By using a template one might be limited to the projects one can build. For example, the setup for building a CLI is different than the setup for building a Vue package or React package. The CLI is agnostic in the sense that the most common files found in most open source projects will be added to your project with your name, repository URL etc depending on how well you have configured your `package.json` file.

Project Guardian CLI is still in beta and under high development 🚧.

## Features

- ✅ Add necessary markdown files such as CODE_OF_CONDUCT.md, LICENSE, README.md, CONTRIBUTING.md and github workflows and issue templates by running a single command.

## Roadmap

- ⏳ Choose package manager for managing dependencies and github workflows. Currently, the github workflows use `pnpm` and also it is configured in the `package.json` as well. If you would like to use `npm` or `yarn`. Please configure the workflows and package.json to use `npm` ( remove `  "packageManager": "pnpm@9.1.1"` property in the package.json ).

- ⏳ Interactive CLI.

- ⏳ Add script tags depending on the project dependencies.

- ⏳ Add badges to the README.md file.

## Usage

### npx

```bash
npx project-guardian-cli@latest
```

### How to contribute?

Contributions are welcome and encouraged! If you have any ideas or suggestions for new features, or if you encounter any bugs or issues, please open an issue or submit a pull request on the GitHub repository.

Developers interested in contributing should read the [Code of Conduct](./CODE_OF_CONDUCT.md) and the [Contributing Guide](./CONTRIBUTING.md).

Happy hacking ⚡
