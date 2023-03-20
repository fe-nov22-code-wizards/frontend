import React from 'react';
import { PageNavLink } from '../PageNavLink';

type Props = {
  navListClass: string;
  navItemClass: string;
  navLinkClass: string;
};

export const LinkList: React.FC<Props> = ({
  navListClass,
  navItemClass,
  navLinkClass,
}) => (
  <ul className={navListClass}>
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