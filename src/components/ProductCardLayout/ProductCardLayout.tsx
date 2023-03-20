import React from 'react';
import './ProductCardLayout.scss';
import '../Grid/Grid.scss';
import { Phone } from '../../types/Phone';

type Props = {
  phones: Phone[];
};

const BASE_URL = 'https://api-gwis.onrender.com';

export const ProductCardLayout: React.FC<Props> = ({ phones }) => {
  return (
    <>
      {phones.map((phone) => {
        const { id, name, price, screen, capacity, ram, image } = phone;

        return (
          <div key={id} className="product-card">
            <img src={`${BASE_URL}/${image}`} className="product__image" />
            <h3 className="product__title">{name}</h3>
            <p className="product__price">{`$${price}`}</p>
            <div className="product__divider"></div>
            <div className="product__info">
              <div className="info__wrapper">
                <p className="info__name">Screen</p>
                <p className="info__survey">{screen}</p>
              </div>
              <div className="info__wrapper">
                <p className="info__name">Capacity</p>
                <p className="info__survey">{capacity}</p>
              </div>
              <div className="info__wrapper">
                <p className="info__name">RAM</p>
                <p className="info__survey">{ram}</p>
              </div>
            </div>
            <div className="product__action">
              <button className="action__cart">Add to cart</button>
              <div className="action__favorite"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};
