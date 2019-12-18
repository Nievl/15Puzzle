import React from "react";
import PropTypes from "prop-types";

export const Win = ({ open, steps, reset }) => {
  if (open)
    return (
      <div className="modal">
        Вы сложили пазл за {steps} шаг(ов)
        <button type="button" onClick={reset}>
          Сброс
        </button>
      </div>
    );
  return null;
};

Win.propTypes = {
  open: PropTypes.bool,
  steps: PropTypes.number,
  reset: PropTypes.func,
};
