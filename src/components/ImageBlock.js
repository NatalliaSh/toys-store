import React, { useEffect, useState } from 'react';
import { Modal } from './Modal';

import './ImageBlock.scss';

export const ImageBlock = ({ mainImg, additionalImg }) => {
  const [mainImage, setMainImage] = useState(mainImg);
  const [addImage, setAddImage] = useState(additionalImg);
  const [isModalActive, setModalActive] = useState(false);

  const clickImgHandler = ({
    target: {
      dataset: { name },
    },
  }) => {
    const newAddImage = addImage.filter((el) => el !== name);
    newAddImage.push(mainImage);

    setMainImage(name);
    setAddImage(newAddImage);
  };

  const modalHandler = () => {
    setModalActive(!isModalActive);
  };

  useEffect(() => {
    if (mainImage !== mainImg) {
      setMainImage(mainImg);
      setAddImage(additionalImg);
    }
  }, [mainImg]);

  const imageBlockJSX = (
    <>
      <div className='ImageBlock__mainImage'>
        <img
          src={`/image/products/${mainImage}`}
          alt={mainImage}
          data-name={mainImage}
          onClick={modalHandler}
        />
      </div>
      <div className='ImageBlock__additionalImages'>
        {additionalImg ? (
          addImage.map((el) => (
            <img
              key={el}
              src={`/image/products/${el}`}
              alt={el}
              data-name={el}
              onClick={clickImgHandler}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );

  return (
    <div className='ImageBlock'>
      {isModalActive && (
        <Modal cbModalCloser={modalHandler}>{imageBlockJSX}</Modal>
      )}
      {imageBlockJSX}
    </div>
  );
};
