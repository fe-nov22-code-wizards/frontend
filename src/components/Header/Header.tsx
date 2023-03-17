import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/logo.svg';
import heart from '../../images/heart.svg';
import cart from '../../images/cart.svg';
import { PageNavLink } from './PageNavLink';
import '../Grid/Grid.scss';

export const Header: React.FC = () => (
  <header className="head">
    <div className="head">
      <Link to="/" className="head__link">
        <img className="head__logo" src={logo} alt="NICE GADGETS logo" />
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <PageNavLink type="nav__link" to="/">
              Home
            </PageNavLink>
          </li>
          <li className="nav__item">
            <PageNavLink type="nav__link" to="/phones">
              Phones
            </PageNavLink>
          </li>
          <li className="nav__item">
            <PageNavLink type="nav__link" to="/tablets">
              Tablets
            </PageNavLink>
          </li>
          <li className="nav__item">
            <PageNavLink type="nav__link" to="/accessories">
              Accessories
            </PageNavLink>
          </li>
        </ul>
      </nav>

      <nav className="header__icons">
        <PageNavLink type="header__icon" to="/favourites">
          <img src={heart} alt="heart" className="header__picture" />
        </PageNavLink>
        <PageNavLink type="header__icon" to="/cart">
          <img src={cart} alt="cart" className="header__picture" />
        </PageNavLink>
      </nav>
    </div>
  </header>
);
