/* eslint-disable quotes */
import React, { useContext } from 'react';
import minus from '../../images/minus.svg';
import plus from '../../images/plus.svg';
import { Phone } from '../../types/Phone';
import { FavouritesContext } from '../FavouritesContext';
import './CartProductCard.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = 'https://api-gwis.onrender.com';

type Props = {
  phone: Phone;
};

export const CartProductCard: React.FC<Props> = ({ phone }) => {
  const { cartPhones, addToCart, removeAllItemsByOneType, removeOneFromCart } =
    useContext(FavouritesContext);

  const quantity = cartPhones.filter((p) => p === phone.phoneId).length;

  const handleWarning = () => {
    toast.error("You can't add more than 10 phones of one model");
  };

  const isAddBtnDisabled = quantity >= 10;

  return (
    <div className="cart_card grid__item--desktop-1-16">
      <div className="cart_card-info">
        <button
          className="cart_card-btn-delete"
          onClick={() => {
            removeAllItemsByOneType(phone.phoneId);
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cart_card-btn-delete-svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              // eslint-disable-next-line max-len
              d="M9.47205 1.47138C9.7324 1.21103 9.7324 0.788925 9.47205 0.528575C9.21171 0.268226 8.7896 0.268226 8.52925 0.528575L5.00065 4.05717L1.47206 0.528575C1.21171 0.268226 0.789596 0.268226 0.529247 0.528575C0.268897 0.788925 0.268897 1.21103 0.529247 1.47138L4.05784 4.99998L0.529247 8.52857C0.268897 8.78892 0.268897 9.21103 0.529247 9.47138C0.789596 9.73173 1.21171 9.73173 1.47206 9.47138L5.00065 5.94279L8.52925 9.47138C8.7896 9.73173 9.21171 9.73173 9.47205 9.47138C9.7324 9.21103 9.7324 8.78892 9.47205 8.52857L5.94346 4.99998L9.47205 1.47138Z"
              fill="#B4BDC4"
            />
          </svg>
        </button>
        <img
          src={`${BASE_URL}/${phone.image}`}
          alt="Phone photo"
          className="cart_card-product-photo"
        />
        <p className="cart_card-product-title">{phone.name}</p>
      </div>

      <div className="cart_options-wrapper">
        <div className="cart_options">
          <ToastContainer />
          <button
            className="cart_card-btn-options"
            onClick={() => {
              removeOneFromCart(phone.phoneId);
            }}
          >
            <img
              src={minus}
              alt="Minus an item from cart"
              className="cart_card-btn-options-icon"
            />
          </button>
          <p className="cart_card-options-info">{quantity}</p>
          <button
            className="cart_card-btn-options"
            onClick={() => {
              if (!isAddBtnDisabled) {
                addToCart(phone.phoneId);
              } else {
                handleWarning();
              }
            }}
            // disabled={isAddBtnDisabled}
          >
            <img src={plus} alt="Plus an item from cart" />
          </button>
        </div>
        <p className="cart_card-price">${phone.price}</p>
      </div>
    </div>
  );
};
