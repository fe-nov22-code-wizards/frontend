import React from 'react';
import './components/Grid/Grid.scss';
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
