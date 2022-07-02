import { Routes, Route } from 'react-router-dom';
// Pages
import Index from './pages/index';
import Dashboard from './pages/dashboard';
import Upload from './pages/upload';
import Transactions from './pages/transactions';
import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import NotFoundPage from './pages/404';

function App() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light';

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark';

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem('theme');

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/pages/dashboard" element={<Dashboard />} />
      <Route exact path="/pages/upload" element={<Upload />} />
      <Route exact path="/pages/transactions" element={<Transactions />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

function Home() {
  return (
    <>
      <Index />
    </>
  );
}

export default App;
