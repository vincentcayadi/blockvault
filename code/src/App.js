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
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light';

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark';

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Use fetch to get data from API or render the website https://www.youtube.com/watch?v=SR8755C0bME
  }, []);
  return (
    <div class="overflow-auto">
      {loading ? (
        <ReactLoading
          type={'cubes'}
          color={'FFFFF'}
          height={'20%'}
          width={'20%'}
          loading={loading}
        />
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route exact path="upload" element={<Upload />} />
          <Route exact path="transactions" element={<Transactions />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </div>
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
