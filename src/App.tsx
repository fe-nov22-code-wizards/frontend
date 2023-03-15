import React from 'react';
import './components/grid/grid.scss';

const App: React.FC = () => {
  return (
    <div className="App grid">
      <h1
        className="
          App
          grid__item
          grid__item-1-4
          grid__item--tablet-1-12
          grid__item--desktop-1-24"
      >
        Hello, world!
      </h1>
    </div>
  );
};

export default App;
