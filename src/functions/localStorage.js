//import { getUser } from './authFirebase.js';
import { LSConst } from '../CONST';

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

export const getDataFromLS = (key) => {
  const data = JSON.parse(localStorage.getItem(key));

  return data;
};
