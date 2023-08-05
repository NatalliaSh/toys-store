/*import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { charactersDataLoad } from '../../redux/charactersDataLoad';
import { CardsList } from '../CardsList';
import { Loader } from '../Loader';
import { ToTopButton } from '../ToTopButton';
import { charactersFetchURL } from '../../CONST';
import {
  resetData,
  setWorkMode,
  updateData,
} from '../../redux/charactersSlice';
import { WorkModeButtons } from '../WorkModeButtons';

import './MainPage.scss';*/

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
  }, []);

  return (
    <div className='MainPage'>
      {characters.dataLoadState === 0 && 'no data'}
      {characters.dataLoadState === 2 && (
        <>
          <WorkModeButtons
            cbchangeWorkModeHandler={changeWorkModeHandler}
            isPagingButtonActive={characters.workMode === 1}
          />
          <CardsList />
          <ToTopButton />
        </>
      )}
      {characters.dataLoadState === 1 && <Loader />}
      {characters.dataLoadState === 3 && 'error: ' + characters.dataLoadError}
    </div>
  );*/
};
