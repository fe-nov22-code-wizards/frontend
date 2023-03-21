import React, { useEffect, useState } from 'react';
import { ProductCardLayout } from '../../components/ProductCardLayout';
import './PhonesPage.scss';
import '../../components/Grid/Grid.scss';
import arrowRight from '../../images/arrow-right.svg';
import { Link, useSearchParams } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { PageNotFound } from '../PageNotFound';
import { getAllPhones } from '../../api/getAllPhones';
import { Loader } from '../../components/Loader';
import { Pagination } from '../../components/Pagination';
import { getPreparedPhones } from '../../helpers/getPreparedPhones';

export const PhonesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(24);
  const sort = searchParams.get('sort') || '';
  const perPage = searchParams.get('perPage') || '';

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);

        const res = await getAllPhones();

        setPhones(res);
        setPostsPerPage(24);
      } catch (error) {
        <PageNotFound />;
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const cartString = window.localStorage.getItem('cart');
  const cart: Phone[] = cartString ? JSON.parse(cartString) : [];

  const [cartPhones, setCartPhones] = useState<Phone[]>(cart);
  const handleOnAddToCart = (phone: Phone) => {
    const cartPhonesId = cartPhones.map((phoneCart) => phoneCart.phoneId);

    if (!cartPhonesId.includes(phone.phoneId)) {
      setCartPhones((previousCartPhones) => [...previousCartPhones, phone]);
    } else {
      setCartPhones((previousCartPhones) =>
        previousCartPhones.filter(
          (cartPhone: Phone) => cartPhone.phoneId !== phone.phoneId,
        ),
      );
    }
  };

  window.localStorage.setItem('cart', JSON.stringify(cartPhones));

  const updateSearch = (params: { [key: string]: string | null }) => {
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
      setSearchParams(searchParams);
    });
  };

  const onSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateSearch({ sort: event.target.value || null });
  };

  const onPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!event.target.value) {
      setCurrentPage(1);
      updateSearch({ page: null });
    }

    setPostsPerPage(+event.target.value || 24);
    updateSearch({ perPage: event.target.value || null });
  };

  const visiblePhones = getPreparedPhones(phones, sort);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPhones = visiblePhones.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    updateSearch({
      page: pageNumber === 1 ? null : String(pageNumber),
    });
  };

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const nextPage = (num: number) => {
    if (currentPage < num) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="main-page">
      <div className="back-menu">
        <Link to="/" className="back-menu__item back-menu__icon" />
        <img src={arrowRight} alt="arrow-icon" className="back-menu__item" />
        <p className="text__item">Phones</p>
      </div>

      <div className="category__name">
        <h1 className="menu-title">Mobile phones</h1>
      </div>

      <div className="visible__phones">
        <p className="text__item">{`${phones.length} models`}</p>
      </div>

      <div className="dropdowns grid">
        <div
          className="
            grid__item-1-2
            grid__item--tablet-1-4
            grid__item--desktop-1-4"
        >
          <p
            className="
              select__name
              text__item
            "
          >
            Sort by
          </p>

          <select value={sort} onChange={onSortChange}>
            <option value="">No sort</option>
            {[
              { sortBy: 'age', title: 'Newest' },
              { sortBy: 'title', title: 'Alphabetically' },
              { sortBy: 'price', title: 'Cheapest' },
            ].map((sortParam) => (
              <option key={sortParam.sortBy} value={sortParam.sortBy}>
                {sortParam.title}
              </option>
            ))}
          </select>
        </div>

        <div
          className="
            grid__item-3-4
            grid__item--tablet-5-7
            grid__item--desktop-5-7"
        >
          <p
            className="
              select__name
              text__item"
          >
            Items on page
          </p>

          <select value={perPage} onChange={onPerPageChange}>
            <option value="">All</option>
            {['16', '8', '4'].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="phones-cards">
          {currentPhones.map((phone) => {
            const isInCart = cartPhones
              .map((phonesInCart) => phonesInCart.phoneId)
              .includes(phone.phoneId);

            return (
              <ProductCardLayout
                phone={phone}
                key={phone.id}
                handleOnAddToCart={handleOnAddToCart}
                isInCart={isInCart}
              />
            );
          })}
        </div>
      )}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={phones.length}
        paginate={paginate}
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  );
};
