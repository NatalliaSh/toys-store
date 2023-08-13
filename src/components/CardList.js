import React from 'react';
import { ProductCardShort } from './cards/ProductCardShort.js';

import './CardList.scss';

export const CardList = ({ products }) => {
  return (
    <div className='CardList'>
      {products.map((el) => {
        return <ProductCardShort key={el.id} productData={el} />;
      })}
    </div>
  );
};
