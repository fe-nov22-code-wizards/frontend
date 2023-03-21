import classNames from 'classnames';
import React from 'react';
import { LinkList } from '../LinkList';
import { SideIcons } from '../SideIcons';

type Props = {
  handleCloseMenu: (e: React.MouseEvent) => void;
  isMenuOpen: boolean;
};

export const BurgerList: React.FC<Props> = ({
  handleCloseMenu,
  isMenuOpen,
}) => {
  return (
    <div
      className={classNames('burger__isOpen', {
        burger__slideOut: !isMenuOpen,
        burger__slideIn: isMenuOpen,
      })}
      onClick={handleCloseMenu}
    >
      <LinkList
        navListClass="nav__list burger__list"
        navItemClass="nav__item burger__item"
        navLinkClass="nav__link burger__link"
      />

      <div>
        <SideIcons headLinkClass="burger__icon" />
      </div>
    </div>
  );
};
