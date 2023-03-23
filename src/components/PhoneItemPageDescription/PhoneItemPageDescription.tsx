import React from 'react';
import './PhoneItemPageDescription.scss';
import '../Grid/Grid.scss';
import { PhoneItem } from '../../types/PhoneItem';
import { ProductSlider } from '../ProductSlider';

type Props = {
  phone: PhoneItem;
};

export const PhoneItemPageDescription: React.FC<Props> = ({ phone }) => {
  const {
    id,
    capacity,
    description,
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom,
    cell,
  } = phone;

  return (
    <>
      <article className="phone-description">
        <div className="about-block block">
          <p className="block-name">About</p>
          {description.map((part) => (
            <div key={part.title} className="about-item">
              <p className="item-title">{part.title}</p>
              <p className="item-text">{part.text}</p>
            </div>
          ))}
        </div>
        <div className="tech-specs-block block">
          <p className="block-name">Tech specs</p>
          <div className="block-characteristicss">
            <div className="characteristic">
              <div className="characteristic-title">Screen</div>
              <div className="characteristic-value">{screen}</div>
            </div>
            <div className="characteristic">
              <div className="characteristic-title">Resolution</div>
              <div className="characteristic-value">{resolution}</div>
            </div>
            <div className="characteristic">
              <div className="characteristic-title">Processor</div>
              <div className="characteristic-value">{processor}</div>
            </div>
            <div className="characteristic">
              <div className="characteristic-title">RAM</div>
              <div className="characteristic-value">{ram}</div>
            </div>
            <div className="characteristic">
              <div className="characteristic-title">Built in memory</div>
              <div className="characteristic-value">{capacity}</div>
            </div>
            <div className="characteristic">
              <div className="characteristic-title">Camera</div>
              <div className="characteristic-value">{camera}</div>
            </div>
            <div className="characteristic">
              <div className="characteristic-title">Zoom</div>
              <div className="characteristic-value">{zoom}</div>
            </div>
            <div className="characteristic">
              <div className="characteristic-title">Cell</div>
              <div className="characteristic-value">
                {cell.slice(0, 5).join(', ')}
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="main-page">
        <ProductSlider
          title="You may also like"
          category={`${id}/recommended`}
        />
      </div>
    </>
  );
};
