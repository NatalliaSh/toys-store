import { updateData, deleteDataElement, setBasket } from '../redux/basketSlice';
import {
  addToLSBasket,
  deleteFromLSBasket,
  clearLSBasket,
} from './localStorage';
import { updateBasketLoad } from '../redux/basketDataLoad';

//if no mochID -> user isn't login -> change basket data in Local Storage
//if mochID is -> user is in system -> change his basket in MochApi dataBase

export const basketUpdate = (
  dispatch,
  productID,
  amount,
  available_amount,
  mochID,
  allProdInBasket,
  isWithDeleteEff,
) => {
  const newData = { ...allProdInBasket };

  if (amount <= available_amount && amount > 0) {
    dispatch(
      updateData({
        productID: productID,
        amount,
      }),
    );

    if (!mochID) {
      addToLSBasket(productID, amount);
    }

    newData[productID] = amount;
  } else if (amount <= available_amount && amount === 0) {
    if (!isWithDeleteEff) {
      dispatch(deleteDataElement(productID));
    }

    if (!mochID) {
      deleteFromLSBasket(productID);
    }

    delete newData[productID];
  }

  if (mochID) {
    updateBasketLoad(newData, mochID);
  }
};

export const clearBasket = (dispatch, mochID) => {
  dispatch(setBasket({}));

  if (mochID) {
    updateBasketLoad({}, mochID);
  } else {
    clearLSBasket();
  }
};
