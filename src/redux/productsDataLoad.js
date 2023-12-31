import { updateLoadState, updateData } from './productsSlice.js';
import { productsFetchURL } from '../CONST.js';

export async function productsDataLoad(dispatch, category = 'all') {
  try {
    dispatch(updateLoadState({ state: 1, error: null }));
    const response = await fetch(productsFetchURL[category]);

    if (response.ok) {
      const data = await response.json();
      dispatch(updateData({ category: category, data: data }));
      dispatch(updateLoadState({ state: 2, error: null }));
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

/*export async function specificProductDataLoad(dispatch, id, setState) {
  try {
    dispatch(updateLoadState({ state: 1, error: null }));
    const response = await fetch(productsFetchURL.id + id);

    if (response.ok) {
      const data = await response.json();
      dispatch(updateLoadState({ state: 2, error: null }));
      setState(data.find((el) => el.id === id));
    } else {
      dispatch(
        updateLoadState({ state: 3, error: 'HTTP error ' + response.status }),
      );
    }
  } catch (err) {
    dispatch(updateLoadState({ state: 3, error: err.message }));
  }
}*/
