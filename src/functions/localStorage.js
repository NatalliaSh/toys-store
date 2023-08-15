//import { getUser } from './authFirebase.js';
import { LSConst } from '../CONST';

export const getDataFromLS = (key) => {
  const data = JSON.parse(localStorage.getItem(key));

  return data;
};

export function addProductToLSWatchedProducts(id) {
  if (!id) return;

  const products = JSON.parse(localStorage.getItem(LSConst.watchedProducts));

  if (products) {
    if (products.some((el) => el === id)) return;

    if (products.length >= 20) {
      products.shift();
    }
    products.push(id);
    localStorage.setItem(LSConst.watchedProducts, JSON.stringify(products));
  } else {
    localStorage.setItem(LSConst.watchedProducts, JSON.stringify([id]));
  }
}

export function addToLSBasket(productID, amount) {
  const basket = JSON.parse(localStorage.getItem(LSConst.basket));
  const index = basket
    ? basket.findIndex((el) => Object.keys(el)[0] === productID)
    : null;

  if (index !== null) {
    if (index === -1) {
      basket.push({ [productID]: amount });
    } else {
      basket[index] = { [productID]: amount };
    }
    localStorage.setItem(LSConst.basket, JSON.stringify(basket));
  } else {
    localStorage.setItem(
      LSConst.basket,
      JSON.stringify([{ [productID]: amount }]),
    );
  }
}

export function deleteFromLSBasket(productID) {
  const basket = JSON.parse(localStorage.getItem(LSConst.basket));

  if (!basket || basket.length === 0) return new Error();

  const newBasket = basket.filter((el) => Object.keys(el)[0] !== productID);

  localStorage.setItem(LSConst.basket, JSON.stringify(newBasket));
}

export function clearLSBasket() {
  localStorage.setItem(LSConst.basket, JSON.stringify([]));
}

export function getSynchronizedWithLSBasketData() {
  const dataFromLS = getDataFromLS(LSConst.basket);
  const data = {};
  if (dataFromLS && dataFromLS.length > 0) {
    dataFromLS.forEach((el) => {
      data[Object.keys(el)[0]] = Object.values(el)[0];
    });
  }

  return data;
}
