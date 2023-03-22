import React from 'react';
import { Link } from 'react-router-dom';
import arrowRight from '../../images/arrow-right.svg';
import comingSoon from '../../images/coming-soon.png';
import './AccessoriesPage.scss';

export const AccessoriesPage: React.FC = () => {
  return (
    <div className="main-page">
      <div className="back-menu">
        <Link to="/" className="back-menu__item back-menu__icon" />
        <img src={arrowRight} alt="arrow-icon" className="back-menu__item" />
        <p className="text__item">Accessories</p>
      </div>

      <h1 className="menu-title">Accessories</h1>

      <p className="service-title">
        Unfortunately, there are no accessories available now :&#40;
      </p>

      <p className="service-title">
        You can checkout our{' '}
        <Link to="/phones" className="service-link">
          phones
        </Link>
      </p>

      <div className="img-container">
        <img src={comingSoon} alt="coming-soon" className="service-img" />
      </div>
    </div>
  );
};
