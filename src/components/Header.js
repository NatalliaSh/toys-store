import React from 'react';
import { NavigatePagesLinks } from './NavigatePagesLinks';
import { Basket } from './pages/Basket';
import { TwitIcon, FBIcon, InstaIcon } from './svg/socialMediaIcons';

import './Header.scss';

export const Header = () => {
  return (
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
          <nav className='Header__navigation'>
            <NavigatePagesLinks isHeader={true} />
          </nav>
          <Basket isActive={false} />
        </div>
      </div>
    </header>
  );
};
