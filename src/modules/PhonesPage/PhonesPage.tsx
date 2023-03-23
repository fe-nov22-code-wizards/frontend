import React, { useEffect, useState } from 'react';
import { ProductCardLayout } from '../../components/ProductCardLayout';
import './PhonesPage.scss';
import '../../components/Grid/Grid.scss';
import arrowRight from '../../images/arrow-right.svg';
import { Link, useSearchParams } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { Loader } from '../../components/Loader';
import { Pagination } from '../../components/Pagination';
import { getAllPhones } from '../../api/getAllPhones';
import { ErrorMessage } from '../../components/ErrorMessage';

export const PhonesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [phones, setPhones] = useState<Phone[]>([]);
  const [totalPhones, setTotalPhones] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const sort = searchParams.get('sort') || '';
  const perPage = Number(searchParams.get('perPage') || '24');
  const page = Number(searchParams.get('page') || '1');
  const query = searchParams.get('query') || null;

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);

        const res = await getAllPhones(page, perPage, sort);

        setPhones(res.phones);
        setTotalPhones(res.info.total);
      } catch (e) {
        console.log(e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, [page, perPage, sort, query]);

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
      updateSearch({ page: null });
    }

    updateSearch({ perPage: event.target.value || null });
  };

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearch({ query: event.target.value || null });
  };

  const indexOfLastPost = page * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  let currentPhones = phones.slice(indexOfFirstPost, indexOfLastPost);
  const valueForSearch = !query ? '' : query;

  if (query) {
    const noramlizedQuery = query.trim().toLowerCase();

    currentPhones = phones.filter((p) => {
      const normalizeName = p.name.toLowerCase();

      return normalizeName.includes(noramlizedQuery);
    });
  }

  const paginate = (pageNumber: number) => {
    updateSearch({
      page: pageNumber === 1 ? null : String(pageNumber),
    });
  };

  const prevPage = () => {
    if (page > 1) {
      paginate(page - 1);
    }
  };

  const nextPage = (num: number) => {
    if (page < num) {
      paginate(page + 1);
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
        <p className="text__item">{`${totalPhones} models`}</p>
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
              { sortBy: 'year', title: 'Newest' },
              { sortBy: 'name', title: 'Alphabetically' },
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
        <div
          className="
            grid__item-1-4
            grid__item--tablet-8-12
            grid__item--desktop-8-24"
        >
          <p
            className="
              select__name
              text__item"
          >
            Search
          </p>

          <input
            type="search"
            className="input_search"
            onChange={(event) => {
              onQueryChange(event);
            }}
            value={valueForSearch}
          />
        </div>
      </div>

      {isError && <ErrorMessage />}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="phones-cards">
            {currentPhones.map((phone) => {
              return <ProductCardLayout phone={phone} key={phone.id} />;
            })}
          </div>

          {currentPhones.length !== 0 ? (
            <Pagination
              postsPerPage={perPage}
              totalPosts={totalPhones}
              paginate={paginate}
              currentPage={page}
              prevPage={prevPage}
              nextPage={nextPage}
            />
          ) : (
            <div className="phones-cards-not_found">No phones found</div>
          )}
        </>
      )}
    </div>
  );
};
