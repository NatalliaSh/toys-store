import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/*import { charactersDataLoad } from '../../redux/charactersDataLoad';*/
/*import { CardsList } from '../CardsList';
import { Loader } from '../Loader';*/
/*import { charactersFetchURL } from '../../CONST';*/
import { updateData } from '../../redux/basketSlice.js';

import './MainPage.scss';

export const MainPage = () => {
  /*const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  const dataload = (url) => {
    dispatch((dispatch) => charactersDataLoad(dispatch, url));
  };

  const changeWorkModeHandler = (target) => {
    if (target.className === 'WorkModeButtons__pagingButton') {
      dispatch(setWorkMode(1));
      dataload(charactersFetchURL.charactersPage + characters.page);
    } else {
      dispatch(updateData([]));
      dispatch(setWorkMode(0));
      dataload(charactersFetchURL.charactersPage + 1);
    }
  };

  useEffect(() => {
    dataload(charactersFetchURL.characters);

    return () => {
      dispatch(resetData([]));
    };
  }, []);*/

  return (
    <main className='MainPage'>
      <section className='MainPage__mainImage'>
        <img src='/image/mainPage/IMAGEmainimg.jpg' />
      </section>
    </main>
  );
};
