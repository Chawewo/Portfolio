### `Hosted Website`
I've hosted the website, you can see it at [Chawewo.com](https://chawewo.com)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this, as this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm i react-icons`
This will allow us to utilize the react icons library which is needed for the menu

### `npm i emailjs`

In order to utilize the email service you must create an account with EmailJS.

### ` Universal Rendering `

Universal rendering or Isomorphic rendering is utilizing server-side rendering along with client-side rendering to use the benefits of both sides. We need to transpile the code from both sides in order to have compatibility with wider ranges of environments. 

### npm `install --save-dev @babel/core @babel/cli`

We utilize Babel to transpile the javascript code we have to use its features in older environments. Afterwards we create a .babelrc file that holds the presets for the transpiling

### `Webpack Config`

The webpack config is utilized to load images and javascript code into html in order to properly utilize server-side rendering
