import React from 'react';
import { ProductCardLayout } from '../components/ProductCardLayout';
import './PhonesPage.scss';
import '../components/Grid/Grid.scss';
import arrowRight from '../images/arrow-right.svg';
import { Link, useSearchParams } from 'react-router-dom';

export const PhonesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') || '';
  const perPage = searchParams.get('perPage') || '';

  const updateSearch = (params: { [key: string]: string | null }) => {
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
      setSearchParams(searchParams);
    });
  };

  const onSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateSearch({ sort: event.target.value || null });
  };

  const onPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateSearch({ perPage: event.target.value || null });
  };

  return (
    <div className="phone-page-block">
      <div className="back-menu">
        <Link to="/" className="back-menu__item back-menu__icon" />
        <img src={arrowRight} alt="arrow-icon" className="back-menu__item" />
        <p className="text__item">Phones</p>
      </div>

      <div className="category__name">
        <h1 className="menu-title">Mobile phones</h1>
      </div>

      <div className="visible__phones">
        <p className="text__item">95 models</p>
      </div>

      <div className="dropdowns grid">
        <div
          className="
            grid__item-1-2
            grid__item--tablet-1-4
            grid__item--desktop-1-4"
        >
          <p
            className="
              select__name
              text__item
            "
          >
            Sort by
          </p>

          <select value={sort} onChange={onSortChange}>
            <option value="">No sort</option>
            {[
              { sortBy: 'age', title: 'Newest' },
              { sortBy: 'title', title: 'Alphabetically' },
              { sortBy: 'price', title: 'Cheapest' },
            ].map((sortParam) => (
              <option key={sortParam.sortBy} value={sortParam.sortBy}>
                {sortParam.title}
              </option>
            ))}
          </select>
        </div>

        <div
          className="
            grid__item-3-4
            grid__item--tablet-5-7
            grid__item--desktop-5-7"
        >
          <p
            className="
              select__name
              text__item"
          >
            Items on page
          </p>

          <select value={perPage} onChange={onPerPageChange}>
            <option value="">All</option>
            {['16', '8', '4'].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="phones-cards">
        <ProductCardLayout />
        <ProductCardLayout />
        <ProductCardLayout />
        <ProductCardLayout />
      </div>
    </div>
  );
};
