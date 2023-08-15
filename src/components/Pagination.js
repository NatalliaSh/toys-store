import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PaginationButtons } from './PaginationButtons';
import { CardList } from './CardList';
import { getAllQueryParams } from '../functions/getAllQueryParams.js';

import './Pagination.scss';

export const Pagination = ({ products, limit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productsByPage, setProductsByPage] = useState(
    products.slice(0, limit),
  );
  const [activePage, setActivePage] = useState(1);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(2);

  const pagesAmount = Math.ceil(products.length / limit);

  const changeActivePageHandler = (pageNumber) => {
    const page = Number(pageNumber);
    const start = page * limit - limit;
    const end = page * limit;
    setActivePage(page);
    setProductsByPage(products.slice(start, end));
    setPrevPage(page === 1 ? null : page - 1);
    setNextPage(page === pagesAmount ? null : page + 1);
  };

  const clickButtonHandler = (e) => {
    const page =
      e.target.innerText === 'next'
        ? nextPage
        : e.target.innerText === 'prev'
        ? prevPage
        : e.target.innerText;

    changeActivePageHandler(page);
    window.scrollTo(0, 0);
    setSearchParams({ ...getAllQueryParams(searchParams), page });
  };

  const withCheckSearchParams = () => {
    if (searchParams.get('page')) {
      changeActivePageHandler(Number(searchParams.get('page')));
    }
  };

  useEffect(() => {
    withCheckSearchParams();
  }, [searchParams, products]);

  return (
    <div className='Pagination'>
      <CardList products={productsByPage} />
      <PaginationButtons
        pagesAmount={pagesAmount}
        activePage={activePage}
        cb={clickButtonHandler}
      />
    </div>
  );
};
