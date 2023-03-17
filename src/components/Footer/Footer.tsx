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
        <div className="footer__logo logo">
          <img onClick={handleScrollToTop} src={logo} alt="Logo" />
        </div>
        <nav className="footer__nav navigation">
          <Link
            className="navigation__link"
            to="https://github.com/fe-nov22-code-wizards/frontend"
          >
            GitHub
          </Link>
          <Link className="navigation__link" to="#">
            Contacts
          </Link>
          <Link className="navigation__link" to="#">
            Rights
          </Link>
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
