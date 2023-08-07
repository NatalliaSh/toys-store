import React, { useEffect, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsDataLoad } from '../../redux/productsDataLoad.js';
import { Loader } from '../Loader';
import { CatalogCard } from '../CatalogCard.js';
import { ProductCardShort } from '../ProductCardShort.js';
import { category } from '../../CONST.js';

import './MainPage.scss';

export const MainPage = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const load = (category) => {
    dispatch((dispatch) => productsDataLoad(dispatch, category));
  };

  useEffect(() => {
    if (!products.dataByCategory.bestseller) {
      load(category.bestseller);
    }
  }, []);

  const stuffedBestseller = useMemo(() => {
    if (products.dataByCategory.bestseller) {
      const stuffed = products.dataByCategory.bestseller.filter(
        (product) => product.stuffed,
      );

      return stuffed.map((el) => (
        <ProductCardShort key={el.id} productData={el} />
      ));
    }
  }, [products.dataByCategory.bestseller]);

  const woodenBestseller = useMemo(() => {
    if (products.dataByCategory.bestseller) {
      const wooden = products.dataByCategory.bestseller.filter(
        (product) => product.wooden,
      );

      return wooden.map((el) => (
        <ProductCardShort key={el.id} productData={el} />
      ));
    }
  }, [products.dataByCategory.bestseller]);

  return (
    <main className='MainPage'>
      <section className='MainPage__mainImage'>
        <img src='/image/mainPage/IMAGEmainimg.jpg' />
      </section>
      <div className='MainPage__contentContainer'>
        <section className='MainPage__catalogCards'>
          <CatalogCard categoryName={category.stuffed} />
          <CatalogCard categoryName={category.wooden} />
        </section>
        {products.dataLoadState === 0 && 'no data'}
        {products.dataLoadState === 1 && <Loader />}
        {products.dataLoadState === 3 && 'error: ' + products.dataLoadError}
        {products.dataLoadState === 2 && (
          <>
            <section className='MainPage__bestSellerItems bestSellerItems'>
              <div className='bestSellerItems__title'>
                <h4>Stuffed Animals</h4>
              </div>
              <div className='bestSellerItems__container'>
                {stuffedBestseller}
              </div>
            </section>
            <section className='MainPage__bestSellerItems bestSellerItems'>
              <div className='bestSellerItems__title'>
                <h4>Wooden Toys</h4>
              </div>
              <div className='bestSellerItems__container'>
                {woodenBestseller}
              </div>
            </section>
          </>
        )}
      </div>
      <section className='MainPage__aboutUs'>
        <img src='/image/mainPage/deer.png' />
        <div className='textContainer text_white'>
          <p>About The Shop</p>
          <NavLink to='/about'>
            <h2>See Our Story</h2>
          </NavLink>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error in,
            amet quo inventore, numquam aperiam earum, ipsam repellendus impedit
            expedita odit molestias!
          </p>
        </div>
      </section>
    </main>
  );
};
