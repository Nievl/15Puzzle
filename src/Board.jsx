import React, { useState } from "react";
import { init, replaceValue, validateValue } from "./logic/index";
import { dataSetExtractor } from "./helpers/extractors";

export const Board = () => {
  const [cubes, setCubes] = useState(init());
  const handleClick = e => {
    const value = +dataSetExtractor(e.target, "value");
    const newValues = replaceValue(cubes, value);
    setCubes(newValues);
    const isValid = validateValue(newValues);
    if (isValid) alert("Пазл сложен");
  };
  return (
    <div className="board">
      {cubes.map(cube => (
        <Cube cube={cube} onclick={handleClick} key={cube} />
      ))}
    </div>
  );
};

const Cube = ({ cube, onclick }) => {
  const clN = cube ? "" : "zero";
  const number = cube || "";
  return (
    <div className={"cube " + clN} data-value={cube} onClick={onclick}>
      {number}
    </div>
  );
};
