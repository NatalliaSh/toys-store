import React from 'react';
import { BuyButton } from '../buttons/BuyButton';
import { ImageBlock } from '../ImageBlock';
import { Price } from '../Price';

import './ProductCardFull.scss';

export const ProductCardFull = ({ productData }) => {
  return (
    <section className='ProductCardFull'>
      <div className='ProductCardFull__imageBlock'>
        <ImageBlock
          key={productData.id}
          mainImg={productData.main_image}
          additionalImg={productData.images}
        />
      </div>
      <div className='ProductCardFull__descriptionContainer'>
        <div className='ProductCardFull__description description'>
          <h4 className='description__title text_bold'>{productData.title} </h4>
          <div className='description__description'>
            {productData.description}{' '}
          </div>
        </div>
        <Price price={productData.price} />{' '}
        <BuyButton
          key={productData.id}
          productData={productData}
          title={'Add to basket'}
        ></BuyButton>
      </div>
    </section>
  );
};
