import React, { useEffect, useState } from 'react';
import { getPhonesByCategory } from '../../api/getPhonesByCategory';
import { Phone } from '../../types/Phone';
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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const movingCardSize = 288 * position;
  const hidden = title === 'Brand new models';

  const isFirst = position === 0;
  const isLast = position === phones.length - 1;

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);

        const res = await getPhonesByCategory(category);

        setPhones(res);
      } catch (error) {
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
            disabled={isFirst}
          >
            &lt;
          </button>
          <button
            className="products-slider__button"
            onClick={() => {
              setPosition((curr) => curr + 1);
            }}
            disabled={isLast}
          >
            &gt;
          </button>
        </div>
      </div>
      {isError && (
        <h2 className="error__info">
          Error occurred while loading data from the server. Please try the
          operation again later.
        </h2>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="products-slider__cards">
          {phones.map((phone) => (
            <div
              key={phone.id}
              className="products-slider__card"
              style={{ transform: `translateX(-${movingCardSize}px)` }}
            >
              <ProductCardLayout phone={phone} hidden={hidden} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
