/* eslint-disable max-len */
import React from 'react';
import { BannerSlider } from '../../components/BannerSlider';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import { ProductSlider } from '../../components/ProductSlider';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  return (
    <div className="main-page">
      <h1 className="menu-title">Welcome to Nice Gadgets store!</h1>
      <BannerSlider />

      <ProductSlider title="Brand new models" category="new" />

      <section className="home-page_categories">
        <div>
          <h2 className="products-slider__head-title">Shop by category</h2>
        </div>
        <div className="categories-container grid">
          <div className="category-card grid__item--desktop-1-8 grid__item--tablet-1-4 grid__item-1-4">
            <CategoryCard
              name="Mobile phones"
              itemsCount={71}
              img="https://i.ibb.co/FbqbFMy/image-phones.png"
              path="phones"
              id={1}
            />
          </div>

          <div className="category-card grid__item--desktop-9-16 grid__item--tablet-5-8 grid__item-1-4">
            <CategoryCard
              name="Tablets"
              itemsCount={0}
              img="https://i.ibb.co/1K8StR5/image-tablets.png"
              path="tablets"
              id={2}
            />
          </div>

          <div className="category-card grid__item--desktop-17-24 grid__item--tablet-9-12 grid__item-1-4">
            <CategoryCard
              name="Accessories"
              itemsCount={0}
              img="https://i.ibb.co/5WzMHWg/image-accessories.png"
              path="accessories"
              id={3}
            />
          </div>
        </div>
      </section>
      <ProductSlider title="Hot prices" category="discount" />
    </div>
  );
};
