import React from 'react';
import { PageNavLink } from '../PageNavLink';
import heart from '../../../images/heart.svg';
import cart from '../../../images/cart.svg';

type Props = {
  headLinkClass: string;
};

export const SideIcons: React.FC<Props> = ({ headLinkClass }) => (
  <>
    <PageNavLink type={headLinkClass} to="/favourites">
      <img src={heart} alt="heart" className="picture-anim" />
    </PageNavLink>
    <PageNavLink type={headLinkClass} to="/cart">
      <img src={cart} alt="cart" className="picture-anim" />
    </PageNavLink>
  </>
);
