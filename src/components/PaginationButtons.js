import React from 'react';
import { PaginateButton } from './buttons/PaginateButton';

export const PaginationButtons = ({ pagesAmount, activePage, cb }) => {
  const buttons = [];

  for (let i = 0; i <= pagesAmount + 1; i++) {
    if (i === 0) {
      buttons.push(
        <PaginateButton
          key={i}
          context='prev'
          isPrev={true}
          isDisabled={Number(activePage) === 1}
          cbClickButtonHandler={cb}
        />,
      );
    } else if (i === pagesAmount + 1) {
      buttons.push(
        <PaginateButton
          key={i}
          context='next'
          isNext={true}
          isDisabled={Number(activePage) === pagesAmount}
          cbClickButtonHandler={cb}
        />,
      );
    } else {
      buttons.push(
        <PaginateButton
          key={i}
          context={i}
          isDisabled={Number(activePage) === i}
          cbClickButtonHandler={cb}
        />,
      );
    }
  }

  return <div className='PaginationButtons'>{buttons}</div>;
};
