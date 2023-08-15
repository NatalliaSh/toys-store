import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllQueryParams } from '../functions/getAllQueryParams';

import './Filter.scss';

export const Filter = ({ paramArr, cbFilterProducts }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState(searchParams.get('filter'));

  const filterHandler = (param) => {
    setSearchParams({ ...getAllQueryParams(searchParams), filter: param });
    cbFilterProducts(param);
    setActive(param);
  };

  const resetFilter = (e) => {
    e.stopPropagation();
    setSearchParams({ ...getAllQueryParams(searchParams), filter: '' });
    setActive('');
    cbFilterProducts('');
  };

  useEffect(() => {
    setActive(searchParams.get('filter'));
  }, [searchParams]);

  return (
    <div className='Filter'>
      {paramArr.map((param) => {
        return (
          <button
            key={param}
            type='button'
            className={
              active === param
                ? 'Filter__button Filter__button_active text'
                : 'Filter__button text'
            }
            onClick={() => filterHandler(param)}
          >
            {param.split('_').join(' ').firstLetterToUppercase()}
            {active === param && (
              <span className='Filter__canceler' onClick={resetFilter}>
                X
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
