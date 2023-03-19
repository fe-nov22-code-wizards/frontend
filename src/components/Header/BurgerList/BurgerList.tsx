import React from 'react';
import { LinkList } from '../LinkList';
import { SideIcons } from '../SideIcons';

export const BurgerList: React.FC = () => (
  <>
    <LinkList
      navListClass="nav__list burger__list"
      navItemClass="nav__item burger__item"
      navLinkClass="nav__link burger__link"
    />

    <div>
      <SideIcons headLinkClass="burger__icon" />
    </div>
  </>
);
