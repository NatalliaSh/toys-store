import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../Loader';
import { productsDataLoad } from '../../redux/productsDataLoad.js';
import { ProductCardFull } from '../cards/ProductCardFull.js';
import { category } from '../../CONST';
import { addProductToLSWatchedProducts } from '../../functions/localStorage';
import { WatchedProducts } from '../WatchedProducts';

import './ProductPage.scss';

export const ProductPage = () => {
  const params = useParams();
  const id = params.productId;

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [productData, setProductData] = useState(
    products.data[category.all]
      ? products.data[category.all].find((el) => el.id === id)
      : null,
  );

  const load = (category) => {
    dispatch(async (dispatch) => {
      const data = await productsDataLoad(dispatch, category);
      setProductData(data.find((el) => el.id === id));
    });
  };

  useEffect(() => {
    if (!products.data[category.all]) {
      load(category.all);
    }
  }, []);

  useEffect(() => {
    if (productData) {
      addProductToLSWatchedProducts(productData.id);
    }
  }, [productData]);

  useEffect(() => {
    const data = products.data[category.all]
      ? products.data[category.all].find((el) => el.id === id)
      : null;
    if (data !== productData) {
      setProductData(data);
    }
  }, [id]);

  return (
    <main className='ProductPage'>
      <div className='ProductPage__contentWrapper'>
        <section className='ProductPage__card'>
          {products.dataLoadState === 0 && 'no data'}
          {products.dataLoadState === 1 && <Loader />}
          {products.dataLoadState === 3 && 'error: ' + products.dataLoadError}
          {products.dataLoadState === 2 && productData && (
            <ProductCardFull productData={productData} />
          )}
        </section>
        <section className='ProductPage__watchedProducts'>
          {products.data[category.all] && <WatchedProducts opendProdID={id} />}
        </section>
      </div>
    </main>
  );
};
