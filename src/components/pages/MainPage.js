import React, { useEffect, useMemo, useRef, useLayoutEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsDataLoad } from '../../redux/productsDataLoad.js';
import { Loader } from '../Loader';
import { CatalogCard } from '../CatalogCard.js';
import { ProductCardShort } from '../ProductCardShort.js';
import { category } from '../../CONST.js';
import { Scrollbar } from 'swiper/modules';

import 'swiper/element/css/scrollbar';

import './MainPage.scss';

register();

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

  //slider settings
  useEffect(() => {
    function handleMouseEnter(e) {
      const autoplay = e.target.swiper.autoplay;
      autoplay.stop();
    }
    function handleMouseLeave(e) {
      const autoplay = e.target.swiper.autoplay;
      autoplay.start();
    }

    if (
      products.dataByCategory.bestseller &&
      swiperElRef.current &&
      swiperElRef2.current
    ) {
      // listen for Swiper events
      swiperElRef.current.addEventListener('mouseenter', handleMouseEnter);
      swiperElRef.current.addEventListener('mouseleave', handleMouseLeave);
      swiperElRef2.current.addEventListener('mouseenter', handleMouseEnter);
      swiperElRef2.current.addEventListener('mouseleave', handleMouseLeave);

      const params = {
        modules: [Scrollbar],
        injectStylesUrls: ['path/to/scrollbar-element.min.css'],
        injectStyles: [
          `:host .swiper-scrollbar {top: 0;}`,
          `.swiper-scrollbar-drag {background-color: #a5c926;}`,
        ],
      };
      Object.assign(swiperElRef.current, params);
      swiperElRef.current.initialize();
      Object.assign(swiperElRef2.current, params);
      swiperElRef2.current.initialize();
    }

    return () => {
      if (
        products.dataByCategory.bestseller &&
        swiperElRef.current &&
        swiperElRef2.current
      ) {
        const a = swiperElRef.current.removeEventListener(
          'mouseenter',
          handleMouseEnter,
        );
        swiperElRef.current.removeEventListener('mouseleave', handleMouseLeave);

        swiperElRef2.current.removeEventListener(
          'mouseenter',
          handleMouseEnter,
        );
        swiperElRef2.current.removeEventListener(
          'mouseleave',
          handleMouseLeave,
        );
      }
    };
  }, [products.dataByCategory.bestseller]);

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
              </div>
              <div className='bestSellerItems__container'>
                <swiper-container
                  init='false'
                  ref={swiperElRef}
                  slides-per-view='auto'
                  scrollbar='true'
                  autoplay='true'
                  autoplay-disable-on-interaction='false'
                  autoplay-delay='1000'
                  speed='5000'
                  loop='true'
                  centered-slides='true'
                >
                  {stuffedBestseller}
                </swiper-container>
              </div>
            </section>
            <section className='MainPage__bestSellerItems bestSellerItems'>
              <div className='bestSellerItems__title'>
                <h4>Wooden Toys</h4>
              </div>
              <div className='bestSellerItems__container'>
                <swiper-container
                  init='false'
                  ref={swiperElRef2}
                  slides-per-view='auto'
                  scrollbar='true'
                  autoplay='true'
                  autoplay-disable-on-interaction='false'
                  autoplay-reverse-direction='true'
                  autoplay-delay='1000'
                  speed='5000'
                  loop='true'
                  centered-slides='true'
                >
                  {woodenBestseller}
                </swiper-container>
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
