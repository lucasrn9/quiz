import React from "react";
import "./scoreBoard.scss";
import ScoreBoardProps from "../../types/ScoreBoardProps";

const ScoreBoard = ({ amount }: ScoreBoardProps) => (
  <div className="score" role="presentation">
    You scored {amount}/5 correct answers
  </div>
);

export default ScoreBoard;
