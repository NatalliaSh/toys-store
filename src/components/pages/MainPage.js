import React, { useEffect, useMemo, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsDataLoad } from '../../redux/productsDataLoad.js';
import { Loader } from '../Loader';
import { CatalogCard } from '../CatalogCard.js';
import { ProductCardShort } from '../ProductCardShort.js';
import { category } from '../../CONST.js';
import { Slider } from '../Slider.js';

import './MainPage.scss';

export const MainPage = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const swiperElRef = useRef(null);
  const swiperElRef2 = useRef(null);

  const load = (category) => {
    dispatch((dispatch) => productsDataLoad(dispatch, category));
  };

  useEffect(() => {
    if (!products.dataByCategory.bestseller) {
      load(category.bestseller);
      console.log('dataLoad');
    }
  }, []);

  const stuffedBestseller = useMemo(() => {
    if (products.dataByCategory.bestseller) {
      const stuffed = products.dataByCategory.bestseller.filter(
        (product) => product.stuffed,
      );

      return stuffed.map((el) => (
        <swiper-slide key={el.id}>
          <ProductCardShort productData={el} />
        </swiper-slide>
      ));
    }
  }, [products.dataByCategory.bestseller]);

  const woodenBestseller = useMemo(() => {
    if (products.dataByCategory.bestseller) {
      const wooden = products.dataByCategory.bestseller.filter(
        (product) => product.wooden,
      );

      return wooden.map((el) => (
        <swiper-slide key={el.id}>
          <ProductCardShort productData={el} />
        </swiper-slide>
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
                <NavLink to={'/products/' + category.stuffed}>
                  See All Toys &rarr;
                </NavLink>
              </div>
              <div className='bestSellerItems__container'>
                <Slider
                  ref={swiperElRef}
                  dependencies={products.dataByCategory.bestseller}
                >
                  {stuffedBestseller}
                </Slider>
              </div>
            </section>
            <section className='MainPage__bestSellerItems bestSellerItems'>
              <div className='bestSellerItems__title'>
                <h4>Wooden Toys</h4>
                <NavLink to={'/products/' + category.wooden}>
                  See All Toys &rarr;
                </NavLink>
              </div>
              <div className='bestSellerItems__container'>
                <Slider
                  ref={swiperElRef2}
                  dependencies={products.dataByCategory.bestseller}
                  settings={{ autoplayReverseDirection: 'true' }}
                >
                  {woodenBestseller}
                </Slider>
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
