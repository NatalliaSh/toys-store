import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToBasketIcon } from '../svg/BasketIcon';
import { updateData, deleteDataElement } from '../../redux/basketSlice';

import './AddToBasketButton.scss';

export const AddToBasketButton = React.forwardRef(
  ({ productData, cbError, cbResetActive }, ref) => {
    const basket = useSelector((state) => state.basket);
    const dispatch = useDispatch();

    const withValueCheck = (value) => {
      if (value > productData.available_amount) {
        cbError(
          `The maximum available quantity is ${productData.available_amount}`,
        );
        return new Error();
      } else if (value < 0) {
        cbError('Invalid data format. \n Number must be positive');
        return new Error();
      }
    };

    const addToBasket = () => {
      const value = Number(ref.current.value);
      console.log(value);
      if (withValueCheck(value)) return;

      if (value <= productData.available_amount && value > 0) {
        dispatch(
          updateData({
            productID: productData.id,
            amount: value,
          }),
        );
      } else if (value <= productData.available_amount && value === 0) {
        dispatch(deleteDataElement(productData.id));
      }

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
