import React from 'react';

import './Price.scss';

export const Price = ({ price }) => {
  const discont = price.discounted
    ? 100 - (price.current_price * 100) / price.before_price
    : null;

  return (
    <div className='Price'>
      {price.discounted && (
        <div className='Price_before text_semiBold text'>
          <span>
            {`${price.symbol} ${price.before_price} ${price.currency}`}
          </span>
          <span className='text_green'> -{discont}&#37;</span>
        </div>
      )}
      <div className='Price_current text_semiBold text_xl'>
        {`${price.symbol} ${price.current_price} ${price.currency}`}
      </div>
    </div>
  );
};
