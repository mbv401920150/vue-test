# Init

To create a new Vue application follow the next guide.

1. Install NVM (Node Version Manager) and set NodeJS version.  
    Follow [this guide](./docs/nvm.md).  
    > This project uses the version `18.17.1`.  
    > Project Finanace (DCU Features) uses `16.13.2`.

2. Install yarn: `npm i -g yarn`  
    To update yarn, you can run the following command: `yarn set version latest`

# Versions

- Node version: `18.17.1`
- Yarn version: `1.22.19`
- @quasar/cli: `v2.3.0`
- @quasar/app-vite: `v1.6.0`
- @vue/cli: `5.0.8`

# Creating the new project
Check out the [documentation](https://quasar.dev/start/quasar-cli).

# How to handle environment variables
The project uses the `dotenv` library.  
Quasar has his own way to manage environments, but only has two `development` and `production`.
https://quasar.dev/quasar-cli-webpack/handling-process-env/

To handle multiples environments the ideal solution is using `dotenv`:  
[Quasar documentation about dotenv](https://quasar.dev/quasar-cli-webpack/handling-process-env/#using-dotenv)  

DotEnv package [documentation](https://www.npmjs.com/package/dotenv)
  
> With Vite also is possible handle multiples environments:  
> https://vitejs.dev/guide/env-and-mode.html  
> But is not compatible with Quasar.

# Packages
1. Vue: `Ver 3.0`
2. Quasar: `Ver 2.6.0`
3. Vue Router: `Ver 4.0`
4. Axios: `Ver 1.2.1`
5. Pinia: `Ver 2.0.11`
6. Vite: `Ver 1.3.0`
7. dotenv: `Ver 16.3.1`

# Recommended VS Code Extensions
- ESLint
- Volar: Language support for Vue 3

# How to run the project?

For DCU, were added other scripts that will run the project pointing to different environments:
- Sandbox: `yarn runSandbox`
- Development: `yarn runDev`
- QA: `yarn runQa`
- Staging: `yarn runStage`
- Production: `yarn runProduction`

> Check those scripts in the `package.json`

# Troubleshoot

## How to fix the "Parsing error: No Babel config"

This is the whole error message:

```
Parsing error: No Babel config file detected for <project-path>\<your-file>.  

Either disable config file checking with requireConfigFile: false, or configure Babel so that it can find the config files.
```

This is an error message not related to the VUE CLI initial configuration. If you tried to run the application, you will that everything is working fine.  
Then, this is more related to VSC Configuration problem.  
To fix that do the following:

1. In VSC, press `CTRL+,` to open your settings.
2. In the search section put the following: `ESLint Working Directories`
3. In the visible option click on `Edit in settings.json`
4. In the JSON file put the following configuration:
    ```
      "eslint.workingDirectories": [
        {"mode": "auto" }
      ]
    ```
5. Save your changes.

# FAQ

Check the FAQ Section [here](./docs/faq.md).
