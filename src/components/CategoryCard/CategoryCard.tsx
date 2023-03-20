/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom';
import './CategoryCard.scss';
import React from 'react';
import '../Grid/Grid.scss';

type Props = {
  name: string;
  itemsCount: number;
  img: string;
  path: string;
  id: number;
};

export const CategoryCard: React.FC<Props> = ({
  name,
  itemsCount,
  img,
  path,
  id,
}) => {
  return (
    // eslint-disable-next-line max-len
    <div className="category-card grid grid__item--desktop-1-7 grid__item--tablet-1-3 grid__item-1-3">
      <Link className={`category-card_image-link card-${id}`} to={`/${path}`}>
        <img className="category-card_image" src={img} alt={name} />
      </Link>
      <Link className="category-card_title-link" to={`/${path}`}>
        <h4>{name}</h4>
      </Link>
      <p className="category-card_subtitle">{`${itemsCount} models`}</p>
    </div>
  );
};
