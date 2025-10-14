import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // NEM .js – csak App, így a React automatikusan megtalálja az App.jsx-et

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
