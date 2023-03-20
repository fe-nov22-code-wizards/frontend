import React from 'react';
import { useState } from 'react';
import './ProductCardLayout.scss';
import { ReactComponent as Heart } from '../../images/heart.svg';
import { ReactComponent as HeartYellow } from '../../images/heart-yellow.svg';

const phone = {
  image:
    // eslint-disable-next-line
    'https://fe-nov22-shd.github.io/image-storage/apple-iphone-11-pro-max/midnightgreen/00.jpg',
  title: 'Apple iPhone Xs 64GB Silver (iMT9G2FS/A)',
  price: 899,
  priceWithdiscount: 799,
  screen: '5.8” OLED',
  capacity: '64 GB',
  ram: '4 GB',
};

export const ProductCardLayout = () => {
  // eslint-disable-next-line
  const { image, title, price, priceWithdiscount, screen, capacity, ram } =
    phone;
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleClickAdded = (): void => {
    setIsAdded(!isAdded);
  };

  const handleClickLiked = (): void => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="product-card container__width">
      <img src={image} className="product-card__image" alt={title} />
      <h1 className="product-card__title">{title}</h1>

      <div className="product-card__price-container">
        <p className="product-card__price">${priceWithdiscount}</p>
        <p className="product-card__price--crossed">${price}</p>
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
          {isLiked ? <HeartYellow /> : <Heart />}
        </button>
      </div>
    </div>
  );
};
