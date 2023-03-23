import React, { useContext } from 'react';
import { PageNavLink } from '../PageNavLink';
import heart from '../../../images/heart.svg';
import cart from '../../../images/cart.svg';
import { FavouritesContext } from '../../FavouritesContext';
import classNames from 'classnames';

type Props = {
  headLinkClass: string;
  myTabIndex?: number;
};

export const SideIcons: React.FC<Props> = ({ headLinkClass, myTabIndex }) => {
  const { favouritesPhones, cartPhones } = useContext(FavouritesContext);

  const hasFavouritesPhones = favouritesPhones.length > 0;
  const hasPhonesInCart = cartPhones.length > 0;

  return (
    <>
      <PageNavLink
        type={headLinkClass}
        to="/favourites"
        myTabIndex={myTabIndex}
      >
        <img src={heart} alt="heart" className="picture-anim" />

        <span
          className={classNames('fav__quantity', {
            'fade-in': hasFavouritesPhones,
            'fade-out': !hasFavouritesPhones,
          })}
        >
          {favouritesPhones.length || 1}
        </span>
      </PageNavLink>

      <PageNavLink type={headLinkClass} to="/cart" myTabIndex={myTabIndex}>
        <img src={cart} alt="cart" className="picture-anim" />

        <span
          className={classNames('fav__quantity', {
            'fade-in': hasPhonesInCart,
            'fade-out': !hasPhonesInCart,
          })}
        >
          {cartPhones.length || 1}
        </span>
      </PageNavLink>
    </>
  );
};
