import { Routes, Route } from 'react-router-dom';
// Pages
import Index from './pages/index';
import Dashboard from './pages/dashboard';
import Upload from './pages/upload';
import Transactions from './pages/transactions';
import React from 'react';
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
