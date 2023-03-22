import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  to: string;
  type: string;
  children: string | React.ReactNode;
  myTabIndex?: number;
};

export const PageNavLink: React.FC<Props> = ({
  to,
  type,
  children,
  myTabIndex,
}) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn(type, { 'is-active': isActive })}
    tabIndex={myTabIndex}
  >
    {children}
  </NavLink>
);
