import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  to: string;
  type: string;
  children: string | JSX.Element;
};

export const PageNavLink: React.FC<Props> = ({ to, type, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn(type, { 'is-active': isActive })}
  >
    {children}
  </NavLink>
);
