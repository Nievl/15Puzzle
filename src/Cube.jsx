import React from "react";
import PropTypes from "prop-types";

export const Cube = ({ cube, onclick }) => {
  const clN = cube ? "" : "zero";
  const number = cube || "";
  return (
    <div className={"cube " + clN} data-value={cube} onClick={onclick}>
      {number}
    </div>
  );
};

Cube.propTypes = {
  cube: PropTypes.number,
  onclick: PropTypes.func,
};
