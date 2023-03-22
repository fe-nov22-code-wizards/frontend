import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import './BannerSlider.scss';

import banner__promo from '../../images/banner-promo.svg';
import banner__tablets from '../../images/banner-tablets.jpg';
import banner__phones from '../../images/banner-phones.jpg';

type Props = {
  className: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

function Arrow(props: Props): JSX.Element {
  const { className, onClick } = props;

  return <div className={className} onClick={onClick} />;
}

export const BannerSlider: React.FC = () => {
  const configs = {
    dotsClass: 'slick-dots',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 3000,
    prevArrow: <Arrow className="slick-prev slick-arrow" />,
    nextArrow: <Arrow className="slick-next slick-arrow" />,
  };

  return (
    <div className="banner-slider">
      <Slider {...configs}>
        <div className="slick-slide">
          <Link to="/">
            <picture>
              <img src={banner__promo} />
            </picture>
          </Link>
        </div>
        <div className="slick-slide">
          <Link to="/phones">
            <picture>
              <img src={banner__phones} />
            </picture>
          </Link>
        </div>
        <div className="slick-slide">
          <Link to="/tablets">
            <picture>
              <img src={banner__tablets} />
            </picture>
          </Link>
        </div>
      </Slider>
    </div>
  );
};
