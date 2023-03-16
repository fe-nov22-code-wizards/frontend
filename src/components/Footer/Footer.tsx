import React from 'react';
import logo from '../images/logo.svg';
import toTop from '../images/Vector.svg';
import './Footer.scss';

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo logo">
          <img onClick={handleScrollToTop} src={logo} alt="Logo" />
        </div>
        <nav className="footer__nav nav">
          <a
            className="nav__link"
            href="https://github.com/fe-nov22-code-wizards/frontend"
          >
            GitHub
          </a>
          <a className="nav__link" href="#">
            Contacts
          </a>
          <a className="nav__link" href="#">
            Rights
          </a>
        </nav>
        <div className="footer__scroll scroll">
          <p className="scroll__text">Back to top</p>
          <button className="scroll__button button" onClick={handleScrollToTop}>
            <img src={toTop} alt="Vector" />
          </button>
        </div>
      </div>
    </footer>
  );
};
