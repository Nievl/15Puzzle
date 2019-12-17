import React from "react";
import { init } from "./logic/index";
import { dataSetExtractor } from "./helpers/extractors";

export const Board = () => {
  const cubs = init() || [];
  const toggle = e => {
    const value = dataSetExtractor(e.target, "value");
    alert(value);
  };
  return (
    <div className="board">
      {cubs.map(cube => (
        <Cube cube={cube} onclick={toggle} />
      ))}
    </div>
  );
};

const Cube = ({ cube, onclick }) => {
  const { value } = cube;
  const clN = value ? "" : "zero";
  const number = value || "";
  return (
    <div className={"cube " + clN} data-value={value} onClick={onclick}>
      {number}
    </div>
  );
};
