import React from "react";
import "./alternative.scss";
import AlternativeProps from "../../types/AlternativeProps";

const Alternative = ({
  children,
  selected,
  correct,
  showAnswer,
  index,
  id,
  onClick,
}: AlternativeProps) => {
  const alternativeClasses = () => {
    if ((showAnswer && selected) || (showAnswer && correct)) {
      return correct ? "alternative correct" : "alternative incorrect";
    }
    return selected ? "alternative selected" : "alternative";
  };

  return (
    <span
      className={alternativeClasses()}
      role="none"
      id={id}
      onClick={(e) => onClick(e, index)}
    >
      {children}
    </span>
  );
};

export default Alternative;
