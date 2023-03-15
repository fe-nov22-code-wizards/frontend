import React from 'react';

import iphone14pro from '../images/iphone14pro.png'

import './ProductCardLayout.scss';

export const ProductCardLayout = () => (
  <div className="product-card">
    <img
      className="product__image"
      src={iphone14pro}
      alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
    />
    <h3 className="product__title">
      Apple iPhone 14 Pro 128GB Silver (MQ023)
    </h3>
    <p className="product__price">
      $999
    </p>
    <div className='product__divider'></div>
    <div className="product__info">
      <div className='info__wrapper'>
        <p className='info__name'>Screen</p>
        <p className='info__survey'>6.1" OLED</p>
      </div>
      <div className='info__wrapper'>
        <p className='info__name'>Capacity</p>
        <p className='info__survey'>128GB</p>
      </div>
      <div className='info__wrapper'>
        <p className='info__name'>RAM</p>
        <p className='info__survey'>6GB</p>
      </div>
    </div>
    <div className='product__action'>
      <button
        className="action__cart"
      >
        Add to cart
      </button>
      <div className="action__favorite"></div>
    </div>
  </div>
);
