import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from './styles/Reset';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Reset>
    <App />
  </Reset>
);
