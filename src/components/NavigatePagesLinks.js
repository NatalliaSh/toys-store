import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigatePagesLinks.scss';

export const NavigatePagesLinks = ({ isHeader }) => {
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
      <NavLink to='/catalog' className={getLinkClass}>
        Catalog
      </NavLink>
      <NavLink to='/delivery' className={getLinkClass}>
        Delivery
      </NavLink>
      <NavLink to='/about' className={getLinkClass}>
        About
      </NavLink>
      <NavLink to='/contacts' className={getLinkClass}>
        Contacts
      </NavLink>
    </>
  );
};
