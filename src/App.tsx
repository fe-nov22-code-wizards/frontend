import React, { useEffect, useState } from 'react';
import './components/Grid/Grid.scss';
import { PageNotFound } from './components/PageNotFound';
import { ProductCardLayout } from './components/ProductCardLayout';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './App';
import { getALLPhones } from './api/phones';
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

        const res = await getALLPhones();

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

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <ProductCardLayout posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
        loading={loading}
      />
      <PageNotFound />
      <Footer />
    </>
  );
};
