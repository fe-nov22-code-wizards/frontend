import React from 'react';
import './components/Grid/grid.scss';
import { PageNotFound } from './components/PageNotFound';
import { ProductCardLayout } from './components/ProductCardLayout';

export const App: React.FC = () => {
  return (
    <>
      <ProductCardLayout />
      <PageNotFound />
    </>
  );
};
