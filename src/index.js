import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from './Context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ThemeProvider>
    <React.StrictMode>
    <BrowserRouter>
    
    <App />
    
    </BrowserRouter>
    </React.StrictMode>
    // </ThemeProvider>
   
);
