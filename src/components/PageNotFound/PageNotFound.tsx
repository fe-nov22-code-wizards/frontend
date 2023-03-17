import React from 'react';
import './PageNotFound.scss';
import '../Grid/Grid.scss';

export const PageNotFound: React.FC = () => {
  return (
    <div className="page-not-found">
      <h1 className="title">Oops! 404 Error</h1>
      <p className="message">
        We are sorry, the page you are looking for can not be found.
      </p>
      <div className="cta-container">
        <a className="cta-button">Go back home</a>
      </div>
    </div>
  );
};
