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
    <>
      <Link className="category-card_image-link" to={`/${path}`}>
        <img
          className={`category-card_image card-${id}`}
          src={img}
          alt={name}
        />
      </Link>
      <Link className="category-card_title-link" to={`/${path}`}>
        <h4>{name}</h4>
      </Link>
      <p className="category-card_subtitle">{`${itemsCount} models`}</p>
    </>
  );
};
