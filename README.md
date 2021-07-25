# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

# cpa-frontend - setup

## React typescript template (done)

> reference: https://medium.com/codex/typescript-and-create-react-app-11bdebcbf763

```
npx create-react-app my-app --template typescript
```

## Github (done)

via terminal

> git clone https://github.com/amitreddy2010/cpa-frontend.git
> git remote add origin https://github.com/amitreddy2010/cpa-frontend.git

> git remote set-url origin https://github.com/amitreddy2010/cpa-frontend.git
> git push --set-upstream origin feature/integration

Connect to github via sourcetree(setting>account) or vscode (push upstream or output). We can push the code once we connect.

## env files

> npm install --save-dev env-cmd

```
    "start": "env-cmd -f .env react-scripts start",
```

- The variable names must start with prefix "REACT_APP\*"
- Can access the variable using {process.env.NODE_ENV} etc.

## Routes

## mswjs 4379

mswjs documentation
turorial reference : https://codeburst.io/configuring-mock-service-worker-msw-c62c9d9e4a6a
youtube reference : https://www.youtube.com/watch?v=V-CKjACOfmc&t=4s

```
npx msw init ./public
```

## ThemeProvider & global style 4300

## run scripts

> build start test lint prepush husky analyze clean

## internationalization 4300

## linters - Eslint

```
"lint": "npm run prittier:write && npm run prittier:check && npm run lint:css && npm run lint:ts && npm run ts:check
```

> reference : https://medium.com/the-node-js-collection/why-and-how-to-use-eslint-in-your-project-742d0bc61ed7

```
npm install --save-dev eslint eslint-config-strongloop
echo '{"extends": "strongloop"}' > .eslintrc.json
echo node_modules/ >> .gitignore
```

Add pretest script in package.json :

```
{
    ...
    "scripts": {
        "pretest": "eslint --ignore-path .gitignore ."
    }
    ...
}
```

```
git add package.json .gitignore .eslintrc.json
git commit -m 'Add eslint automation'
npm run pretest
```

Pre-commit:
cp .git/hooks/pre-commit.sample .git/hooks/pre-commit
Add at last:
set -e
npm run pretest

## jest runner

## React-form-hook

## Atom
