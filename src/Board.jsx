import React, { useState } from "react";
import { init, replaceValue, validateValue } from "./logic/index";
import { dataSetExtractor } from "./helpers/extractors";
import { Cube } from "./Cube";
import { Win } from "./Win";

export const Board = () => {
  const [cubes, setCubes] = useState(init());
  const [steps, setSteps] = useState(0);
  const [win, setWin] = useState(false);

  const handleClick = e => {
    const value = +dataSetExtractor(e.target, "value");
    const newValues = replaceValue(cubes, value);
    if (newValues) {
      setCubes(newValues);
      setSteps(steps + 1);
      const isValid = validateValue(newValues);
      if (isValid) setWin(true);
    }
  };

  const reset = () => {
    setWin(false);
    setSteps(0);
    setCubes(init());
  };

  const clN = win ? " block" : "";

  return (
    <>
      <Win open={win} steps={steps} reset={reset} />
      <div className={"panel " + clN}>
        <div className="counter">Количество перемещений: {steps}</div>
        <button type="button" onClick={reset}>
          Сброс
        </button>
        <div className="board ">
          {cubes.map(cube => (
            <Cube cube={cube} onclick={handleClick} key={cube} />
          ))}
        </div>
      </div>
    </>
  );
};
