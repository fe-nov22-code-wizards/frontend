/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrowBackIcon from '../../images/arrow-back-icon.svg';
import { CartProductCard } from '../../components/CartProductCard/CartProductCard';
import '../../components/Grid/Grid.scss';
import './CartPage.scss';
import { ModalCheckout } from '../../components/ModalCheckout';

export const CartPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="cart">
      <div className="cart_navigate-wrapper grid grid__item--desktop-1-2">
        <div className="cart_navigate">
          <Link
            to="#"
            onClick={() => window.history.back()}
            className="cart_link"
          >
            <img src={arrowBackIcon} alt="GoBack" className="cart_back-icon" />
          </Link>
          <Link
            to="#"
            onClick={() => window.history.back()}
            className="cart_link cart_back-title"
          >
            Back
          </Link>
        </div>
      </div>
      <h1 className="cart_title grid grid__item--desktop-1-3">Cart</h1>
      <div className="cart_info grid">
        <div className="cart_cards grid__item--desktop-1-16 grid__item--tablet-1-12 grid__item-1-4">
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
        </div>

        <div className="cart_total-wrapper grid__item--desktop-17-24 grid__item--tablet-1-12 grid__item-1-4">
          <div className="cart_total">
            <p className="cart_total-price">$2657</p>
            <p className="cart_total-count">Total for 3 items</p>
            <button onClick={handleOpenModal} className="cart_total-btn">
              Checkout
            </button>
          </div>
          {showModal && <ModalCheckout handleCloseModal={handleCloseModal} />}
        </div>
      </div>
    </section>
  );
};
