import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavouritesContext } from '../../components/FavouritesContext';
import { ProductCardLayout } from '../../components/ProductCardLayout';
import arrowRight from '../../images/arrow-right.svg';
import { Phone } from '../../types/Phone';
import './FavouritesPage.scss';

export const FavouritesPage: React.FC = () => {
  const { favouritesPhones } = useContext(FavouritesContext);
  const [cart, setCart] = useState<Phone[]>([]);

  const handleAddToCart = (phone: Phone) => {
    if (!cart.includes(phone)) {
      setCart([...cart, phone]);
    }
  };

  return (
    <div className="main-page">
      <div className="back-menu">
        <Link to="/" className="back-menu__item back-menu__icon" />
        <img src={arrowRight} alt="arrow-icon" className="back-menu__item" />
        <p className="text__item">Favourites</p>
      </div>

      <h1 className="menu-title">Favourites</h1>

      <p className="text__item">{`${favouritesPhones.length} models`}</p>

      {favouritesPhones.length ? (
        <div className="phones-cards">
          {favouritesPhones.map((phone: Phone) => (
            <ProductCardLayout
              phone={phone}
              key={phone.id}
              handleOnAddToCart={handleAddToCart}
              isInCart={cart.includes(phone)}
            />
          ))}
        </div>
      ) : (
        <p>No favourites have been found</p>
      )}
    </div>
  );
};
