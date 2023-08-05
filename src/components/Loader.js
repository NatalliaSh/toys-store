import React from 'react';
import './Loader.scss';

export const Loader = () => {
  return (
    <div className='Loader'>
      <div className='spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
