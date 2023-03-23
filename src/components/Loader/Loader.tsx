import React from 'react';
import './Loader.scss';
import { MutatingDots } from 'react-loader-spinner';

export const Loader: React.FC = () => (
  <div className="loader">
    <div className="loader__item">
      <MutatingDots
        height="100"
        width="100"
        color="#4219d0"
        secondaryColor="#4219d0"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  </div>
);
