import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';

// Redux imports
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './state';

// Create a Redux store
// The configureStore function 
// takes an object with a reducer property.
const store = configureStore({
  reducer: { cart: cartReducer },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* the provider  */}
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
    </ThemeProvider> 
    </Provider> 
   
  </React.StrictMode>
);


