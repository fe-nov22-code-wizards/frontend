import React, { useEffect, useState } from 'react';
import './components/Grid/Grid.scss';
import { PageNotFound } from './components/PageNotFound';
import { ProductCardLayout } from './components/ProductCardLayout';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './App';
import { getAllPhones } from './api/phones';
import { Phone } from './types/Phone';
import { Pagination } from './components/Pagination';

export const App: React.FC = () => {
  const [posts, setPost] = useState<Phone[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(16);

  useEffect(() => {
    // eslint-disable-next-line space-before-function-paren
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const res = await getAllPhones();

        setPost(res);

        setLoading(false);
      } catch (error) {
        <PageNotFound />;
      }
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.history.pushState(null, '', `page${pageNumber}`);
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
    <>
      <Header />
      {!loading ? (
        <ProductCardLayout posts={currentPosts} />
      ) : (
        <h2>...Loading</h2>
      )}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
        loading={loading}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      <PageNotFound />
      <Footer />
    </>
  );
};
