import React from 'react';
import { useDispatch } from 'react-redux';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { FormLogin } from './FormLogin';
import { setUser } from '../../redux/userSlice';

export const SignUp = ({ cancelCb, errorCb, successСb }) => {
  const dispatch = useDispatch();

  const handleRegister = (email, password, displayName) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password, displayName)
      .then(({ user }) => {
        updateProfile(auth.currentUser, { displayName });
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            userName: user.displayName,
          }),
        );
        successСb("You've successfully sing up and logged in to your account");
      })
      .catch((error) => {
        errorCb(
          'Error: ' +
            error.message
              .match(/(?:auth\/)(\D*)(\))/)[1]
              .split('-')
              .join(' '),
        );
        console.log(error);
      });
  };

  return (
    <FormLogin
      title='Register'
      handleClick={handleRegister}
      cancelCb={cancelCb}
      isSignUp={true}
    />
  );
};
