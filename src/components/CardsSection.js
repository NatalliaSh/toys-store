import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Sort } from './Sort.js';
import { Filter } from './Filter.js';
import { filterParam, sortParamsInURL } from '../CONST.js';
import { sort } from '../functions/sort.js';
import { filter } from '../functions/filter.js';
import { Pagination } from './Pagination.js';
import { CardList } from './CardList.js';
import { getAllQueryParams } from '../functions/getAllQueryParams.js';

import './CardsSection.scss';

export const CardsSection = ({ products }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  //made a local state with datacopy in order to sort or filter it
  const [productsCopy, setProductsCopy] = useState(products);
  const [workMode, setWorkMode] = useState(1); //0-fullList, 1-with pagination

  const withCheckSearchParams = (products) => {
    //sort_filter params check
    let result = products;

    if (searchParams.get('filter')) {
      result = filter(result, searchParams.get('filter'));
    }
    if (searchParams.get('sort')) {
      result = sort(result, searchParams.get('sort'));
    }
    setProductsCopy(result);

    //pagingParams check
    if (!searchParams.get('paging')) {
      setSearchParams(
        workMode === 1
          ? { ...getAllQueryParams(searchParams), paging: 'on' }
          : { ...getAllQueryParams(searchParams), paging: 'off' },
      );
    } else if (searchParams.get('paging') === 'off' && workMode === 1) {
      setWorkMode(0);
    } else if (searchParams.get('paging') === 'on' && workMode === 0) {
      setWorkMode(1);
    }
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

  const workModeButtonHandler = ({ target }) => {
    const newWorkMode = Number(target.dataset.switchto);
    setWorkMode(newWorkMode);
    setSearchParams(
      newWorkMode === 1
        ? { ...getAllQueryParams(searchParams), paging: 'on' }
        : { ...getAllQueryParams(searchParams), paging: 'off', page: '1' },
    );
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
          data-switchto={1}
          onClick={workModeButtonHandler}
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
          data-switchto={0}
          onClick={workModeButtonHandler}
        >
          The full list view
        </button>
      )}
    </div>
  );
};
