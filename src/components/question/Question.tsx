import React, { useCallback, useEffect, useState } from "react";
import Alternative from "../alternative/Alternative";
import "./question.scss";
import QuestionProps from "../../types/QuestionProps";
import shuffleArray from "../../utils/shuffleArray";

const Question = ({
  question,
  incorrectAnswers,
  correctAnswer,
  showAnswers,
  correctCounter,
  QuestionIndex,
}: QuestionProps) => {
  const [alternatives] = useState(
    shuffleArray([...incorrectAnswers, correctAnswer])
  );
  const [selectedAlternative, setSelectedAlternative] = useState({
    answer: "null",
    selected: false,
    id: "",
  });
  const [correctAlternative] = useState(correctAnswer);

  const [isCorrectAlternativeSelected, setIsCorrectAlternativeSelected] =
    useState(false);

  const checkIfSelectedAlternativeIsTheCorrect = useCallback(() => {
    setIsCorrectAlternativeSelected(
      selectedAlternative.id === correctAlternative.id
    );
  }, [selectedAlternative.id, correctAlternative.id]);

  useEffect(() => {
    // eslint-disable-next-line no-param-reassign
    correctCounter[QuestionIndex] = isCorrectAlternativeSelected;
  }, [isCorrectAlternativeSelected, correctCounter, QuestionIndex]);

  useEffect(() => {
    checkIfSelectedAlternativeIsTheCorrect();
  }, [selectedAlternative, checkIfSelectedAlternativeIsTheCorrect]);

  const toggle = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    index: number
  ) => {
    setSelectedAlternative(alternatives[index]);
    if (e.currentTarget.id === selectedAlternative.id) {
      setSelectedAlternative({
        answer: "",
        selected: false,
        id: "",
      });
    }
  };

  return (
    <div className="question">
      <h2 className="question-text">{question}</h2>
      <div className="alternatives">
        {alternatives.map((alternative, alternativeIndex) => (
          <Alternative
            key={alternative.answer}
            index={alternativeIndex}
            selected={alternative.id === selectedAlternative.id}
            correct={alternative.id === correctAlternative.id}
            showAnswer={showAnswers}
            id={alternative.id}
            onClick={toggle}
          >
            {alternative.answer}
          </Alternative>
        ))}
      </div>
      <hr style={{ border: "0.79px solid #DBDEF0", marginTop: "18px" }} />
    </div>
  );
};
export default Question;
