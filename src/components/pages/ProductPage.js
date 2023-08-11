import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { specificProductDataLoad } from '../../redux/productsDataLoad.js';
import { Loader } from '../Loader';
import { ProductCardFull } from '../cards/ProductCardFull.js';
import './ProductPage.scss';

export const ProductPage = () => {
  window.scrollTo(0, 0);

  const params = useParams();
  const id = params.productId;

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [productData, setProductData] = useState(
    products.data.all ? products.data.all.find((el) => el.id === id) : null,
  );

  console.log(productData);

  const load = (id, setState) => {
    dispatch((dispatch) => specificProductDataLoad(dispatch, id, setState));
  };

  useEffect(() => {
    if (!productData) {
      load(id, setProductData);
      console.log('dataLoad');
    }
  }, []);

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
      </div>
    </main>
  );
};
