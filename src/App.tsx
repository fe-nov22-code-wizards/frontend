import React from 'react';
import { BannerSlider } from './components/BannerSlider';
import './components/Grid/grid.scss';
import { PageNotFound } from './components/PageNotFound';
import { ProductCardLayout } from './components/ProductCardLayout';

export const App: React.FC = () => {
  return (
    <>
      <BannerSlider />
      <ProductCardLayout />
      <PageNotFound />
    </>
  );
};
