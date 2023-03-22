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
import { PageNotFound } from '../PageNotFound';

export const CartPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [phoneFromCart, setPhoneFromCart] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
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

      const allPhones = await getAllPhones();
      const neededPhones = allPhones.filter((phone) =>
        cartPhones.includes(phone.phoneId),
      );

      setPhoneFromCart(neededPhones);
    } catch {
      <PageNotFound />;
    } finally {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line prettier/prettier
  // const loadPhonesWithPrice = async() => {
  //   try {
  //     setIsLoading(true);

  //     const allPhones = await getAllPhones();
  //     const neededPhones = allPhones.filter((phone) =>
  //       cartPhones.includes(phone.phoneId),
  //     );

  //     setPhoneFromCart(neededPhones);

  //     const primaryTotalPrice = neededPhones
  //       .map((phone) => phone.price)
  //       .map(Number)
  //       .reduce((price, total) => price + total, 0);

  //     setTotalPrice(primaryTotalPrice);
  //   } catch {
  //     <PageNotFound />;
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    loadPhones();
    console.log('loaded');
  }, [cartPhones]);

  // useEffect(() => {
  //   loadPhonesWithPrice();
  // }, []);

  const handleClearCart = () => {
    removeAllFromCart();
    setPhoneFromCart([]);
  };

  const handleChangeTotalPrice = (
    phonePrice: number,
    phoneQuantity: number,
    action: string,
  ) => {
    if (action === 'plus') {
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + phonePrice * phoneQuantity,
      );
    }

    if (action === 'minus') {
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice - phonePrice * phoneQuantity,
      );
    }
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
          {cartPhones.length === 0 ? (
            <p>There is no items in the cart</p>
          ) : (
            phoneFromCart.map((cartPhone: Phone) => {
              return (
                <CartProductCard
                  key={cartPhone.phoneId}
                  phone={cartPhone}
                  handleChangeTotalPrice={handleChangeTotalPrice}
                />
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
