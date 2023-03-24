import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavouritesContext } from '../../components/FavouritesContext';
import { ProductCardLayout } from '../../components/ProductCardLayout';
import arrowRight from '../../images/arrow-right.svg';
import { Phone } from '../../types/Phone';
import './FavouritesPage.scss';

export const FavouritesPage: React.FC = () => {
  const { favouritesPhones, clearAllFavourites } =
    useContext(FavouritesContext);

  const handleClearAll = () => {
    clearAllFavourites();
  };

  const hasFavouritePhones = favouritesPhones.length > 0;
  const moreThanOne = favouritesPhones.length > 1;

  return (
    <div className="main-page">
      <div className="back-menu">
        <Link to="/" className="back-menu__item back-menu__icon" />
        <img src={arrowRight} alt="arrow-icon" className="back-menu__item" />
        <p className="text__item">Favourites</p>
      </div>

      <h1 className="menu-title">Favourites</h1>

      <div className="models-container">
        <p className="text__item">{`${favouritesPhones.length} ${
          moreThanOne ? 'models' : 'model'
        }`}</p>

        {hasFavouritePhones && (
          <button onClick={handleClearAll} className="clear-button">
            Clear all
          </button>
        )}
      </div>

      {favouritesPhones.length ? (
        <div className="phones-cards">
          {favouritesPhones.map((phone: Phone) => (
            <ProductCardLayout phone={phone} key={phone.id} />
          ))}
        </div>
      ) : (
        <p>No favourites have been found</p>
      )}
    </div>
  );
};
