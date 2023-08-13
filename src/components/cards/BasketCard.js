import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateData, deleteDataElement } from '../../redux/basketSlice';
import { InputNumberButtons } from '../buttons/InputNumberButtons';
import { NavLink } from 'react-router-dom';
import { withValueCheck } from '../../functions/withValueCheck';
import { DeleteIcon } from '../svg/DeleteIcon';

import './BasketCard.scss';

export const BasketCard = ({ productData, amount }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [error, setError] = useState('');
  const [isDeleted, setDeleted] = useState(false);

  const totalPrice =
    Math.round(amount * productData.price.current_price * 100) / 100;
  const errorSetter = (str) => setError(str);

  const changeInputHandler = (value) => {
    const inputValue =
      value || value === 0 ? value : Number(inputRef.current.value); //in order that work correctly if change input with input field, not with buttons

    if (withValueCheck(inputValue, productData.available_amount, errorSetter))
      return;

    if (inputValue <= productData.available_amount && inputValue > 0) {
      dispatch(
        updateData({
          productID: productData.id,
          amount: inputValue,
        }),
      );
    } else if (inputValue <= productData.available_amount && inputValue === 0) {
      setDeleted(true);
    }
    setError('');
  };

  useEffect(() => {
    let timeout;
    if (isDeleted) {
      timeout = setTimeout(() => {
        dispatch(deleteDataElement(productData.id));
        //setDeleted(false);
      }, 1200);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isDeleted]);

  return (
    <div className={isDeleted ? 'BasketCard BasketCard_deleted' : 'BasketCard'}>
      <div className='BasketCard__image'>
        <NavLink to={'/product/' + productData.id}>
          <img
            src={`/image/products/${productData.main_image}`}
            alt={productData.main_image}
          />
        </NavLink>
      </div>
      <div className='BasketCard__contextContainer'>
        <NavLink
          className='BasketCard__title'
          to={'/product/' + productData.id}
        >
          <h6>{productData.title}</h6>
        </NavLink>
        <div className='BasketCard__changeAmoutSection'>
          <InputNumberButtons
            ref={inputRef}
            value={amount}
            minValue={0}
            maxValue={productData.available_amount}
            cbChangeInputHandler={changeInputHandler}
          />
          <div className='totalPrice text_m text_semiBold'>
            {`${totalPrice} ${productData.price.currency}`}
          </div>
          <div className='BasketCard__deleteIcon'>
            <DeleteIcon
              onClick={() => {
                setDeleted(true);
              }}
            />
          </div>
        </div>
        {error && <div className='BasketCard__error text_red'>{error}</div>}
      </div>
    </div>
  );
};
