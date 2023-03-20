import React from 'react';
import { PageNavLink } from '../PageNavLink';

type Props = {
  navListClass: string;
  navItemClass: string;
  navLinkClass: string;
  handleCloseMenu?: (e: React.MouseEvent) => void;
};

export const LinkList: React.FC<Props> = ({
  navListClass,
  navItemClass,
  navLinkClass,
  handleCloseMenu,
}) => (
  <ul className={navListClass}>
    <li className={navItemClass} onClick={handleCloseMenu}>
      <PageNavLink type={navLinkClass} to="/">
        Home
      </PageNavLink>
    </li>
    <li className={navItemClass} onClick={handleCloseMenu}>
      <PageNavLink type={navLinkClass} to="/phones">
        Phones
      </PageNavLink>
    </li>
    <li className={navItemClass} onClick={handleCloseMenu}>
      <PageNavLink type={navLinkClass} to="/tablets">
        Tablets
      </PageNavLink>
    </li>
    <li className={navItemClass} onClick={handleCloseMenu}>
      <PageNavLink type={navLinkClass} to="/accessories">
        Accessories
      </PageNavLink>
    </li>
  </ul>
);
