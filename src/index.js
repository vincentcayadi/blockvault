import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'flowbite';
import { MoralisProvider } from 'react-moralis';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <html class="p-0 m-0 bg-nord6 dark:bg-nord0">
    <React.StrictMode>
      <MoralisProvider serverUrl="https://vev9tafmrwyn.usemoralis.com:2053/server" appId="DYIpOE4Is4ctxT6BZJNcieBeVh8sOM1Fb5R29Jay">
        <BrowserRouter>
          <App />      
        </BrowserRouter>
      </MoralisProvider>
    </React.StrictMode>
  </html>
);
