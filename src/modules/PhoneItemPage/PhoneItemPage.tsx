/* eslint-disable no-constant-condition */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import arrowRight from '../../images/arrow-right.svg';
import arrowBackIcon from '../../images/arrow-back-icon.svg';
import home from '../../images/home.svg';
import './PhoneItemPage.scss';
import '../../components/Grid/Grid.scss';
import { PhoneItemPageCard } from '../../components/PhoneItemPageCard';
import { getOne } from '../../api/getAllPhones';
import { PhoneItem } from '../../types/PhoneItem';
import { Loader } from '../../components/Loader';
import { PhoneItemPageDescription } from '../../components/PhoneItemPageDescription';
import { PageNotFound } from '../PageNotFound';

export const PhoneItemPage: React.FC = () => {
  const { phoneId = '' } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [phone, setPhone] = useState<PhoneItem | null>(null);

  const isVisible = !isError && !isLoading;
  const hasError = isError && !isLoading;

  //eslint-disable-next-line space-before-function-paren
  const loadPhone = async () => {
    try {
      setIsLoading(true);

      const currentPhone = await getOne(phoneId);

      setPhone(currentPhone);
    } catch (e) {
      console.log(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPhone();
  }, [phoneId]);

  return (
    <section className="phoneItem_section">
      {isLoading && <Loader />}
      {hasError && <PageNotFound />}
      {isVisible && (
        <>
          <div className="phoneItem_section-upper">
            <div className="grid">
              <div className="phoneItem_breadcrumbs grid__item--desktop-1-10 grid__item--tablet-1-11 grid__item-1-4">
                <Link to="/" className="phoneItem_home">
                  <img src={home} alt="home" className="phoneItem_home-img" />
                </Link>
                <img
                  src={arrowRight}
                  alt="arrow-icon"
                  className="phoneItem_arrow"
                />
                <Link to="/phones" className="phoneItem_phones-link">
                  Phones
                </Link>
                <img
                  src={arrowRight}
                  alt="arrow-icon"
                  className="phoneItem_arrow"
                />
                <p className="phoneItem_link-name">{phone?.name}</p>
              </div>
              <div className="phoneItem_navigate-wrapper grid__item--desktop-1-2 grid__item--tablet-1-2">
                <div className="phoneItem_navigate">
                  <Link
                    to="#"
                    onClick={() => window.history.back()}
                    className="phoneItem_link"
                  >
                    <img
                      src={arrowBackIcon}
                      alt="GoBack"
                      className="phoneItem_back-icon"
                    />
                  </Link>
                  <Link
                    to="#"
                    onClick={() => window.history.back()}
                    className="phoneItem_link phoneItem_back-title"
                  >
                    Back
                  </Link>
                </div>
              </div>
              {phone && <PhoneItemPageCard phone={phone} />}
            </div>
          </div>

          {phone && <PhoneItemPageDescription phone={phone} />}
        </>
      )}
    </section>
  );
};
