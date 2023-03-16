import React from 'react';
import './components/Grid/Grid.scss';
import { PageNotFound } from './components/PageNotFound';
import { ProductCardLayout } from './components/ProductCardLayout';
import { Footer } from './components/Footer';
import './App';

export const App: React.FC = () => {
  return (
    <>
      <ProductCardLayout />
      <PageNotFound />
      <Footer />
    </>
  );
};
