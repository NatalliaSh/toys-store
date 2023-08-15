import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { LoginModalWindow } from './LoginModalWindow';
import { LogInIcon } from '../svg/logIcons';
import { SignOut } from './SignOut';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';

import './Authentication.scss';

export const Authentication = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const isUser = Boolean(user.id);

  const [isActive, setActive] = useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          userName: user.displayName,
        }),
      );
    } else {
      return null;
    }
  });

  return (
    <div className='Authentication'>
      {!isActive && isUser && (
        <div className='Authentication__signOut'>
          <SignOut />
          {user.userName && (
            <span className='text_white text_semiBold text_m'>
              {user.userName.charAt(0)}
            </span>
          )}
        </div>
      )}
      {!isActive && !isUser && (
        <div className='Authentication__signIn'>
          <LogInIcon onClick={() => setActive(true)} />
        </div>
      )}
      {isActive && <LoginModalWindow cbModalCloser={() => setActive(false)} />}
    </div>
  );
};
