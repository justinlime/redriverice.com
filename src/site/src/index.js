// react
import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import './index.css';
import HomePage from './pages/homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

