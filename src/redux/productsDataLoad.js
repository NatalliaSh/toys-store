import {
  updateLoadState,
  updateDataAll,
  updateDataByCategory,
} from './productsSlice.js';
import { productsFetchURL } from '../CONST.js';

export async function productsDataLoad(dispatch, category) {
  try {
    dispatch(updateLoadState({ state: 1, error: null }));
    let response;
    if (!category || category === 'all') {
      response = await fetch(productsFetchURL.all);
    } else {
      response = await fetch(productsFetchURL[category]);
    }

    if (response.ok) {
      const data = await response.json();
      dispatch(updateLoadState({ state: 2, error: null }));
      if (!category || category === 'all') {
        dispatch(updateDataAll(data));
      } else {
        dispatch(updateDataByCategory({ category: category, data: data }));
      }
    } else {
      dispatch(
        updateLoadState({ state: 3, error: 'HTTP error ' + response.status }),
      );
    }
  } catch (err) {
    dispatch(updateLoadState({ state: 3, error: err.message }));
  }
}

export async function specificProductDataLoad(dispatch, idOrTitle) {
  try {
    dispatch(updateLoadState({ state: 1, error: null }));
    const response = await fetch(productsFetchURL[idOrTitle] + idOrTitle);

    if (response.ok) {
      const data = await response.json();
      dispatch(updateLoadState({ state: 2, error: null }));
      console.log(data);

      return data;
    } else {
      dispatch(
        updateLoadState({ state: 3, error: 'HTTP error ' + response.status }),
      );
    }
  } catch (err) {
    dispatch(updateLoadState({ state: 3, error: err.message }));
  }
}
