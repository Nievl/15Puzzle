export const init = () => {
  const size = 4;
  const points = new Array(size ** 2).fill(1);
  const cubs = points.map((el, i) => i);
  return shuffle(cubs);
};

export const shuffle = (arr = []) => {
  return arr.sort(() => Math.random() - 0.5);
};

export const validateValue = (values = []) => {
  const a = values.every((value, i, arr) => {
    if (i !== 0 && value !== 0) {
      return value > arr[i - 1];
    }
    return true;
  });
  return a;
};

export const replaceValue = (values = [], value) => {
  const zeroIndex = values.indexOf(0);
  const clickIndex = values.indexOf(value);
  const newValues = [...values];
  newValues[zeroIndex] = value;
  newValues[clickIndex] = 0;
  return newValues;
};