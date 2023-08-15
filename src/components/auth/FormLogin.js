import React, { useState } from 'react';

import './FormLogin.scss';

export const FormLogin = ({ title, handleClick, isSignUp, cancelCb }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userName, setUserName] = useState('');

  return (
    <form className='FormLogin'>
      {isSignUp && (
        <label className='text text_semiBold'>
          User name:
          <input
            type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='Enter your name'
            autoComplete='username'
          />
        </label>
      )}
      <label className='text text_semiBold'>
        E-mail:
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter email'
          autoComplete='email'
        />
      </label>
      <label className='text text_semiBold'>
        Password:
        <input
          type='password'
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder='Enter password'
          autoComplete='current-password'
        />
      </label>
      <div className='FormLogin__buttons'>
        <button
          type='button'
          className='FormLogin__buttons_main text  text_semiBold'
          onClick={() => handleClick(email, pass, userName)}
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
