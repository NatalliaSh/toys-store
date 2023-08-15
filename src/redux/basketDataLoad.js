import { basketFetchURL } from '../CONST.js';
import { setMochID } from './basketSlice.js';
import { setBasket } from './basketSlice.js';

async function request(url, method, body) {
  const resp = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (resp.ok) {
    return resp.json();
  } else {
    return new Error('smth went wrong, response status is ' + resp.status);
  }
}

export async function updateBasketLoad(basket, mochID) {
  const resp = await request(basketFetchURL.updateBasket + mochID, 'PUT', {
    basket,
  });
  console.log(resp);
}

async function createUserBasket(uid) {
  const resp = await request(basketFetchURL.setBasket, 'POST', {
    uid,
    basket: {},
  });

  const data = !(resp instanceof Error)
    ? { mochID: resp.id, basket: resp.basket }
    : resp;
  return data;
}

export async function getBasketLoad(dispatch, userID) {
  try {
    const response = await request(basketFetchURL.getBasket, 'GET');

    if (!(response instanceof Error)) {
      const data = response.find((el) => el.uid === userID);

      //if !data -> no user in DataBase -> create User in DataBase with empty basket
      const personalData = data
        ? { mochID: data.id, basket: data.basket }
        : await createUserBasket(userID);

      if (!(personalData instanceof Error)) {
        dispatch(setMochID(personalData.mochID));
        dispatch(setBasket(personalData.basket));
      }
    }
  } catch (err) {
    console.log(err);
  }
}
