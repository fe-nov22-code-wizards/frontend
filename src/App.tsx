import React from 'react';
import './components/Grid/Grid.scss';
import { PageNotFound } from './modules/PageNotFound';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './App';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PhonesPage } from './modules/PhonesPage';

export const App: React.FC = () => (
  <>
    <Header />

    <Routes>
      <Route path="*" element={<PageNotFound />} />

      <Route path="/" element={<h1>Home Page</h1>} />

      <Route path="phones">
        <Route index element={<PhonesPage />} />
        <Route path=":phoneId" element={<PhonesPage />} />
      </Route>

      <Route path="tablets" element={<h1>Tablets Page</h1>} />

      <Route path="accessories" element={<h1>Accessories Page</h1>} />

      <Route path="favourites" element={<h1>Favourites Page</h1>} />

      <Route path="cart" element={<h1>Cart</h1>} />

      <Route path="/home" element={<Navigate to="/" replace />} />
    </Routes>

    <Footer />
  </>
);
