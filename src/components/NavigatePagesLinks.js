import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigatePagesLinks.scss';

export const NavigatePagesLinks = ({ isHeader, cbClickLinkHandler }) => {
  function getLinkClass(obj) {
    let className = 'NavigatePagesLinks';
    if (obj.isActive) className += ' NavigatePagesLinks_active';
    return className;
  }

  return (
    <>
      <NavLink
        to='/'
        end
        className={isHeader ? 'NavigatePagesLinks_label' : getLinkClass}
      >
        {isHeader && <h4>ToyStore</h4>}
        {!isHeader && 'Home'}
      </NavLink>
      <NavLink
        to='/catalog'
        className={getLinkClass}
        onClick={cbClickLinkHandler}
      >
        Catalog
      </NavLink>
      <NavLink
        to='/delivery'
        className={getLinkClass}
        onClick={cbClickLinkHandler}
      >
        Delivery
      </NavLink>
      <NavLink
        to='/about'
        className={getLinkClass}
        onClick={cbClickLinkHandler}
      >
        About
      </NavLink>
      <NavLink
        to='/contacts'
        className={getLinkClass}
        onClick={cbClickLinkHandler}
      >
        Contacts
      </NavLink>
    </>
  );
};
