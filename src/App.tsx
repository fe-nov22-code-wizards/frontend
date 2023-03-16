import React from 'react';
import { Header } from './components/Header';
import './components/Grid/grid.scss';
import { PageNotFound } from './components/PageNotFound';

export const App: React.FC = () => {
  return (
    <>
       <Header />
       <h1>Hello, world!</h1>
       <PageNotFound />
    </>
  );
};
