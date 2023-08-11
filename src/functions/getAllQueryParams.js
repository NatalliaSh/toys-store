export const getAllQueryParams = (URLSearchParams) => {
  const obj = {};
  for (let param of URLSearchParams) {
    obj[param[0]] = param[1];
  }

  return obj;
};
