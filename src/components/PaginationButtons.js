import React from 'react';
import { PaginateButton } from './buttons/PaginateButton';

import './PaginationButtons.scss';

export const PaginationButtons = ({ pagesAmount, activePage, cb }) => {
  const active = Number(activePage);
  const numberButtPerPage = 7;

  const vissionButtons =
    pagesAmount <= numberButtPerPage
      ? [...Array(pagesAmount)].map((el, index) => {
          return { value: index + 1, key: index + 1 };
        })
      : active <= 4
      ? [...Array(numberButtPerPage)].map((el, index) => {
          if (index === numberButtPerPage - 2)
            return { value: '...', key: 'blind' + index };
          if (index === numberButtPerPage - 1)
            return { value: pagesAmount, key: pagesAmount };
          return { value: index + 1, key: index + 1 };
        })
      : active > pagesAmount - 4
      ? [...Array(numberButtPerPage)].map((el, index) => {
          if (index === 0) return { value: 1, key: 1 };
          if (index === 1) return { value: '...', key: 'blind' + index };
          return {
            value: pagesAmount - 6 + index,
            key: pagesAmount - 6 + index,
          };
        })
      : [...Array(numberButtPerPage)].map((el, index) => {
          if (index === 1 || index === numberButtPerPage - 2)
            return { value: '...', key: 'blind' + index };
          if (index === 0) return { value: 1, key: 1 };
          if (index === numberButtPerPage - 1)
            return { value: pagesAmount, key: pagesAmount };
          return { value: active - 3 + index, key: active - 3 + index };
        });

  return (
    <div className='PaginationButtons'>
      <PaginateButton
        key='prev'
        context='prev'
        isPrev={true}
        isDisabled={active === 1}
        cbClickButtonHandler={cb}
      />
      {vissionButtons.map((el) => {
        if (el.value === '...') {
          return (
            <button
              key={el.key}
              type='button'
              className='PaginationButtons__blind text text_semiBold'
              disabled={true}
            >
              {el.value}
            </button>
          );
        }
        return (
          <PaginateButton
            key={el.key}
            context={el.value}
            isDisabled={active === el.value}
            cbClickButtonHandler={cb}
          />
        );
      })}
      <PaginateButton
        key='next'
        context='next'
        isNext={true}
        isDisabled={active === pagesAmount}
        cbClickButtonHandler={cb}
      />
    </div>
  );
};
