import React from 'react';
import './components/Grid/Grid.scss';

const App: React.FC = () => {
  return (
    <div className="App Grid">
      <h1
        className="
          App
          Grid__item
          Grid__item-1-4
          Grid__item--tablet-1-12
          Grid__item--desktop-1-24"
      >
        Hello, world!
      </h1>
    </div>
  );
};

export default App;
