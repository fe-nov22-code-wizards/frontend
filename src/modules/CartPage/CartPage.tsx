/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrowBackIcon from '../../images/arrow-back-icon.svg';
import { CartProductCard } from '../../components/CartProductCard/CartProductCard';
import '../../components/Grid/Grid.scss';
import './CartPage.scss';
import { ModalCheckout } from '../../components/ModalCheckout';
import { Phone, PhoneWithQuantity } from '../../types/Phone';

export const CartPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const phonesFromLocalStorage = JSON.parse(
    window.localStorage.getItem('cart') || '',
  );
  const normalizedPhones = phonesFromLocalStorage.map(
    (phoneFromLocalStorage: Phone) => ({
      ...phoneFromLocalStorage,
      quantity: 1,
    }),
  );
  const [phones, setPhones] = useState<PhoneWithQuantity[]>(normalizedPhones);

  const primaryTotalPrice = phones
    .map((phone) => phone.price)
    .map(Number)
    .reduce((price, total) => price + total, 0);
  const primaryQuantity = phones
    .map((phone) => phone.quantity)
    .map(Number)
    .reduce((quantity, total) => quantity + total, 0);

  const [totalPrice, setTotalPrice] = useState(primaryTotalPrice);
  const [totalQuantity, setTotalQuantity] = useState(primaryQuantity);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToTotalPrice = (price: number) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + price);
  };
  const handleMinusTotalPrice = (price: number) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice - price);
  };
  const handleAddToTotalQuantity = () => {
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + 1);
  };
  const handleMinusTotalQuantity = () => {
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - 1);
  };

  const handleDeleteFromCart = (phoneToDelete: Phone) => {
    const updatedCart = phones.filter(
      (phone) => phone.phoneId !== phoneToDelete.phoneId,
    );

    setPhones(updatedCart);
    window.localStorage.setItem('cart', JSON.stringify(updatedCart));
    handleMinusTotalPrice(phoneToDelete.price);
    handleMinusTotalQuantity();
  };
  const handleClearCart = () => {
    setPhones([]);
    window.localStorage.setItem('cart', JSON.stringify([]));
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
          {phones.length === 0 ? (
            <p>There is no items in the cart</p>
          ) : (
            phones.map((cartPhone: PhoneWithQuantity) => {
              return (
                <CartProductCard
                  key={cartPhone.phoneId}
                  phone={cartPhone}
                  handleDeleteFromCart={handleDeleteFromCart}
                  handleAddToTotalPrice={handleAddToTotalPrice}
                  handleMinusTotalPrice={handleMinusTotalPrice}
                  handleAddToTotalQuantity={handleAddToTotalQuantity}
                  handleMinusTotalQuantity={handleMinusTotalQuantity}
                />
              );
            })
          )}
        </div>

        {phones.length !== 0 && (
          <div className="cart_total-wrapper grid__item--desktop-17-24 grid__item--tablet-1-12 grid__item-1-4">
            <div className="cart_total">
              <p className="cart_total-price">${totalPrice}</p>
              <p className="cart_total-count">
                Total for {totalQuantity} items
              </p>
              <button onClick={handleOpenModal} className="cart_total-btn">
                Checkout
              </button>
              {showModal && (
                <ModalCheckout
                  handleCloseModal={handleCloseModal}
                  handleClearCart={handleClearCart}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
