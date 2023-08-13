import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BasketIcon } from '../svg/BasketIcon';

import './BasketHeaderCard.scss';

export const BasketHeaderCard = ({ cbClickLinkHandler }) => {
  const basket = useSelector((state) => state.basket);
  const count = Object.keys(basket.data).length;

  return (
    <NavLink to='/basket' className='Basket' onClick={cbClickLinkHandler}>
      <BasketIcon />
      <span className='text_s text_white'>{count}</span>
    </NavLink>
  );
};
