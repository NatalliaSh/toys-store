import React from 'react';
import './PaginateButton.scss';

export const PaginateButton = ({
  context,
  isPrev,
  isNext,
  isDisabled,
  cbClickButtonHandler,
}) => {
  const clickButtonHandler = (e) => {
    cbClickButtonHandler(e);
  };

  const button = isPrev ? (
    <button
      type='button'
      className='PaginateButton__next_prev'
      onClick={clickButtonHandler}
      disabled={isDisabled}
    >
      {context}
    </button>
  ) : isNext ? (
    <button
      type='button'
      className='PaginateButton__next_prev'
      onClick={clickButtonHandler}
      disabled={isDisabled}
    >
      {context}
    </button>
  ) : (
    <button
      type='button'
      className='PaginateButton__page_numb'
      onClick={clickButtonHandler}
      disabled={isDisabled}
    >
      {context}
    </button>
  );

  return button;
};
