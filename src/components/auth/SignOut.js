import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { removeUser } from '../../redux/userSlice';
import { LogOutIcon } from '../svg/logIcons';
import { getSynchronizedWithLSBasketData } from '../../functions/localStorage';
import { setBasket, setMochID } from '../../redux/basketSlice';

export const SignOut = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        const basketFromLS = getSynchronizedWithLSBasketData();
        dispatch(setBasket(basketFromLS));
        dispatch(setMochID(null));
      })
      .catch(console.error);
  };

  return <LogOutIcon onClick={handleClick} />;
};
