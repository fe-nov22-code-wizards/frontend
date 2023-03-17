import React from 'react';
import './ProductCardLayout.scss';
import productPhoto from '../../images/iphone14pro.svg';
import '../Grid/Grid.scss';
import { Phone } from '../../types/Phone';

type Props = {
  posts: Phone[];
};

export const ProductCardLayout: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid">
      <div className="product-card grid__item--desktop-1-6">
        {posts.map((post: Phone) => (
          <React.Fragment key={post.id}>
            <img src={productPhoto} className="product__image" />
            <h3 className="product__title">{post.name}</h3>
            <p className="product__price">{post.fullPrice}</p>
            <div className="product__divider"></div>
            <div className="product__info">
              <div className="info__wrapper">
                <p className="info__name">Screen</p>
                <p className="info__survey">{post.screen}</p>
              </div>
              <div className="info__wrapper">
                <p className="info__name">Capacity</p>
                <p className="info__survey">{post.capacity}</p>
              </div>
              <div className="info__wrapper">
                <p className="info__name">RAM</p>
                <p className="info__survey">{post.ram}</p>
              </div>
            </div>
            <div className="product__action">
              <button className="action__cart">Add to cart</button>
              <div className="action__favorite"></div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
