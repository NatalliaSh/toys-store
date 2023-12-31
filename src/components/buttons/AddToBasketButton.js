import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToBasketIcon } from '../svg/BasketIcon';
import { updateData, deleteDataElement } from '../../redux/basketSlice';
import { withValueCheck } from '../../functions/withValueCheck';
import { basketUpdate } from '../../functions/basketUpdate';

import './AddToBasketButton.scss';

export const AddToBasketButton = React.forwardRef(
  ({ productData, cbError, cbResetActive }, ref) => {
    const basket = useSelector((state) => state.basket);

    const dispatch = useDispatch();

    const addToBasket = () => {
      const value = Number(ref.current.value);

      if (withValueCheck(value, productData.available_amount, cbError)) return;

      basketUpdate(
        dispatch,
        productData.id,
        value,
        productData.available_amount,
        basket.mochID,
        basket.data,
      );

      if (value === 0 && cbResetActive) {
        cbResetActive();
      }
    };

    return (
      <button type='button' className='AddToBasketButton' onClick={addToBasket}>
        <AddToBasketIcon />
        {basket.data[productData.id] > 0 && (
          <span className='text_s text_white'>
            {basket.data[productData.id]}
          </span>
        )}
      </button>
    );
  },
);
