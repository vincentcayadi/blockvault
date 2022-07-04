import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <div className="grid w-full h-screen text-center place-items-center">
        <div>
          <div>
            <h1 className="font-extrabold text-8xl">404</h1>
            <h2>Page Not Found</h2>
          </div>
          <div className="px-2 mt-12">
            <Link
              exact
              to="/"
              className="w-1/4 p-4 mx-auto text-sm text-center text-white duration-300 border-2 bg-nord2 rounded-xl hover:scale-110"
            >
              Homepage
            </Link>
            <Link
              exact
              to="/dashboard"
              className="w-1/4 p-4 mx-auto text-sm text-center text-white duration-300 border-2 bg-nord2 rounded-xl hover:scale-110"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
