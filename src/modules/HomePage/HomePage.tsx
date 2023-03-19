import React from 'react';
import { BannerSlider } from '../../components/BannerSlider';

export const HomePage: React.FC = () => {
  return (
    <div className="main-page">
      <h1 className="menu-title">Welcome to Nice Gadgets store!</h1>
      <BannerSlider />
    </div>
  );
};
