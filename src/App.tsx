import React, { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import { Question, DefaultButton, ScoreBoard } from "./components";
import "./app.scss";
import blobTop from "./images/blob-top.png";
import blobBottom from "./images/blob-bottom.png";
import decodeFormatedQuestionsFromBase64 from "./utils/decodeFormatedQuestionsFromBase64";
import QuestionsList from "./types/QuestionsList";

const App = () => {
  const [questionsData, setQuestionsData] = useState([
    {
      category: "",
      correct_answer: { answer: "", selected: false, id: "a" },
      difficulty: "",
      incorrect_answers: [{ answer: "", selected: false, id: "a" }],
      question: "",
      type: "",
    },
  ]);

  const [showAnswers, setShowAnswers] = useState(false);

  const correctCounter = [false, false, false, false, false];
  const [correctAnswersAmount, setCorrectAnswersAmount] = useState(0);
  const [questionsFetch, setQuestionsFetch] = useState(false);

  const fetchQuestions = async () => {
    const res = await axios.get(
      "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple&encode=base64"
    );
    const data: QuestionsList = res.data.results;
    const addProperties = data.map((question) => ({
      ...question,
      correct_answer: {
        answer: question.correct_answer,
        selected: false,
        id: nanoid(),
      },
      incorrect_answers: question.incorrect_answers.map((incorrectAnswer) => ({
        answer: incorrectAnswer,
        selected: false,
        id: nanoid(),
      })),
    })); // add the properties 'selected' and 'id' to each correct_answer and incorrect_answer
    const parsedData = decodeFormatedQuestionsFromBase64(addProperties);
    setQuestionsData(parsedData);
    setQuestionsFetch(true);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const checkAnswers = () => {
    setShowAnswers(true);
    setCorrectAnswersAmount(
      correctCounter.filter((answer) => answer === true).length
    );
  };

  const restartQuiz = () => {
    setShowAnswers(false);
    setCorrectAnswersAmount(0);
    setQuestionsFetch(false);
    fetchQuestions();
  };

  const questions =
    questionsFetch &&
    questionsData.map((question, index) => (
      <Question
        key={question.question}
        question={question.question}
        incorrectAnswers={question.incorrect_answers}
        correctAnswer={question.correct_answer}
        showAnswers={showAnswers}
        correctCounter={correctCounter}
        QuestionIndex={index}
      />
    ));

  return (
    <>
      <img src={blobTop} alt="decoration blob" className="blob-top" />
      <div className="App">
        <div className="quiz">
          {questions}
          {showAnswers ? (
            <div className="final-score">
              <ScoreBoard amount={correctAnswersAmount} />
              <DefaultButton onClick={restartQuiz}>Play Again</DefaultButton>
            </div>
          ) : (
            <DefaultButton onClick={checkAnswers}>Check answers</DefaultButton>
          )}
        </div>
      </div>
      <img src={blobBottom} alt="decoration blob" className="blob-bottom" />
    </>
  );
};

export default App;
