export const withValueCheck = (value, availableAmount, cbError) => {
  if (value > availableAmount) {
    cbError(`The maximum available quantity is ${availableAmount}`);
    return new Error();
  } else if (value < 0) {
    cbError('Invalid data format. \n Number must be positive');
    return new Error();
  }
};
