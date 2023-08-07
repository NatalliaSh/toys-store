import React from 'react';
import { NavLink } from 'react-router-dom';
import { catalogImageSRC, categoryTitle } from '../CONST';

import './CatalogCard.scss';

export const CatalogCard = ({ categoryName }) => {
  return (
    <div className='CatalogCard'>
      <div className='CatalogCard__image'>
        <img src={catalogImageSRC[categoryName]}></img>
      </div>
      <div className='CatalogCard__content'>
        <h4 className='CatalogCard__content text_white'>
          {categoryTitle[categoryName]}
        </h4>
        <NavLink to={'/products/' + categoryName} className='text_bold'>
          Shop Now
        </NavLink>
      </div>
    </div>
  );
};
