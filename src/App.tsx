import React from 'react';
import './components/Grid/Grid.scss';
import { PageNotFound } from './components/PageNotFound';
import { ProductCardLayout } from './components/ProductCardLayout';
import { Footer } from './components/Footer';
import './App';
import { Header } from './components/Header';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <h1>Hello, world!</h1>

      <ProductCardLayout />

      <PageNotFound />
      <Footer />
    </>
  );
};
