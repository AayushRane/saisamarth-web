import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { HashRouter } from 'react-router-dom';
import App from './App';

// Use createRoot for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
