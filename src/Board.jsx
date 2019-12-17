import React, { useState } from "react";
import { init, replaceValue, validateValue } from "./logic/index";
import { dataSetExtractor } from "./helpers/extractors";
import { Cube } from "./Cube";

export const Board = () => {
  const [cubes, setCubes] = useState(init());
  const [moves, setMoves] = useState(0);

  const handleClick = e => {
    const value = +dataSetExtractor(e.target, "value");
    const newValues = replaceValue(cubes, value);
    setCubes(newValues);
    setMoves(moves + 1);
    const isValid = validateValue(newValues);
    if (isValid) alert("Пазл сложен");
  };

  const reset = () => setCubes(init());

  return (
    <>
      <div className="board">
        {cubes.map(cube => (
          <Cube cube={cube} onclick={handleClick} key={cube} />
        ))}
      </div>
      <div>Количество перемещений {moves}</div>
      <button type="button" onClick={reset}>
        Сброс
      </button>
    </>
  );
};
