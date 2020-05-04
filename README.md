# monorepo-with-lerna-and-npm
A basic project to show how monorepo works using lerna and npm

### Run below commands to make this code working

- ##### Install lerna globally 
`npm i -g lerna`
- ##### Install dependencies of this project. Note it will only install dependencies mentioned in root package.json file
`npm install`
- ##### Install dependencies for packages and create symlinks. Read more [here](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme)
`lerna bootstrap` 

Open http://localhost:3000 to view it in the browser.

For detailed description of the code please refer my blog https://medium.com/@harshverma04111989/creating-monorepo-using-lerna-dd431d0db072
