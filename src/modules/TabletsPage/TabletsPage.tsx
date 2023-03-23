import React from 'react';
import { Link } from 'react-router-dom';
import arrowRight from '../../images/arrow-right.svg';
import comingSoon from '../../images/coming-soon.png';
import './TabletPage.scss';

export const TabletsPage: React.FC = () => {
  return (
    <div className="main__page">
      <div className="back-menu">
        <Link to="/" className="back-menu__item back-menu__icon" />
        <img src={arrowRight} alt="arrow-icon" className="back-menu__item" />
        <p className="text__item">Tablets</p>
      </div>

      <h1 className="menu-title">Tablets</h1>

      <p className="service-title">
        Unfortunately, there are no tablets available now :&#40;
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
