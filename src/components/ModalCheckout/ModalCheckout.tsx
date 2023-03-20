import React from 'react';
import { Link } from 'react-router-dom';
import '../Grid/Grid.scss';
import './ModalCheckout.scss';

type Props = {
  handleCloseModal: () => void;
  handleClearCart: () => void;
};

export const ModalCheckout: React.FC<Props> = ({
  handleCloseModal,
  handleClearCart,
}) => {
  return (
    <div className="modal">
      <div className="modal_wrapper">
        <button className="modal_close" onClick={handleCloseModal}>
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
        <h1 className="modal_title">
          Checkout is not implemented yet. Do you want to clear the Cart?
        </h1>

        <div className="modal_btns">
          <Link to={'/'} className="modal_btn">
            Go back home
          </Link>
          <button className="modal_btn" onClick={handleClearCart}>
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
};
