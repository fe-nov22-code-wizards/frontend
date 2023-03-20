import React from 'react';
import { PageNavLink } from '../PageNavLink';

type Props = {
  navListClass: string;
  navItemClass: string;
  navLinkClass: string;
  handleCloseMenu?: () => void;
};

export const LinkList: React.FC<Props> = ({
  navListClass,
  navItemClass,
  navLinkClass,
  handleCloseMenu,
}) => (
  <ul className={navListClass} onClick={handleCloseMenu}>
    <li className={navItemClass}>
      <PageNavLink type={navLinkClass} to="/">
        Home
      </PageNavLink>
    </li>
    <li className={navItemClass}>
      <PageNavLink type={navLinkClass} to="/phones">
        Phones
      </PageNavLink>
    </li>
    <li className={navItemClass}>
      <PageNavLink type={navLinkClass} to="/tablets">
        Tablets
      </PageNavLink>
    </li>
    <li className={navItemClass}>
      <PageNavLink type={navLinkClass} to="/accessories">
        Accessories
      </PageNavLink>
    </li>
  </ul>
);
