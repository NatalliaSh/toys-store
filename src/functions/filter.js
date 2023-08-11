export const filter = (products, param) => {
  return products.filter((el) => el[param] === true);
};
