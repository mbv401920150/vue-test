# NVM (Node Version Manager)
It is a tool to use multiple NodeJS Versions. For DCU, we use the Node version `16.13.2` to support the custom features. For other projects the Node version could change. In that case it is convenient to have this tool to switch among different versions.

> Note: you need to uninstall Node JS before installing NVM.  

## Installation
Follow this guide:  
https://dev.to/stephengade/how-to-install-and-manage-multiple-versions-of-nodejs-on-windows-5h30

Or check directly the NVM Github site:  
https://github.com/coreybutler

## Next steps

### Install the Node version  
You could use the following command to install the latest version:
```
nvm install --lts
```
> **Note**: In Sep 2023, the latest version is `18.17.1`


...or to install a specific version:
  ```
  nvm install <version>
  ```

### Specify the version
The first time, you need to specify which Node version you will going to use.
```
nvm use <version>
```
The same command can be used to switch between versions.  
> **Note**: To validate the current Node version run `node -v`

### Other commands
- To check all versions installed: `nvm list`


- To uninstall a version: `nvm uninstall <version>`  