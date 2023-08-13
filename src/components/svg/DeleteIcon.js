import React from 'react';

export const DeleteIcon = (props) => (
  <svg
    fill='#000000'
    width='20px'
    height='20px'
    viewBox='0 0 24 24'
    id='delete-alt-2'
    data-name='Line Color'
    xmlns='http://www.w3.org/2000/svg'
    className='icon line-color'
    {...props}
  >
    <path
      id='secondary'
      d='M16,7V4a1,1,0,0,0-1-1H9A1,1,0,0,0,8,4V7m4,4v6'
      style={{
        fill: 'none',
        stroke: 'rgb(165, 201, 38)',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
      }}
    />
    <path
      id='primary'
      d='M4,7H20M17.07,20.07,18,7H6l.93,13.07a1,1,0,0,0,1,.93h8.14A1,1,0,0,0,17.07,20.07Z'
      style={{
        fill: 'none',
        stroke: 'rgb(0, 0, 0)',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
      }}
    />
  </svg>
);
