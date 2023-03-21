import React from 'react';
import { BannerSlider } from '../../components/BannerSlider';
import { ProductSlider } from '../../components/ProductSlider';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  return (
    <div className="main-page">
      <h1 className="menu-title">Welcome to Nice Gadgets store!</h1>
      <BannerSlider />

      <ProductSlider title="Brand new models" category="new" />
      <ProductSlider title="Hot prices" category="discount" />
    </div>
  );
};
