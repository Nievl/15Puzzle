export const init = () => {
  const size = 4;
  const points = new Array(size ** 2).fill(1);
  const cubs = points.map((el, i) => ({ value: i }));
  return shuffle(cubs);
};

export const shuffle = (arr = []) => {
  return arr.sort(() => Math.random() - 0.5);
};
