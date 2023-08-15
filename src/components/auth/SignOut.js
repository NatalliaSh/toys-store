import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { removeUser } from '../../redux/userSlice';
import { LogOutIcon } from '../svg/logIcons';

export const SignOut = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch(console.error);
  };

  return <LogOutIcon onClick={handleClick} />;
};
