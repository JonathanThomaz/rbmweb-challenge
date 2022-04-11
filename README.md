# RBM WEB Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Informações gerais do projeto

Para manter os usuários cadastrados na função de mock de signup os dados são salvos no localstorage

Para realizar o sign in é feita uma varredura no array buscando uma correspondência de cpf e senha.
Após isso é salvo o usuário todo no localstorage como usuário atual, de acordo com a lgpd não poderia ser feito isso, mas como esse não é o foco essa foi a opção, no caso poderiamos salvar um token para manter a funcionalidade de que se já houver um usuário atual o sistema faça o sign in automáticamente.

Melhoras para o projeto: 
  - Adicionar mascaras aos inputs para auxiliar o usuário e melhorar a UX.
  - Melhorar a funcionalidade de sign in caso já exista um usuário atual.
  - Criar uma função para apagar o seu usuário.

## IDE

VSCode is recommended.

## VSCode extensions

### EditorConfig for VS Code

[VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

- Id: EditorConfig.EditorConfig
- Description: EditorConfig Support for Visual Studio Code
- Version: 0.16.4
- Publisher: EditorConfig

### ESLint

[VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- Id: dbaeumer.vscode-eslint
- Description: Integrates ESLint JavaScript into VS Code.
- Version: 2.2.2
- Publisher: Microsoft

## Available Scripts

All scripts can be use with yarn.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run lint`

Use to verify if there are no problemns in your code. You can use also `npm run lint:fix`

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

This project use MUI, to learn more access [Material UI](https://mui.com/pt/material-ui/getting-started/learn/)
