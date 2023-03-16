import React from 'react';
import './components/Grid/Grid.scss';
import { PageNotFound } from './components/PageNotFound';
import { ProductCardLayout } from './components/ProductCardLayout';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './App';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <ProductCardLayout />
      <PageNotFound />
      <Footer />
    </>
  );
};
