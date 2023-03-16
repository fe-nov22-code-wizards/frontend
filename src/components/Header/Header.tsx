import React from 'react';
import './Header.scss';
import logo from './images/logo.png';
import { PageNavLink } from './PageNavLink';

export const Header: React.FC = () => (
  <header className="head">
    <a href="#/" className="head__link">
      <img className="head__logo" src={logo} alt="NICE GADGETS logo" />
    </a>
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <PageNavLink to="/home" text="Home" />
        </li>
        <li className="nav__item">
          <PageNavLink to="/phones" text="Phones" />
        </li>
        <li className="nav__item">
          <PageNavLink to="/tablets" text="Tablets" />
        </li>
        <li className="nav__item">
          <PageNavLink to="/accessories" text="Accessories" />
        </li>
      </ul>
    </nav>
  </header>
);
