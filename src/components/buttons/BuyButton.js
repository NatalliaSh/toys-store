import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { InputNumberButtons } from './InputNumberButtons';
import { AddToBasketButton } from './AddToBasketButton';

import './BuyButton.scss';

export const BuyButton = ({ productData }) => {
  const basket = useSelector((state) => state.basket);
  const inputRef = useRef(null);

  const [isActive, setActive] = useState(
    Boolean(
      basket.data[productData.id] && basket.data[productData.id].amount > 0,
    ),
  );
  const [error, setError] = useState('');

  const errorSetter = (str) => setError(str);
  const resetError = () => setError('');
  const resetActive = () => setActive(false);

  return (
    <div className='BuyButton'>
      {!isActive && (
        <button
          type='button'
          className='BuyButton__priceButton text_white  text_m'
          onClick={() => setActive(true)}
        >{`${productData.price.symbol} ${productData.price.current_price} ${productData.price.currency}`}</button>
      )}
      {isActive && (
        <>
          <div className='BuyButton__addToBasketSection addToBasketSection'>
            <InputNumberButtons
              ref={inputRef}
              value={
                basket.data[productData.id]
                  ? basket.data[productData.id].amount
                  : 1
              }
              minValue={0}
              maxValue={productData.available_amount}
              cbChangeInputHandler={resetError}
            />
            <AddToBasketButton
              ref={inputRef}
              productData={productData}
              cbError={errorSetter}
              cbResetActive={resetActive}
            />
          </div>
          {error && <div className='BuyButton__error text_red'>{error}</div>}
        </>
      )}
    </div>
  );
};
