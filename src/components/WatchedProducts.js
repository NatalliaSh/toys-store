import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { getDataFromLS } from '../functions/localStorage';
import { LSConst } from '../CONST';
import { ProductCardShort } from './cards/ProductCardShort.js';
import { Slider } from './Slider.js';

import './WatchedProducts.scss';

export const WatchedProducts = ({ opendProdID }) => {
  const products = useSelector((state) => state.products);
  const swiperRef = useRef(null);
  if (!products.data.all) return;

  const dataID = getDataFromLS(LSConst.watchedProducts);

  const filteredDataID = dataID
    ? dataID.filter((id) => id !== opendProdID)
    : null;

  const productsData = filteredDataID
    ? filteredDataID.map((id) => products.data.all.find((el) => el.id === id))
    : null;

  return (
    productsData &&
    productsData.length !== 0 && (
      <div className='WatchedProducts'>
        <h5 className='WatchedProducts__title'>You've recently watched</h5>
        <Slider
          ref={swiperRef}
          dependencies={productsData}
          isScrollBarDown={true}
          settings={{ centeredSlides: 'false' }}
        >
          {productsData.map((el) => (
            <swiper-slide key={el.id}>
              <ProductCardShort productData={el} />
            </swiper-slide>
          ))}
        </Slider>
      </div>
    )
  );
};
