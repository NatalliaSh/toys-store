import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToBasketIcon } from './svg/BasketIcon';
import { updateData, deleteDataElement } from '../redux/basketSlice';

import './BuyButton.scss';

export const BuyButton = ({ productData }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  const [isActive, setActive] = useState(
    Boolean(
      basket.data[productData.id] && basket.data[productData.id].amount > 0,
    ),
  );
  const [inputValue, setInputValue] = useState(
    basket.data[productData.id] ? basket.data[productData.id].amount : 1,
  );
  const [error, setError] = useState('');

  const addToBasket = () => {
    if (inputValue <= productData.available_amount && inputValue > 0) {
      dispatch(
        updateData({
          productID: productData.id,
          data: { prodData: productData, amount: inputValue },
        }),
      );
    } else if (inputValue <= productData.available_amount && inputValue === 0) {
      dispatch(deleteDataElement(productData.id));
    } else if (inputValue >= productData.available_amount) {
      setError(
        `The maximum available quantity is ${productData.available_amount}`,
      );
    }

    if (inputValue === 0) {
      setActive(false);
    } else if (inputValue < 0) {
      setError('Invalid data format. \n Number must be positive');
    }

    console.log('addToBasket');
  };

  const resetError = () => setError('');

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
            <div className='addToBasketSection__numberInput numberInput'>
              <button
                type='button'
                className='numberInput__minusButton'
                onClick={() => {
                  setInputValue(inputValue >= 1 ? Number(inputValue) - 1 : 0);
                  resetError();
                }}
              ></button>
              <input
                type='number'
                min='0'
                max={productData.available_amount}
                className='numberInput__input text text_m'
                value={inputValue}
                onChange={({ target: { value } }) => {
                  setInputValue(Number(value));
                  resetError();
                }}
              />
              <button
                type='button'
                className='numberInput__plusButton'
                onClick={() => {
                  setInputValue(
                    inputValue < productData.available_amount
                      ? Number(inputValue) + 1
                      : productData.available_amount,
                  );
                  resetError();
                }}
              ></button>
            </div>
            <button
              type='button'
              className='addToBasketSection__addToBasketButton'
              onClick={addToBasket}
            >
              <AddToBasketIcon />
              {basket.data[productData.id] &&
                basket.data[productData.id].amount > 0 && (
                  <span className='text_s text_white'>
                    {basket.data[productData.id].amount}
                  </span>
                )}
            </button>
          </div>
          {error && <div className='BuyButton__error text_red'>{error}</div>}
        </>
      )}
    </div>
  );
};
