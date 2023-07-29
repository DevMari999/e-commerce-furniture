import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChairsProvider } from './context/ChairsContext';

ReactDOM.render(
    <React.StrictMode>
        <ChairsProvider>
            <App />
        </ChairsProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


