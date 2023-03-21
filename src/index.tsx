import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { FavouritesProvider } from './components/FavouritesContext';

const Root = () => (
  <FavouritesProvider>
    <Router>
      <App />
    </Router>
  </FavouritesProvider>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<Root />);
