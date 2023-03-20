import React from 'react';
import { BannerSlider } from '../../components/BannerSlider';
import { CategoryCard } from '../../components/CategoryCard';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: 'Mobile phones',
      itemsCount: 71,
      img: 'https://i.ibb.co/FbqbFMy/image-phones.png',
      path: 'phones',
    },
    {
      id: 2,
      name: 'Tablets',
      itemsCount: 0,
      img: 'https://i.ibb.co/1K8StR5/image-tablets.png',
      path: 'tablets',
    },
    {
      id: 3,
      name: 'Accessories',
      itemsCount: 0,
      img: 'https://i.ibb.co/5WzMHWg/image-accessories.png',
      path: 'accessories',
    },
  ];

  return (
    <div className="main-page">
      <h1 className="menu-title">Welcome to Nice Gadgets store!</h1>
      <BannerSlider />
      <section className="home-page_categories">
        <div>
          <h2>Shop by category</h2>
        </div>
        <div className="categories-container">
          {categories.map((category) => (
            <CategoryCard
              name={category.name}
              itemsCount={category.itemsCount}
              img={category.img}
              path={category.path}
              key={category.id}
              id={category.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
