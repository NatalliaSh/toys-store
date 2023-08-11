import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCardShort } from './cards/ProductCardShort.js';
import { Sort } from './Sort.js';
import { Filter } from './Filter.js';
import { filterParam, sortParamsInURL } from '../CONST.js';
import { sort } from '../functions/sort.js';
import { filter } from '../functions/filter.js';
import { Pagination } from './Pagination.js';
import { CardList } from './CardList.js';

import './CardsSection.scss';

export const CardsSection = ({ products }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  //made a local state with datacopy in order to sort or filter it
  const [productsCopy, setProductsCopy] = useState(products);
  const [workMode, setWorkMode] = useState(1); //0-fullList, 1-with pagination

  const withCheckSearchParams = (data) => {
    let result = data;

    if (searchParams.get('filter')) {
      result = filter(result, searchParams.get('filter'));
    }
    if (searchParams.get('sort')) {
      result = sort(result, searchParams.get('sort'));
    }
    setProductsCopy(result);
  };

  const filterProductsHandler = (param) => {
    const searchParam = searchParams.get('sort');
    let data = param ? filter(products, param) : products;

    if (searchParam) {
      data = sort(data, searchParam);
    }

    setProductsCopy(data);
  };

  const sortProductsHandler = (param) => {
    if (param) {
      setProductsCopy(sort(productsCopy, param));
    } else {
      const data = searchParams.get('filter')
        ? filter(products, searchParams.get('filter'))
        : products;
      setProductsCopy(data);
    }
  };

  useEffect(() => {
    withCheckSearchParams(products);
  }, [searchParams]);

  const sortParam = [
    sortParamsInURL.priceUp,
    sortParamsInURL.priceDown,
    sortParamsInURL.titleUp,
    sortParamsInURL.titleDown,
  ];

  return (
    <div className='CardsSection'>
      <div className='CardsSection__sortFilterContainer'>
        <Filter
          paramArr={filterParam}
          cbFilterProducts={filterProductsHandler}
        />
        <Sort paramArr={sortParam} cbSortProducts={sortProductsHandler} />
      </div>
      {workMode === 0 && (
        <button
          type='button'
          className='CardsSection__workModeButton'
          onClick={() => setWorkMode(1)}
        >
          Page-by-page view
        </button>
      )}
      <div className='CardsSection__cards'>
        {workMode === 1 && <Pagination products={productsCopy} limit={8} />}
        {workMode === 0 && <CardList products={productsCopy} />}
      </div>
      {workMode === 1 && (
        <button
          type='button'
          className='CardsSection__workModeButton'
          onClick={() => setWorkMode(0)}
        >
          The full list view
        </button>
      )}
    </div>
  );
};
