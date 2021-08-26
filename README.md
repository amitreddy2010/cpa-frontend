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

> reference: https://stackoverflow.com/questions/49746638/how-to-use-enum-as-props-in-react-typescript

## Github (done)

via terminal

> git clone https://github.com/amitreddy2010/cpa-frontend.git
> git remote add origin https://github.com/amitreddy2010/cpa-frontend.git

> git remote set-url origin https://github.com/amitreddy2010/cpa-frontend.git
> git push --set-upstream origin feature/integration

Connect to github via sourcetree(setting>account) or vscode (push upstream or output). We can push the code once we connect.

## env files (done)

> npm install --save-dev env-cmd

```
    "start": "env-cmd -f .env react-scripts start",
```

- The variable names must start with prefix "REACT_APP\*"
- Can access the variable using {process.env.NODE_ENV} etc.

## Routes (done)

React-dom-router vs @types/React-dom-router (added both to make it work)

## mswjs 4379 (done)

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

> reference for prettier : https://moduscreate.com/blog/lint-style-typescript/

```
"lint": "npm run prittier:write && npm run prittier:check && npm run lint:css && npm run lint:ts && npm run ts:check
```

> reference : https://medium.com/the-node-js-collection/why-and-how-to-use-eslint-in-your-project-742d0bc61ed7

## Husky pre commit linters

"husky": {
"hooks": {
"pre-commit": "CI=true npm run test",
}
}

npm uninstall husky
npm install -D husky@4

## jest runner

> npm test -- --coverage
> keywords : it, test, describe, xit, fit, screen.getByText().toBeInTheDocument()

```
npm install --save @react-testing/jest-dom @testing-library/react
```

To avoid boilerpate & use react-dom in all tests we can

> import '@react-testing/jest-dom'

For each test:
import {getByText,screen} from '@testing-library/react'

test/app-test-utils -> for integration tests

## React-form-hook

## Atom

## Concepts

- Lazy fetch of components - refer App.tsx in fulfilment
  Lazy load of routes:
  Const propose = lazy(() => import(‘../apply’))

# Implementation UI design

- Use font awesome (setup by adding in index.html)
- Links to be bound inside the Router
- @styledComponents via npm

# Issues faced during development

- mswjs for local development , need to add script file as mentioned in documentation
- styled components typescript .styled.ts
- husky precommit hook need to install husky@4 (version 4)
- useref gives only reference , can access via .current, does not rerender dom
