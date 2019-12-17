import React from "react";

export const Cube = ({ cube, onclick }) => {
  const clN = cube ? "" : "zero";
  const number = cube || "";
  return (<div className={"cube " + clN} data-value={cube} onClick={onclick}>
    {number}
  </div>);
};
