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

const getX = index => index % 4;
const getY = index => Math.floor(index / 4);

const isTouchable = (blackIndex, currIndex) => {
  const cube = {
    x: getX(currIndex),
    y: getY(currIndex),
  };
  const black = {
    x: getX(blackIndex),
    y: getY(blackIndex),
  };
  const deltaX = Math.abs(cube.x - black.x);
  const deltaY = Math.abs(cube.y - black.y);
  console.log("delta  ", deltaX, ":", deltaY);
  if ((deltaX === 0 || deltaY === 0) && (deltaX === 1 || deltaY === 1)) {
    return true;
  }
  return false;
};

export const replaceValue = (values = [], value) => {
  const blackIndex = values.indexOf(0);
  const currIndex = values.indexOf(value);
  if (isTouchable(blackIndex, currIndex)) {
    const newValues = [...values];
    newValues[blackIndex] = value;
    newValues[currIndex] = 0;
    return newValues;
  }
  return false;
};
