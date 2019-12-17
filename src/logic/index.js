export const init = () => {
  const size = 4;
  const points = new Array(size ** 2).fill(1);
  const cubs = points.map((el, i) => i);
  return shuffle(cubs);
};

export const shuffle = (arr = []) => {
  if (Array.isArray(arr)) return arr.sort(() => Math.random() - 0.5);
  return [];
};

export const validateValue = values => {
  if (Array.isArray(values)) {
    return values.every((value, i, arr) => {
      if (i !== 0 && value !== 0) {
        return value > arr[i - 1];
      }
      return true;
    });
  }
  return false;
};

const getX = index => index % 4;
const getY = index => Math.floor(index / 4);

export const isTouchable = (blackIndex, currIndex) => {
  if (typeof blackIndex === "number" && typeof currIndex === "number") {
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
    if ((deltaX === 0 || deltaY === 0) && (deltaX === 1 || deltaY === 1)) {
      return true;
    }
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
