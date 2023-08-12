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
      className='PaginateButton__nextPrev'
      onClick={clickButtonHandler}
      disabled={isDisabled}
    >
      {context}
    </button>
  ) : isNext ? (
    <button
      type='button'
      className='PaginateButton__nextPrev'
      onClick={clickButtonHandler}
      disabled={isDisabled}
    >
      {context}
    </button>
  ) : (
    <button
      type='button'
      className='PaginateButton__pageNumb'
      onClick={clickButtonHandler}
      disabled={isDisabled}
    >
      {context}
    </button>
  );

  return button;
};
