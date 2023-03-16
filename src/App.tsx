import React from 'react';
import { Header } from './components/Header';
import './components/Grid/Grid.scss';
import { PageNotFound } from './components/PageNotFound';
import { ProductCardLayout } from './components/ProductCardLayout';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <h1>Hello, world!</h1>

      <ProductCardLayout />

      <PageNotFound />
    </>
  );
};
