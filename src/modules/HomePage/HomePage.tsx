import React from 'react';
import { BannerSlider } from '../../components/BannerSlider';
import { CategoriesCard } from '../../components/CategoriesCard';

import { ProductSlider } from '../../components/ProductSlider';

export const HomePage: React.FC = () => {
  return (
    <div className="main-page">
      <h1 className="menu-title">Nice Gadgets store!</h1>
      <BannerSlider />

      <ProductSlider title="Brand new models" category="new" />

      <CategoriesCard />

      <ProductSlider title="Hot prices" category="discount" />
    </div>
  );
};
