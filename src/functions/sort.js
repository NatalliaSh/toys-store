import { sortFilteringParams } from '../CONST';

export const sort = (products, param) => {
  const parametr = param.includes('title')
    ? sortFilteringParams.title
    : sortFilteringParams.current_price;

  const mapped = products.map((el, index) => {
    const value = param.includes('price') ? el.price[parametr] : el[parametr];
    return { index, value };
  });

  mapped.sort((a, b) => {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });

  const result = mapped.map((el) => products[el.index]);

  if (param.includes('Down')) {
    result.reverse();
  }

  return result;
};
