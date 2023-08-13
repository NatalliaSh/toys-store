import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsDataLoad } from '../../redux/productsDataLoad';
import { BasketCard } from '../cards/BasketCard';

import './BasketPage.scss';

export const BasketPage = () => {
  const basket = useSelector((state) => state.basket);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const isEmpty = Object.keys(basket.data).length === 0 ? true : false;

  const dataOfProductsInBasket =
    Object.keys(basket.data).length > 0
      ? Object.keys(basket.data).map((id) =>
          products.data.all.find((el) => el.id === id),
        )
      : null;

  const totalPrice = dataOfProductsInBasket
    ? Object.keys(basket.data).reduce((acc, id) => {
        const value =
          dataOfProductsInBasket.find((el) => el.id === id).price
            .current_price * basket.data[id];
        return acc + value;
      }, 0)
    : null;

  const load = (category) => {
    dispatch((dispatch) => {
      productsDataLoad(dispatch, category);
    });
  };

  useEffect(() => {
    if (!products.data.all) {
      load('all');
    }
  }, []);

  return (
    <main className='BasketPage'>
      <div className='BasketPage__contentWrapper'>
        {isEmpty && (
          <div className='BasketPage__emptyMessage'>
            <h4>Your shopping cart is empty</h4>
          </div>
        )}
        {!isEmpty && (
          <>
            <div className='BasketPage__cardsContainer'>
              {dataOfProductsInBasket &&
                dataOfProductsInBasket.map((el) => (
                  <BasketCard
                    key={el.id}
                    productData={el}
                    amount={basket.data[el.id]}
                  />
                ))}
            </div>
            <div className='BasketPage__totalSum text_m text_semiBold'>
              <span>Total Price:</span>
              <span>{`${totalPrice} ${dataOfProductsInBasket[0].price.currency}`}</span>
            </div>

            <button
              type='button'
              className='BasketPage__buyButton text_l text_semiBold text_white'
            >
              Buy Now
            </button>
          </>
        )}
      </div>
    </main>
  );
};
