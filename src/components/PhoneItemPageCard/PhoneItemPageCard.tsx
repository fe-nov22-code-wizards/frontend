/* eslint-disable max-len */
import React, { useContext, useState } from 'react';
import './PhoneItemPageCard.scss';
import '../Grid/Grid.scss';
import { PhoneItem } from '../../types/PhoneItem';
import classNames from 'classnames';
import { ReactComponent as Favorite } from '../../images/favorite.svg';
// eslint-disable-next-line
import { ReactComponent as FavoriteYellow } from '../../images/favorite-yellow.svg';
import { Link } from 'react-router-dom';
import { FavouritesContext } from '../FavouritesContext';

type Props = {
  phone: PhoneItem;
};

type ColorName =
  | 'midnightgreen'
  | 'spacegray'
  | 'rosegold'
  | 'green'
  | 'purple'
  | 'gold'
  | 'yellow';

type ColorValue = Readonly<string>;

const colorMap: Readonly<Record<ColorName, ColorValue>> = {
  midnightgreen: '#39513D',
  spacegray: '#505050',
  rosegold: '#ffb9b9',
  green: '#91ffd1',
  purple: '#df9fff',
  gold: '#ffe4ca',
  yellow: '#ffdf40',
};

const BASE_URL = 'https://api-gwis.onrender.com/';

export const PhoneItemPageCard: React.FC<Props> = ({ phone }) => {
  const {
    id,
    name,
    capacityAvailable,
    capacity,
    priceRegular,
    priceDiscount,
    colorsAvailable,
    color,
    images,
    screen,
    resolution,
    processor,
    ram,
  } = phone;
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const {
    phones,
    addFavouritePhone,
    removeFavouritePhone,
    favouritesPhones,
    cartPhones,
    removeAllItemsByOneType,
    addToCart,
  } = useContext(FavouritesContext);

  const foundPhoneObj = phones.find((p) => p.phoneId === id);
  const isFavourite = favouritesPhones.some((p) => p.phoneId === id);

  const handleClickLiked = (): void => {
    setIsLiked(!isLiked);

    if (isFavourite) {
      foundPhoneObj?.phoneId && removeFavouritePhone(foundPhoneObj);
    } else {
      foundPhoneObj?.phoneId && addFavouritePhone(foundPhoneObj);
    }
  };

  const styleForSelectedImage = {
    backgroundImage: `url(${BASE_URL}/${selectedImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  };
  const handleChangeImage = (image: string) => {
    setSelectedImage(image);
  };
  const handleChangeUrlWithColor = (phoneColor: string) => {
    const idParts = id.split('-');
    const neededIdParts = idParts.slice(0, idParts.length - 1);
    const neededUrlParts = [...neededIdParts, phoneColor];
    const foundUrl = neededUrlParts.join('-');

    return foundUrl;
  };
  const handleChangeUrlWithCapacity = (phoneCapacity: string) => {
    const normalizeCapacity = `${phoneCapacity.slice(
      0,
      phoneCapacity.length - 2,
    )}gb`;
    const oldValue = /(\d+gb)/;
    const foundUrl = id.replace(oldValue, normalizeCapacity);

    return foundUrl;
  };

  const isAdded = cartPhones.some((p) => p === id);
  const handleClickAdded = (): void => {
    if (isAdded) {
      removeAllItemsByOneType(id);
    } else {
      addToCart(id);
    }
  };

  return (
    <div className="card grid__item--desktop-1-24 grid__item--tablet-1-12 grid__item-1-4">
      <h1 className="card_title grid__item--desktop-1-17 grid__item--tablet-1-12 grid__item-1-4">
        {name}
      </h1>

      <div className="grid card_main-info">
        <div className="card_images grid__item--desktop-1-12 grid__item--tablet-1-6 grid__item-1-4">
          <div className="card_images-array">
            {images.map((image) => (
              <div
                key={image}
                className={classNames('card_image-wrapper', {
                  'selected-img': image === selectedImage,
                })}
                onClick={() => handleChangeImage(image)}
              >
                <img
                  src={`${BASE_URL}/${image}`}
                  alt="image"
                  className="card_image-item"
                />
              </div>
            ))}
          </div>
          <div
            className="card_selected-img-wrapper"
            style={styleForSelectedImage}
          />
        </div>

        <div className="card_options grid__item--desktop-14-21 grid__item--tablet-7-12 grid__item-1-4">
          <div className="card_colors">
            <p className="card_colors-title">Avaible colors</p>
            <div className="card_colors-wrapper">
              {colorsAvailable.map((colorAvaible: ColorName | string) => {
                const colorValue =
                  colorMap[colorAvaible as ColorName] || colorAvaible;
                const styles = {
                  backgroundColor: colorValue,
                };

                return (
                  <Link
                    to={`../${handleChangeUrlWithColor(colorAvaible)}`}
                    key={colorAvaible}
                    className={classNames('card_color', {
                      'selected-img': color === colorAvaible,
                    })}
                  >
                    <div className="card_color-filling" style={styles}></div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="card_capacities">
            <p className="card_colors-title">Select capacity</p>
            <div className="card_capacities-wrapper">
              {capacityAvailable.map((currentCapacity) => (
                <Link
                  to={`../${handleChangeUrlWithCapacity(currentCapacity)}`}
                  key={currentCapacity}
                  className={classNames('card_capacity', {
                    'selected-capacity': currentCapacity === capacity,
                  })}
                >
                  <p
                    className={classNames('card_capacity-text', {
                      'selected-capacity-text': currentCapacity === capacity,
                    })}
                  >
                    {currentCapacity}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="card_buttons">
            <div className="card_prices">
              <p className="card_discount">${priceDiscount}</p>
              <p className="card_regular">${priceRegular}</p>
            </div>
            <div className="card_actions">
              {/* <button type="button" className="card_buy">
                Add to cart
              </button> */}
              {isAdded ? (
                <button
                  type="button"
                  className="card_buy product-card__button--added product-card__button"
                  onClick={handleClickAdded}
                >
                  Added
                </button>
              ) : (
                <button
                  type="button"
                  className="card_buy product-card__button"
                  onClick={handleClickAdded}
                >
                  Add to cart
                </button>
              )}
              <button
                type="button"
                className="card_favorite"
                onClick={handleClickLiked}
              >
                {isFavourite ? <FavoriteYellow /> : <Favorite />}
              </button>
            </div>
            <div className="card_information">
              <div className="card_information-titles">
                <p className="card_information-title">Screen</p>
                <p className="card_information-title">Resolution</p>
                <p className="card_information-title">Processor</p>
                <p className="card_information-title">RAM</p>
              </div>
              <div className="card_information-values">
                <p className="card_information-value">{screen}</p>
                <p className="card_information-value">{resolution}</p>
                <p className="card_information-value">{processor}</p>
                <p className="card_information-value">{ram}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
