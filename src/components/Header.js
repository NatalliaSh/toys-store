import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavigatePagesLinks } from './NavigatePagesLinks';
import { Basket } from './pages/Basket';
import { TwitIcon, FBIcon, InstaIcon } from './svg/socialMediaIcons';

import './Header.scss';

export const Header = () => {
  const [isActive, setActive] = useState(false);

  const burgerClickHandler = () => {
    setActive(!isActive);
    document.body.classList.toggle('lock');
  };

  const clickLinkHandler = () => {
    setActive(false);
    document.body.classList.remove('lock');
  };

  return (
    <>
      <header className='Header'>
        <div className='Header__contactsWrapper'>
          <div className='Header__contactsContainer text_white'>
            <div className='Header__contacts'>
              <a href='tel:+12139745898' title='Call Us'>
                Call Us: +1 213 974-5898
              </a>
              <a href='mailto:toystore@template.com'>
                Email: toystore@template.com
              </a>
            </div>
            <div className='Header__socialLinks'>
              <a href='#' title='Visit'>
                <TwitIcon />
              </a>
              <a href='#' title='Visit'>
                <FBIcon />
              </a>
              <a href='#' title='Visit'>
                <InstaIcon />
              </a>
            </div>
          </div>
        </div>
        <div className='Header__menuWrapper'>
          <div className='Header__menuContainer'>
            <div
              className={
                isActive
                  ? 'Header__burger Header__burger_active'
                  : 'Header__burger'
              }
              onClick={burgerClickHandler}
            >
              <span className='Header__burger'></span>
            </div>
            <NavLink
              to='/'
              end
              className='Header__logo'
              onClick={clickLinkHandler}
            >
              <h5>ToyStore</h5>
            </NavLink>
            <nav
              className={
                isActive
                  ? 'Header__navigation Header__navigation_active'
                  : 'Header__navigation'
              }
            >
              <NavigatePagesLinks
                isHeader={true}
                cbClickLinkHandler={clickLinkHandler}
              />
            </nav>
            <Basket isActive={false} cbClickLinkHandler={clickLinkHandler} />
          </div>
        </div>
      </header>
      <div className='mobileOffset' />
    </>
  );
};
