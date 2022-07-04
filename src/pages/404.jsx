import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const NotFoundPage = () => {
  return (
    <>
      <div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the content you were looking for doesnt exist</p>
        <p>It was either removed, or there is a typo in the link</p>
        <Link to="/">Homepage</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
