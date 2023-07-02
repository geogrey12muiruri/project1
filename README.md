# 1 Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<!--
# Package.json
is an essential part of a areact application and other Node.js projects.


primarily this file is used to manage the project dependencies. including the Version of React.

it also contains other projects configurations like the project's name, Description, Author and Licence information.

This file also allows you to define custom scripts to be executed using the Node.js commandLine, such as starting the developement server, running tests and building the product ready Application. -->

# 1.1 File Architecture of my Application

it becomes a huge problem if files and folders are not organized correctly. I organized my files and folders according to features.
Components
Scenes
Global

# Components

this folder is a shared folder across multiple pages and multiple features.

# Scenes

this sets up the component that will setup our Jsx Layouts for the various components
for example the Layout for the Home.js component will be stored in the following directory.
scenes/home/Home
Scenes will contain other components of our Application like the Chekout component. Just like the Home component the Checkout Component will be located inside the Scenes as follows scenes/checkout/Checkout.
same applies to the ItemDetails page.

# Global

Additionally inside of scenes will have another Directory known as GLOBAL. This Directory will contain the Layout for the Navbar and the footer.

# 1.2 exporting components

Here i Exported all my components using `rfca` command short cut to create and export React components

# 1.3 creating Routes
in App.js i created all the routes to the different pages. the standard way of importing my routes is as illustrated below `<Route path='/' element={Home />}  />  ` an important technique to note here use the talisence in order to create automatic imports. 

# 2.0 The Navbar
when generating the Navbar component the first step is always to come up with a Layout design on paper then use the Jsx and Material Ui to achieve or create the Designed Layout (its pretty easy and awesome technique to learn).

I also learnt Material Ui allows  me to pass Css property directly inside a box component. I also learnt how to write css styling using sx ={{}} technique. 

if look and my code and the Navbar Layout you can clearly see how the Box component really makes things easy and professional. 

intresting how i set my Logo to navigate to the homepage onClick and how i setup the hover to cursor pointer refer to the code below.  
**
 onClick = {()=> navigate ('/')}
                    sx={{ '&:hover': { cursor: 'pointer' } }}
                    color={shades.secondary[500]}**

# 2.1 Redux with Redux-toolkit
this is the standard state management tool. setting up redux involves the following steps.
  # 2.1.0
  inside the src, create a folder and name it `state`. this folder will contain an index.js file with Redux configuration. an important thing to note may be is that am using Redux with Redux toolkit  . toolkit reduces the boiler plate required to setup Redux.

  # 2.1.1 
  inside the state/index.js file we configure our redux by first of all importing the `createSlice` from reduxjs/toolkit. 

  # 2.1.2
  declare the initial state of my application as a constant called `initialState`. initially, isCartOpen will be false, the cart will start with an empty array,  as well as the items. the initial state of the application is declared as shown below.
 
```javascript
  const initialState = {
    isCartOpen: false,
    cartItems: [],
    items: [],
};


```

# Reducers
This is where we set our actions 

                    

                    
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

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
