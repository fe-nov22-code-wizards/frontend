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
      <div className="container footer_container">
        <div className="logo footer_logo">
          <img onClick={handleScrollToTop} src={logo} alt="Logo" />
        </div>
        <nav className="nav footer_nav">
          <a
            className="nav_link footer_nav_link"
            href="https://github.com/fe-nov22-code-wizards/frontend"
          >
            GitHub
          </a>
          <a className="nav_link footer_nav_link" href="/contacts">
            Contacts
          </a>
          <a className="nav_link footer_nav_link" href="/rights">
            Rights
          </a>
        </nav>
        <div className="scroll footer_scroll">
          <p className="scroll_text footer_scroll_text">Back to top</p>
          <button
            className="scroll_button button footer_scroll_button"
            onClick={handleScrollToTop}
          >
            <img src={toTop} alt="Vector" />
          </button>
        </div>
      </div>
    </footer>
  );
};
