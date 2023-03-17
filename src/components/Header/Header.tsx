import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classnames from 'classnames';
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
            <PageNavLink to="/" text="Home" />
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

      <nav className="header__icons">
        <NavLink
          to="favourites"
          className={({ isActive }) =>
            classnames('header__icon', {
              'is-active': isActive,
            })
          }
        >
          <img src={heart} alt="heart" className="header__picture" />
        </NavLink>

        <NavLink
          to="cart"
          className={({ isActive }) =>
            classnames('header__icon', {
              'is-active': isActive,
            })
          }
        >
          <img src={cart} alt="heart" className="header__picture" />
        </NavLink>
      </nav>
    </div>
  </header>
);
