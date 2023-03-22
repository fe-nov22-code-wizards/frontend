import React, { useContext } from 'react';
import { PageNavLink } from '../PageNavLink';
import heart from '../../../images/heart.svg';
import cart from '../../../images/cart.svg';
import { FavouritesContext } from '../../FavouritesContext';

type Props = {
  headLinkClass: string;
  myTabIndex?: number;
};

export const SideIcons: React.FC<Props> = ({ headLinkClass, myTabIndex }) => {
  const { favouritesPhones } = useContext(FavouritesContext);

  return (
    <>
      <PageNavLink
        type={headLinkClass}
        to="/favourites"
        myTabIndex={myTabIndex}
      >
        <img src={heart} alt="heart" className="picture-anim" />
        {favouritesPhones.length > 0 && (
          <span className="fav__quantity">{favouritesPhones.length}</span>
        )}
      </PageNavLink>

      <PageNavLink type={headLinkClass} to="/cart" myTabIndex={myTabIndex}>
        <img src={cart} alt="cart" className="picture-anim" />
      </PageNavLink>
    </>
  );
};
