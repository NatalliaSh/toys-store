import React from 'react';
import { NavLink } from 'react-router-dom';
import { BuyButton } from './BuyButton';

import './ProductCardShort.scss';

export const ProductCardShort = ({ productData }) => {
  return (
    <div className='ProductCardShort'>
      <NavLink
        to={'/product/' + productData.id}
        className='ProductCardShort__presentation'
      >
        <img src={'/image/products/' + productData.main_image}></img>
        <h6>{productData.title}</h6>
      </NavLink>
      <BuyButton productData={productData}></BuyButton>
    </div>
  );
};
