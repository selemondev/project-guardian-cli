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
    <img alt="npm-downloads-src" src="https://img.shields.io/npm/dm/project-guardian-cli.svg?style=flat&colorA=020420&colorB=00DC82" />
  </a>
  <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/selemondev/project-guardian-cli/ci.yml" />
</p>



## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

Project Guardian CLI automates the creation of essential markdown files and GitHub workflows for open-source projects. It addresses the repetitive task of manually setting up `README.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `LICENSE`, and GitHub workflows.  The CLI aims to be agnostic, adding common files found in most open-source projects, and populating them with information from your `package.json` file.

### Key Features

- ✅  Adds `CODE_OF_CONDUCT.md`, `LICENSE`, `README.md`, `CONTRIBUTING.md`, GitHub workflows, and issue templates with a single command.

### Roadmap

- ⏳ Choose package manager for managing dependencies and github workflows.
- ⏳ Interactive CLI.
- ⏳ Add script tags depending on the project dependencies.
- ⏳ Add badges to the README.md file.

## Usage

### npx

```bash
npx project-guardian-cli@latest
```

## Contributing

Contributions are welcome! If you have ideas for new features, encounter bugs, or have suggestions, please open an issue or submit a pull request on the [GitHub repository](https://github.com/selemondev/project-guardian-cli).

Developers should read the [Code of Conduct](./CODE_OF_CONDUCT.md) and the [Contributing Guide](./CONTRIBUTING.md).
