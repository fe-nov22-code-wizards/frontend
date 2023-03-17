import React from 'react';
import './ProductCardLayout.scss';
import productPhoto from '../../images/iphone14pro.svg';
import '../Grid/Grid.scss';

export const ProductCardLayout: React.FC = () => (
  <div className="grid">
    <div className="product-card grid__item--desktop-1-6">
      <img src={productPhoto} className="product__image" />
      <h3 className="product__title">
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </h3>
      <p className="product__price">$999</p>
      <div className="product__divider"></div>
      <div className="product__info">
        <div className="info__wrapper">
          <p className="info__name">Screen</p>
          <p className="info__survey">6.1&quot; OLED</p>
        </div>
        <div className="info__wrapper">
          <p className="info__name">Capacity</p>
          <p className="info__survey">128 GB</p>
        </div>
        <div className="info__wrapper">
          <p className="info__name">RAM</p>
          <p className="info__survey">6 GB</p>
        </div>
      </div>
      <div className="product__action">
        <button className="action__cart">Add to cart</button>
        <div className="action__favorite"></div>
      </div>
    </div>
  </div>
);
