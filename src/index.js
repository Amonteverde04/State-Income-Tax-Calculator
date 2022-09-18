import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = extendTheme({
  colors: {
    bg: {
      100: "rgba(64,29,121, .71)",
      200: "rgba(14,7,26, 1)",
      300: "rgba(64,32,117, .40)"
    },
    button: {
      100: "#884DE8"
    },
    window: {
      100: "#FFFFFF"
    },
    tint: {
      100: "rgba(0,0,0, .3)",
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App/>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
