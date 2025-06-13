import React from 'react';

const Page404 = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Oops! Page not found.</h2>
      <p className="text-muted mb-4">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="btn btn-primary btn-lg">
        Go to Homepage
      </a>
    </div>
  );
};

export default Page404;
