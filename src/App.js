import { Routes, Route } from 'react-router-dom';
// Pages
import Index from './pages/index';
import Dashboard from './pages/dashboard';
import Upload from './pages/upload';
import Transactions from './pages/transactions';
import React from 'react';
import NotFoundPage from './pages/404';

function App() {
  //console.log('This is the current window location' + window.location); //https://www.youtube.com/watch?v=SLfhMt5OUPI
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
