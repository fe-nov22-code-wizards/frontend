import React from 'react';
import './components/Grid/Grid.scss';
import { PageNotFound } from './modules/PageNotFound';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './App';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PhonesPage } from './modules/PhonesPage/PhonesPage';
import { CartPage } from './modules/CartPage';
import { HomePage } from './modules/HomePage';
import { FavouritesPage } from './modules/FavouritesPage';
import { ContactPage } from './modules/ContactPage';

export const App: React.FC = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="*" element={<PageNotFound />} />

        <Route path="/" element={<HomePage />} />

        <Route path="phones">
          <Route index element={<PhonesPage />} />
          <Route path=":phoneId" element={<PhonesPage />} />
        </Route>

        <Route path="tablets" element={<h1>Tablets Page</h1>} />

        <Route path="accessories" element={<h1>Accessories Page</h1>} />

        <Route path="favourites" element={<FavouritesPage />} />

        <Route path="cart" element={<CartPage />} />

        <Route path="contacts" element={<ContactPage />} />
        <Route path="rights" element={<h1>Rights</h1>} />

        <Route path="/home" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
};
