export const catalogImageSRC = {
  wooden: '/image/catalog/flower.png',
  stuffed: '/image/catalog/bear.png',
  puzzle: '/image/catalog/puzzle.png',
  educational: '/image/catalog/educational.png',
  interactive: '/image/catalog/interactive.png',
  all: '/image/catalog/allToys.png',
};

export const category = {
  wooden: 'wooden',
  stuffed: 'stuffed',
  puzzle: 'puzzle',
  educational: 'educational',
  interactive: 'interactive',
  for_boys: 'for_boys',
  for_girls: 'for_boys',
  bestseller: 'bestseller',
  all: 'all',
};

export const categoryTitle = {
  wooden: 'Wooden Toys',
  stuffed: 'Stuffed Animals',
  puzzle: 'Puzzles',
  educational: 'Educational Toys',
  interactive: 'Interactive Toys',
  all: 'See all toys',
};

export const productsFetchURL = {
  main: 'https://64ccd2bd2eafdcdc851a5560.mockapi.io/',
  all: 'https://64ccd2bd2eafdcdc851a5560.mockapi.io/products',
  wooden: 'https://64ccd2bd2eafdcdc851a5560.mockapi.io/products?wooden=true',
  stuffed: 'https://64ccd2bd2eafdcdc851a5560.mockapi.io/products?stuffed=true',
  puzzle: 'https://64ccd2bd2eafdcdc851a5560.mockapi.io/products?puzzle=true',
  educational:
    'https://64ccd2bd2eafdcdc851a5560.mockapi.io/products?educational=true',
  interactive:
    'https://64ccd2bd2eafdcdc851a5560.mockapi.io/products?interactive=true',
  for_boys:
    'https://64ccd2bd2eafdcdc851a5560.mockapi.io/products?for_boys=true',
  for_girls:
    'https://64ccd2bd2eafdcdc851a5560.mockapi.io/products?for_boys=true',
  bestseller:
    'https://64ccd2bd2eafdcdc851a5560.mockapi.io/products?bestseller=true',
  id: 'https://64ccd2bd2eafdcdc851a5560.mockapi.io/products?id=',
  title: 'https://64ccd2bd2eafdcdc851a5560.mockapi.io/products?title=',
};

export const sortFilteringParams = {
  title: 'title',
  current_price: 'current_price',
  for_boys: 'for_boys',
  for_girls: 'for_girls',
  bestseller: 'bestseller',
};

export const sortParamsInURL = {
  titleUp: 'titleUp',
  titleDown: 'titleDown',
  priceUp: 'priceUp',
  priceDown: 'priceDown',
};

export const sortNamesOfButton = {
  titleUp: 'Title: A to Z',
  titleDown: 'Title: Z to A',
  priceUp: 'Price: low to high',
  priceDown: 'Price: high to low',
};

export const filterParam = [
  sortFilteringParams.for_boys,
  sortFilteringParams.for_girls,
  sortFilteringParams.bestseller,
];
