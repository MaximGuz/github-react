import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BasketContextProvider } from './Context/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BasketContextProvider>
            <App />
         </BasketContextProvider>
);

