import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp'; 
import { FirstApp } from './FirstApp'; 
import { CounterApp } from './CounterApp'
import './styles.css';

ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* <FirstApp /> */}
        <CounterApp value={1000000} />
        
    </React.StrictMode>
);