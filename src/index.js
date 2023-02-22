import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageRouter from 'routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>,
);
