import React from 'react';
import { Link } from 'react-router-dom';
import arrowBackIcon from '../../images/arrow-back-icon.svg';
// eslint-disable-next-line max-len
import { CartProductCard } from '../../components/CartProductCard/CartProductCard';
import '../../components/Grid/Grid.scss';
import './CartPage.scss';

export const CartPage: React.FC = () => {
  return (
    <section className="cart">
      <div className="cart_navigate-wrapper grid grid__item--desktop-1-2">
        <div className="cart_navigate">
          <Link to={''} className="cart_link">
            <img src={arrowBackIcon} alt="GoBack" className="cart_back-icon" />
          </Link>
          <Link to={''} className="cart_link cart_back-title">
            Back
          </Link>
        </div>
      </div>
      <h1 className="cart_title grid grid__item--desktop-1-3">Cart</h1>
      <div className="cart_info grid">
        <div className="cart_cards grid__item--desktop-1-16">
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
        </div>

        <div className="card_total-wrapper grid__item--desktop-17-24">
          <div className="cart_total">
            <p className="cart_total-price">$2657</p>
            <p className="cart_total-count">Total for 3 items</p>
            <button className="cart_total-btn">Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};
