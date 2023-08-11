import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsDataLoad } from '../../redux/productsDataLoad.js';
import { Loader } from '../Loader';
import { ProductCardShort } from '../cards/ProductCardShort.js';
import { Sort } from '../Sort.js';
import { Filter } from '../Filter.js';
import { filterParam, sortParamsInURL } from '../../CONST.js';
import { sort } from '../../functions/sort';
import { filter } from '../../functions/filter.js';

import './ProductsPage.scss';

export const ProductsPage = () => {
  const params = useParams();
  const category = params.category;
  const [searchParams, setSearchParams] = useSearchParams();

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  //made a local state with datacopy in order to sort or filter it without dispatching actions in productsSlice
  const [productsCopy, setProductsCopy] = useState(products.data[category]);

  const withCheckSearchParams = (data) => {
    let result = data;
    console.log(result);
    if (searchParams.get('filter')) {
      result = filter(result, searchParams.get('filter'));
      console.log(searchParams.get('filter'));
    }
    if (searchParams.get('sort')) {
      result = sort(result, searchParams.get('sort'));
    }
    setProductsCopy(result);
  };

  const filterProductsHandler = (param) => {
    const searchParam = searchParams.get('sort');
    let data = param
      ? filter(products.data[category], param)
      : products.data[category];

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
        ? filter(products.data[category], searchParams.get('filter'))
        : products.data[category];
      setProductsCopy(data);
    }
  };

  const load = (category) => {
    dispatch(async (dispatch) => {
      const data = await productsDataLoad(dispatch, category);
      withCheckSearchParams(data);
    });
  };

  useEffect(() => {
    if (!products.data[category]) {
      load(category);
    }
  }, []);

  useEffect(() => {
    if (products.data[category]) {
      withCheckSearchParams(products.data[category]);
    }
  }, [searchParams]);

  const sortParam = [
    sortParamsInURL.priceUp,
    sortParamsInURL.priceDown,
    sortParamsInURL.titleUp,
    sortParamsInURL.titleDown,
  ];

  return (
    <main className='ProductsPage'>
      <div className='ProductsPage__contentWrapper'>
        <section className='ProductsPage__cardsContainer'>
          {products.dataLoadState === 0 && 'no data'}
          {products.dataLoadState === 1 && <Loader />}
          {products.dataLoadState === 3 && 'error: ' + products.dataLoadError}
          {products.dataLoadState === 2 && productsCopy && (
            <>
              <div className='ProductsPage__sortFilterContainer'>
                <Filter
                  paramArr={filterParam}
                  cbFilterProducts={filterProductsHandler}
                />
                <Sort
                  paramArr={sortParam}
                  cbSortProducts={sortProductsHandler}
                />
              </div>
              <div className='ProductsPage__cards'>
                {productsCopy.map((el) => {
                  return <ProductCardShort key={el.id} productData={el} />;
                })}
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
};
