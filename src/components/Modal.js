import React from 'react';
import './Modal.scss';

export const Modal = ({ children, cbModalCloser }) => {
  return (
    <div className='Modal'>
      <button
        className='Modal__closer text text_bold text_white'
        onClick={cbModalCloser}
      >
        X
      </button>
      <div className='Modal__content'>{children}</div>
    </div>
  );
};
