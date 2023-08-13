import React, { useEffect, useState } from 'react';

import './InputNumberButtons.scss';

export const InputNumberButtons = React.forwardRef(
  ({ value, minValue, maxValue, cbChangeInputHandler }, ref) => {
    const [inputValue, setInputValue] = useState(value);

    const plusMinusHandler = (isMinus) => {
      let value;
      if (isMinus) {
        value = inputValue > minValue ? Number(inputValue) - 1 : minValue;
      } else {
        value = inputValue < maxValue ? Number(inputValue) + 1 : maxValue;
      }
      setInputValue(value);
      cbChangeInputHandler();
    };

    useEffect(() => {
      if (inputValue != value) {
        setInputValue(value);
      }
    }, [value]);

    return (
      <div className='InputNumberButtons'>
        <button
          type='button'
          className='InputNumberButtons__minusButton'
          onClick={() => plusMinusHandler(true)}
        ></button>
        <input
          className='InputNumberButtons__input text text_m'
          type='number'
          ref={ref}
          min={minValue}
          max={maxValue}
          value={inputValue}
          onChange={({ target: { value } }) => {
            setInputValue(value);
            cbChangeInputHandler();
          }}
        />
        <button
          type='button'
          className='InputNumberButtons__plusButton'
          onClick={() => plusMinusHandler(false)}
        ></button>
      </div>
    );
  },
);
