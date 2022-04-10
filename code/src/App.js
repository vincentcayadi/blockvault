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
