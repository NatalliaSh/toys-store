import React from 'react';
import { NavigatePagesLinks } from './NavigatePagesLinks';
import { TwitIcon, FBIcon, InstaIcon } from './svg/socialMediaIcons';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer__container text_white'>
        <h5>ToyStore</h5>
        <nav className='Footer__navigation'>
          <NavigatePagesLinks isHeader={false} />
        </nav>
        <div className='Footer__socialLinks'>
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
    </footer>
  );
};
