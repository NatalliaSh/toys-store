import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { CatalogPage } from '../pages/CatalogPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductPage } from '../pages/ProductPage';
import { BasketPage } from '../pages/BasketPage';

/*
import { PageDelivery } from '../pages/PageFilmDetails';
import { PagePageAbout } from '../pages/PageFilmDetails';
import { PageContacts } from '../pages/PageFilmDetails';
*/

export const PagesRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/catalog' element={<CatalogPage />} />
      <Route path='/products/:category' element={<ProductsPage />} />
      <Route path='/product/:productId' element={<ProductPage />} />
      <Route path='/basket' element={<BasketPage />} />

      {/*<Route path='/delivery' element={<PageDelivery />} />
      <Route path='/about' element={<PageAbout />} />
  <Route path='/contacts' element={<PageContacts />} />*/}
    </Routes>
  );
};
