import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import toTop from '../../images/Vector.svg';
import './Footer.scss';
import '../Grid/Grid.scss';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo">
          <Link to="/">
            <img
              onClick={handleScrollToTop}
              src={logo}
              alt="Logo"
              className="logo"
            />
          </Link>
        </div>
        <nav className="footer__nav navigation">
          <Link
            className="navigation__link"
            to="https://github.com/fe-nov22-code-wizards/frontend"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
          <Link
            className="navigation__link"
            to="contacts"
            onClick={handleScrollToTop}
            rel="noreferrer"
          >
            Contacts
          </Link>
          <Link
            className="navigation__link"
            to="rights"
            onClick={handleScrollToTop}
            rel="noreferrer"
          >
            Rights
          </Link>
        </nav>
        <div className="footer__scroll scroll">
          <p className="scroll__text" onClick={handleScrollToTop}>
            Back to top
          </p>
          <button className="scroll__button button" onClick={handleScrollToTop}>
            <img src={toTop} alt="Vector" />
          </button>
        </div>
      </div>
    </footer>
  );
};
