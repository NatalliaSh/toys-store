import React, { useEffect, useState } from 'react';
import { Modal } from '../Modal';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

import './LoginModalWindow.scss';

export const LoginModalWindow = ({ cbModalCloser }) => {
  const [isRegister, setRegister] = useState(false);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const errorHandler = (message) => {
    setMessage(message);
    setError(true);
  };

  const successHandler = (message) => {
    setMessage(message);
    setSuccess(true);
  };

  const messageCloserHandler = () => {
    if (isSuccess) {
      cbModalCloser();
    } else {
      setError(false);
    }
    setMessage('');
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (isSuccess) {
        cbModalCloser();
      }
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [isSuccess]);

  return (
    <Modal cbModalCloser={cbModalCloser}>
      {!message && (
        <div className='LoginModalWindow'>
          <div className='LoginModalWindow__changeModeButton'>
            <button
              type='button'
              className={
                !isRegister
                  ? 'changeModeButton changeModeButton_active'
                  : 'changeModeButton'
              }
              onClick={() => setRegister(false)}
            >
              Log in
            </button>
            <button
              type='button'
              className={
                isRegister
                  ? 'changeModeButton changeModeButton_active'
                  : 'changeModeButton'
              }
              onClick={() => setRegister(true)}
            >
              Sign up
            </button>
          </div>
          {!isRegister && (
            <SignIn
              cancelCb={cbModalCloser}
              errorCb={errorHandler}
              successСb={successHandler}
            />
          )}
          {isRegister && (
            <SignUp
              cancelCb={cbModalCloser}
              errorCb={errorHandler}
              successСb={successHandler}
            />
          )}
        </div>
      )}
      {message && (
        <div
          className={
            isError
              ? 'LoginModalWindow LoginModalWindow__message text_red'
              : 'LoginModalWindow LoginModalWindow__message'
          }
        >
          <span
            className='LoginModalWindow__messageCloser text_semiBold'
            onClick={messageCloserHandler}
          >
            X
          </span>
          {message}
        </div>
      )}
    </Modal>
  );
};
