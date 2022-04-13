import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'flowbite';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <html class="p-0 m-0 bg-nord6 dark:bg-nord0">
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </html>
);
