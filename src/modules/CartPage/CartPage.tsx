/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import arrowBackIcon from '../../images/arrow-back-icon.svg';
import { CartProductCard } from '../../components/CartProductCard/CartProductCard';
import '../../components/Grid/Grid.scss';
import './CartPage.scss';
import { ModalCheckout } from '../../components/ModalCheckout';
import { Phone } from '../../types/Phone';
import { FavouritesContext } from '../../components/FavouritesContext';
import { getAllPhones } from '../../api/getAllPhones';
import { ErrorMessage } from '../../components/ErrorMessage';

export const CartPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [phoneFromCart, setPhoneFromCart] = useState<Phone[]>([]);
  const [, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { cartPhones, removeAllFromCart } = useContext(FavouritesContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // eslint-disable-next-line prettier/prettier
  const loadPhones = async() => {
    try {
      setIsLoading(true);

      const { phones } = await getAllPhones(1, 71, '');

      const neededPhones = phones.filter((phone: Phone) =>
        cartPhones.includes(phone.phoneId),
      );

      const phoneForTotalPrice = [];

      for (let i = 0; i < cartPhones.length; i++) {
        const foundPhone = phones.find(
          (p: Phone) => p.phoneId === cartPhones[i],
        );

        phoneForTotalPrice.push(foundPhone);
      }

      const firstTotalPrice = phoneForTotalPrice
        .map((p) => p.price)
        .map(Number)
        .reduce((price, total) => price + total, 0);

      setTotalPrice(firstTotalPrice);
      setPhoneFromCart(neededPhones);
    } catch (e) {
      console.log(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPhones();
    console.log('loaded');
  }, [cartPhones]);

  const handleClearCart = () => {
    removeAllFromCart();
    setPhoneFromCart([]);
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
      {isError && <ErrorMessage />}

      <div className="cart_info grid">
        <div className="cart_cards grid__item--desktop-1-16 grid__item--tablet-1-12 grid__item-1-4">
          {cartPhones.length === 0 ? (
            <p>There is no items in the cart</p>
          ) : (
            phoneFromCart.map((cartPhone: Phone) => {
              return (
                <CartProductCard key={cartPhone.phoneId} phone={cartPhone} />
              );
            })
          )}
        </div>

        {cartPhones.length !== 0 && (
          <div className="cart_total-wrapper grid__item--desktop-17-24 grid__item--tablet-1-12 grid__item-1-4">
            <div className="cart_total">
              <p className="cart_total-price">${totalPrice}</p>
              <p className="cart_total-count">
                Total for {cartPhones.length} items
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
