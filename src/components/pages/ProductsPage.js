import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsDataLoad } from '../../redux/productsDataLoad.js';
import { Loader } from '../Loader';
import { ProductCardShort } from '../cards/ProductCardShort.js';

import './ProductsPage.scss';

export const ProductsPage = () => {
  window.scrollTo(0, 0);

  const params = useParams();
  const category = params.category;

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const load = (category) => {
    dispatch((dispatch) => productsDataLoad(dispatch, category));
  };

  useEffect(() => {
    if (!products.data[category]) {
      load(category);
    }
  }, []);

  return (
    <main className='ProductsPage'>
      <div className='ProductsPage__contentWrapper'>
        <section className='ProductsPage__cards'>
          {products.dataLoadState === 0 && 'no data'}
          {products.dataLoadState === 1 && <Loader />}
          {products.dataLoadState === 3 && 'error: ' + products.dataLoadError}
          {products.dataLoadState === 2 &&
            products.data[category] &&
            products.data[category].map((el) => {
              return <ProductCardShort key={el.id} productData={el} />;
            })}
        </section>
      </div>
    </main>
  );
};
