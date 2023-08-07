import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainPage } from '../pages/MainPage';
/*import { PageCatalog } from '../pages/PageFilmDetails';
import { PageProducts } from '../pages/PageFilmDetails';
import { PageProduct } from '../pages/PageFilmDetails';
import { PageBasket } from '../pages/PageFilmDetails';
*/

/*
import { PageDelivery } from '../pages/PageFilmDetails';
import { PagePageAbout } from '../pages/PageFilmDetails';
import { PageContacts } from '../pages/PageFilmDetails';
*/

export const PagesRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      {/*<Route path='/catalog' element={<PageCatalog />} />
      <Route path='/products/:category' element={<PageProducts />} />
      <Route path='/product/:prid' element={<PageProduct />} />
      <Route path='/basket' element={<PageBasket />} />*/}

      {/*<Route path='/delivery' element={<PageDelivery />} />
      <Route path='/about' element={<PageAbout />} />
  <Route path='/contacts' element={<PageContacts />} />*/}
    </Routes>
  );
};
