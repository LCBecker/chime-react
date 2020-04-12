# chime-react

![chime-react](https://user-images.githubusercontent.com/6509140/79072971-e4543180-7cb1-11ea-97cc-57f5b4b5f033.gif)

## Motivation

CHIME was developed by the Predictive Healthcare team at Penn Medicine to assist hospitals and public health officials with hospital capacity planning. The most up to date tool can be found [here](https://penn-chime.phl.io/).

The current tool requires calling a backend server every time input parameters are changed to rerender the graphs. This is highly inefficent because calculating the predictions can be completed client-side. The goal of chime-react is to provide the tool as a simple, fast single page application with all graph rerenderings being processed on the client-side.

## Upcoming Features / TODO

* Add stories (Storybook).
* Add PropTypes for custom components.
* Add JEST tests.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
