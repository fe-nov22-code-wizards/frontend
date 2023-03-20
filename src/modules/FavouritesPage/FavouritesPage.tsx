import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPhones } from '../../api/getAllPhones';
import { ProductCardLayout } from '../../components/ProductCardLayout';
import arrowRight from '../../images/arrow-right.svg';
import { Phone } from '../../types/Phone';
import { PageNotFound } from '../PageNotFound';
import './FavouritesPage.scss';

export const FavouritesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  // eslint-disable-next-line space-before-function-paren
  const fetchPhones = async () => {
    try {
      const res = await getAllPhones();

      setPhones(res);
    } catch (e) {
      <PageNotFound />;
    }
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  const firstFive = phones.slice(0, 5);

  return (
    <div className="main-page">
      <div className="back-menu">
        <Link to="/" className="back-menu__item back-menu__icon" />
        <img src={arrowRight} alt="arrow-icon" className="back-menu__item" />
        <p className="text__item">Favourites</p>
      </div>

      <h1 className="menu-title">Favourites</h1>

      <p className="text__item">{`${firstFive.length} models`}</p>

      <div className="phones-cards">
        {phones.map((phone) => (
          <ProductCardLayout phone={phone} key={phone.id} />
        ))}
      </div>
    </div>
  );
};
