import React from 'react';
import { NavLink } from 'react-router-dom';
import { BuyButton } from '../buttons/BuyButton';

import './ProductCardShort.scss';

export const ProductCardShort = ({ productData }) => {
  return (
    <div className='ProductCardShort'>
      <div className='ProductCardShort__image'>
        <NavLink to={'/product/' + productData.id}>
          <img src={'/image/products/' + productData.main_image}></img>
        </NavLink>
      </div>
      <div className='ProductCardShort__description'>
        <NavLink to={'/product/' + productData.id}>
          <h6>{productData.title}</h6>
        </NavLink>
        <BuyButton productData={productData}></BuyButton>
      </div>
    </div>
  );
};
