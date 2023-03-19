import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.scss';

export const PageNotFound: React.FC = () => {
  return (
    <div className="page-not-found">
      <h1 className="title">Oops! 404 Error</h1>
      <p className="message">
        We are sorry, the page you are looking for can not be found.
      </p>
      <div className="cta-container">
        <Link to="/" className="cta-button">
          Go back home
        </Link>
      </div>
    </div>
  );
};
