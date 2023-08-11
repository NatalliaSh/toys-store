import React, { useEffect, useState } from 'react';
import { PaginationButtons } from './PaginationButtons';
import { CardList } from './CardList';

export const Pagination = ({ products, limit }) => {
  const pagesAmount = Math.ceil(products.length / limit);

  const [productsByPage, setProductsByPage] = useState(
    products.slice(0, limit),
  );
  const [activePage, setActivePage] = useState(1);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(2);

  console.log(pagesAmount);

  const clickButtonHandler = (e) => {
    const page =
      e.target.innerText === 'next'
        ? nextPage
        : e.target.innerText === 'prev'
        ? prevPage
        : Number(e.target.innerText);
    const start = page * limit - limit;
    const end = page * limit;
    setActivePage(page);
    setProductsByPage(products.slice(start, end));
    setPrevPage(page === 1 ? null : page - 1);
    setNextPage(page === pagesAmount ? null : page + 1);
  };

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
