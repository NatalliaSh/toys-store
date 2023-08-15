import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FormLogin } from './FormLogin';
import { setUser } from '../../redux/userSlice';

export const SignIn = ({ cancelCb, errorCb, successСb }) => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            userName: user.displayName,
          }),
        );
        successСb("You've successfully logged in to your account");
      })
      .catch((error) => {
        errorCb('Invalid email or password');
        console.log(error);
      });
  };

  return (
    <FormLogin title='Sign in' handleClick={handleLogin} cancelCb={cancelCb} />
  );
};
