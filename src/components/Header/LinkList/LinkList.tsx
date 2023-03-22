import React from 'react';
import { PageNavLink } from '../PageNavLink';

type Props = {
  navListClass: string;
  navItemClass: string;
  navLinkClass: string;
  handleCloseMenu?: (e: React.MouseEvent) => void;
  myTabIndex?: number;
};

export const LinkList: React.FC<Props> = ({
  navListClass,
  navItemClass,
  navLinkClass,
  myTabIndex,
}) => (
  <ul className={navListClass}>
    <li className={navItemClass}>
      <PageNavLink type={navLinkClass} to="/" myTabIndex={myTabIndex}>
        Home
      </PageNavLink>
    </li>
    <li className={navItemClass}>
      <PageNavLink type={navLinkClass} to="/phones" myTabIndex={myTabIndex}>
        Phones
      </PageNavLink>
    </li>
    <li className={navItemClass}>
      <PageNavLink type={navLinkClass} to="/tablets" myTabIndex={myTabIndex}>
        Tablets
      </PageNavLink>
    </li>
    <li className={navItemClass}>
      <PageNavLink
        type={navLinkClass}
        to="/accessories"
        myTabIndex={myTabIndex}
      >
        Accessories
      </PageNavLink>
    </li>
  </ul>
);
