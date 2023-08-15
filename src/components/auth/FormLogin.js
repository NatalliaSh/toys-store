import React, { useRef, useState } from 'react';

import './FormLogin.scss';

export const FormLogin = ({ title, handleClick, isSignUp, cancelCb }) => {
  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const passRef = useRef(null);

  return (
    <form className='FormLogin'>
      {isSignUp && (
        <label className='text text_semiBold'>
          User name:
          <input
            type='text'
            defaultValue={''}
            ref={nameRef}
            placeholder='Enter your name'
          />
        </label>
      )}
      <label className='text text_semiBold'>
        E-mail:
        <input
          type='email'
          defaultValue={''}
          ref={mailRef}
          placeholder='Enter email'
          autoComplete='email'
        />
      </label>
      <label className='text text_semiBold'>
        Password:
        <input
          type='password'
          defaultValue={''}
          ref={passRef}
          placeholder='Enter password'
          autoComplete='current-password'
        />
      </label>
      <div className='FormLogin__buttons'>
        <button
          type='button'
          className='FormLogin__buttons_main text  text_semiBold'
          onClick={() => {
            if (nameRef.current) {
              handleClick(
                mailRef.current.value,
                passRef.current.value,
                nameRef.current.value,
              );
            } else {
              handleClick(mailRef.current.value, passRef.current.value);
            }
          }}
        >
          {title}
        </button>
        <button type='button' className='text text_semiBold' onClick={cancelCb}>
          Cancel
        </button>
      </div>
    </form>
  );
};
