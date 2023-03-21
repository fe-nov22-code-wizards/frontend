import React from 'react';
import { useState, useContext } from 'react';
import './ProductCardLayout.scss';
import '../Grid/Grid.scss';
import { ReactComponent as Favorite } from '../../images/favorite.svg';
// eslint-disable-next-line
import { ReactComponent as FavoriteYellow } from '../../images/favorite-yellow.svg';
import { Phone } from '../../types/Phone';
import { FavouritesContext } from '../FavouritesContext';

type Props = {
  phone: Phone;
  handleOnAddToCart: (phone: Phone) => void;
  isInCart: boolean;
};

const BASE_URL = 'https://api-gwis.onrender.com/';

export const ProductCardLayout: React.FC<Props> = ({
  phone,
  handleOnAddToCart,
  isInCart,
}) => {
  const { image, name, fullPrice, price, screen, capacity, ram } = phone;
  const { addFavouritePhone, removeFavouritePhone, favouritesPhones } =
    useContext(FavouritesContext);
  const isFavourite = favouritesPhones.some((p) => p.id === phone.id);
  const [isAdded, setIsAdded] = useState(isInCart);
  


  const handleClickAdded = (): void => {
    setIsAdded(!isAdded);
    handleOnAddToCart(phone);
  };

  const handleClickLiked = (): void => {
    if (isFavourite) {
      removeFavouritePhone(phone);
    } else {
      addFavouritePhone(phone);
    }
  };

  return (
    <div className="product-card container__width">
      <img
        src={`${BASE_URL}/${image}`}
        className="product-card__image"
        alt={name}
      />
      <h1 className="product-card__title">{name}</h1>

      <div className="product-card__price-container">
        <p className="product-card__price">${price}</p>
        <p className="product-card__price--crossed">${fullPrice}</p>
      </div>
      <hr className="product-card__divider" />

      <div className="product-card__details-container">
        <div className="product-card__details">
          <p className="product-card__details__title">Screen</p>
          <p>{screen}</p>
        </div>

        <div className="product-card__details">
          <p className="product-card__details__title">Capacity</p>
          <p>{capacity}</p>
        </div>

        <div className="product-card__details">
          <p className="product-card__details__title">RAM</p>
          <p>{ram}</p>
        </div>
      </div>

      <div className="product-card__button-container">
        {isAdded ? (
          <button
            type="button"
            className="
              product-card__button--added
              product-card__button
              "
            onClick={handleClickAdded}
          >
            Added
          </button>
        ) : (
          <button
            type="button"
            className="product-card__button"
            onClick={handleClickAdded}
          >
            Add to cart
          </button>
        )}

        <button
          type="button"
          className="product-card__button-favorite"
          onClick={handleClickLiked}
        >
          {isFavourite ? <FavoriteYellow /> : <Favorite />}
        </button>
      </div>
    </div>
  );
};
