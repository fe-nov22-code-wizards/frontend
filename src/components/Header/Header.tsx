import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/logo.svg';
import burgerMenu from '../../images/burger.svg';
import closer from '../../images/closer.svg';
import { LinkList } from './LinkList';
import { SideIcons } from './SideIcons';
import { BurgerList } from './BurgerList';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    isMenuOpen && (document.body.style.overflow = 'hidden');
    !isMenuOpen && (document.body.style.overflow = 'unset');
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleShowMenu = useCallback(() => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }, [setIsMenuOpen]);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, [setIsMenuOpen]);

  return (
    <div className="header">
      <header className="head">
        <Link to="/" className="head__link">
          <img className="head__logo" src={logo} alt="NICE GADGETS logo" />
        </Link>

        <nav className="nav">
          <LinkList
            navListClass="nav__list"
            navItemClass="nav__item"
            navLinkClass="nav__link"
          />
        </nav>

        <div className="head__icons">
          <SideIcons headLinkClass="head__icon" />
          <button className="head__icon burger " onClick={handleShowMenu}>
            <img
              src={isMenuOpen ? closer : burgerMenu}
              alt="burgerMenu"
              className="picture-anim"
            />
          </button>
        </div>
      </header>

      <BurgerList handleCloseMenu={handleCloseMenu} isMenuOpen={isMenuOpen} />
    </div>
  );
};
