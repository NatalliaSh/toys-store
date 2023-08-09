import React from 'react';
import { CatalogCard } from '../cards/CatalogCard.js';
import { category } from '../../CONST.js';

import './CatalogPage.scss';

export const CatalogPage = () => {
  window.scrollTo(0, 0);
  const categories = [
    category.stuffed,
    category.wooden,
    category.puzzle,
    category.educational,
    category.interactive,
    category.all,
  ];

  const cards = categories.map((category) => {
    return <CatalogCard key={category} categoryName={category} />;
  });

  return (
    <main className='CatalogPage'>
      <div className='CatalogPage__contentWrapper'>
        <section className='CatalogPage__cards'>{cards}</section>
      </div>
    </main>
  );
};
