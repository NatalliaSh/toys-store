import React from 'react';
import { NavLink } from 'react-router-dom';
import { BasketIcon } from '../svg/BasketIcon';

import './Basket.scss';

export const Basket = ({ isActive, cbClickLinkHandler }) => {
  const count = 0; //потом взять это число из state basket

  return (
    !isActive && (
      <NavLink to='/basket' className='Basket' onClick={cbClickLinkHandler}>
        <BasketIcon />
        <span className='text_s text_white'>{count}</span>
      </NavLink>
    )
  );
};
