import {
  updateLoadState,
  updateData,
  setPagesInfo,
} from './charactersSlice.js';

export async function charactersDataLoad(dispatch, url) {
  try {
    dispatch(updateLoadState({ state: 1, error: null }));
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      dispatch(updateLoadState({ state: 2, error: null }));
      dispatch(updateData(data.results));
      dispatch(
        setPagesInfo({
          pagesAmount: data.info.pages,
          nextPageURL: data.info.next,
          prevPageURL: data.info.prev,
          page: data.info.prev
            ? Number(data.info.prev.match(/(?:\?page=)(\d*)/)[1]) + 1
            : 1,
        }),
      );
    } else {
      dispatch(
        updateLoadState({ state: 3, error: 'HTTP error ' + response.status }),
      );
    }
  } catch (err) {
    dispatch(updateLoadState({ state: 3, error: err.message }));
  }
}
