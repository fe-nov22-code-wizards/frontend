import React, { useEffect, useState } from 'react';
import { getPhonesByCategory } from '../../api/getPhonesByCategory';
import { Phone } from '../../types/Phone';
import { ErrorMessage } from '../ErrorMessage';
import { Loader } from '../Loader';
import { ProductCardLayout } from '../ProductCardLayout';
import './ProductSlider.scss';

type Props = {
  title: string;
  category: string;
};

export const ProductSlider: React.FC<Props> = ({ title, category }) => {
  const [position, setPosition] = useState(0);
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const movingCardSize = 288 * position;
  const hidden = title === 'Brand new models';
  const isFirst = position === 0;
  const isLast = position === phones.length - 4 || phones.length <= 4;

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await getPhonesByCategory(category);

        setPhones(res);
      } catch (e) {
        console.log(e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="products-slider">
      <div className="products-slider__head">
        <h2 className="products-slider__head-title">{title}</h2>
        <div className="products-slider__buttons">
          <button
            className="products-slider__button"
            onClick={() => {
              setPosition((curr) => curr - 1);
            }}
            disabled={isFirst || isError}
          >
            &lt;
          </button>
          <button
            className="products-slider__button"
            onClick={() => {
              setPosition((curr) => curr + 1);
            }}
            disabled={isLast || isError}
          >
            &gt;
          </button>
        </div>
      </div>
      {isError && <ErrorMessage />}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="products-slider__cards">
          {phones.map((phone) => {
            return (
              <div
                key={phone.id}
                className="products-slider__card"
                style={{ transform: `translateX(-${movingCardSize}px)` }}
              >
                <ProductCardLayout phone={phone} hidden={hidden} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
