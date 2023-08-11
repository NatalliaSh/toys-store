import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { sortParamsInURL, sortNamesOfButton } from '../CONST.js';
import { SortIcon } from './svg/SortFilter.js';
import { getAllQueryParams } from '../functions/getAllQueryParams.js';
import { CheckedIcon } from './svg/SortFilter';

import './Sort.scss';

export const Sort = ({ paramArr, cbSortProducts }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isActive, setActive] = useState(Boolean(searchParams.get('sort')));
  const [isShowSortMenu, setShowSortMenu] = useState(false);
  const [checkedValue, setCheckedValue] = useState(searchParams.get('sort'));
  const [sortButtonText, setSortButtonText] = useState(
    searchParams.get('sort')
      ? sortNamesOfButton[searchParams.get('sort')]
      : 'Sorting',
  );

  const sortingHandler = ({ target }) => {
    setSearchParams({ ...getAllQueryParams(searchParams), sort: target.value });
    cbSortProducts(target.value);
    setCheckedValue(target.value);
    setSortButtonText(target.labels[0].innerText);
    setActive(true);
    setShowSortMenu(false);
  };

  const resetSorting = (e) => {
    e.stopPropagation();
    setSearchParams({ ...getAllQueryParams(searchParams), sort: '' });
    cbSortProducts('');
    setActive(false);
    setCheckedValue(null);
    setSortButtonText('Sorting');
    setShowSortMenu(false);
  };

  useEffect(() => {
    setActive(Boolean(searchParams.get('sort')));
    setCheckedValue(searchParams.get('sort'));
    setSortButtonText(
      searchParams.get('sort')
        ? sortNamesOfButton[searchParams.get('sort')]
        : 'Sorting',
    );
    setShowSortMenu(false);
  }, [searchParams]);

  return (
    <div className='Sort'>
      <button
        type='button'
        className={
          isActive
            ? 'Sort__mainButton Sort__mainButton_active text'
            : 'Sort__mainButton text'
        }
        onClick={() => setShowSortMenu(true)}
      >
        <SortIcon />
        <span>{sortButtonText}</span>
        {isActive && (
          <span
            className='Sort__canceler text text_semiBold'
            onClick={resetSorting}
          >
            X
          </span>
        )}
      </button>
      {isShowSortMenu && (
        <div className='Sort__sortMenu sortMenu'>
          <button
            type='button'
            className='sortMenu__closer text text_semiBold'
            onClick={() => setShowSortMenu(false)}
          >
            Х
          </button>
          <div className='sortMenu__list'>
            {paramArr.map((param) => {
              return (
                <label
                  key={param}
                  className={
                    checkedValue === sortParamsInURL[param] ? '_active' : ''
                  }
                >
                  <CheckedIcon />
                  <input
                    type='radio'
                    name='sort'
                    value={sortParamsInURL[param]}
                    checked={checkedValue === sortParamsInURL[param]}
                    onChange={sortingHandler}
                  />
                  {sortNamesOfButton[param]}
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
