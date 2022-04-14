import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Question from "./Question";

const correctAnswer = {
  answer: "correct answer test",
  selected: false,
  id: "1",
};
const incorrectAnswers = [
  {
    answer: "incorrect answer test 1",
    selected: false,
    id: "2",
  },
  {
    answer: "incorrect answer test 2",
    selected: false,
    id: "3",
  },
  {
    answer: "incorrect answer test 3",
    selected: false,
    id: "4",
  },
];

afterEach(() => {
  cleanup();
});

describe("Question component", () => {
  it("should render the value in the prop 'question' as the question text, and render 1 alternative for each answer in the props 'correctAnswer' + 'incorrectAnswers'", () => {
    render(
      <Question
        question="test question"
        correctAnswer={correctAnswer}
        incorrectAnswers={incorrectAnswers}
        showAnswers={false}
        QuestionIndex={0}
        correctCounter={[false]}
      />
    );
    const questionText = screen.getByText("test question");
    const alternativeOne = screen.getByText("correct answer test");
    const alternativeTwo = screen.getByText("incorrect answer test 1");
    const alternativeThree = screen.getByText("incorrect answer test 2");
    const alternativeFour = screen.getByText("incorrect answer test 3");
    expect(questionText).toBeVisible();
    expect(alternativeOne).toBeVisible();
    expect(alternativeTwo).toBeVisible();
    expect(alternativeThree).toBeVisible();
    expect(alternativeFour).toBeVisible();
  });

  it("should be able to add and remove the class 'selected' from an alternative by clicking on it", async () => {
    const user = userEvent.setup();
    render(
      <Question
        question="test question"
        correctAnswer={correctAnswer}
        incorrectAnswers={incorrectAnswers}
        showAnswers={false}
        QuestionIndex={0}
        correctCounter={[false]}
      />
    );
    const alternativeOne = screen.getByText("correct answer test");
    expect(alternativeOne).toBeVisible();
    await user.click(alternativeOne);
    expect(alternativeOne).toHaveClass("alternative selected");
    await user.click(alternativeOne);
    expect(alternativeOne).toHaveClass("alternative");
  });

  it("should set the correctCounter to true when the correct answer is selected", async () => {
    const correctCounter = [false];
    const user = userEvent.setup();
    render(
      <Question
        question="test question"
        correctAnswer={correctAnswer}
        incorrectAnswers={incorrectAnswers}
        showAnswers
        QuestionIndex={0}
        correctCounter={correctCounter}
      />
    );
    const alternativeCorrect = screen.getByText("correct answer test");
    expect(alternativeCorrect).toBeVisible();
    await user.click(alternativeCorrect);
    expect(correctCounter[0]).toBeTruthy();
  });

  it("should set the clicked alternative class to 'alternative correct' when the correct answer is selected and showAnswers prop is true", async () => {
    const user = userEvent.setup();
    render(
      <Question
        question="test question"
        correctAnswer={correctAnswer}
        incorrectAnswers={incorrectAnswers}
        showAnswers
        QuestionIndex={0}
        correctCounter={[false]}
      />
    );
    const alternativeOne = screen.getByText("correct answer test");
    expect(alternativeOne).toBeVisible();
    await user.click(alternativeOne);
    expect(alternativeOne).toHaveClass("alternative correct");
  });

  it("should set the clicked alternative class to 'alternative incorrect' when the incorrect answer is selected and showAnswers prop is true", async () => {
    const user = userEvent.setup();
    render(
      <Question
        question="test question"
        correctAnswer={correctAnswer}
        incorrectAnswers={incorrectAnswers}
        showAnswers
        QuestionIndex={0}
        correctCounter={[false]}
      />
    );
    const alternativeIncorrect = screen.getByText("incorrect answer test 1");
    expect(alternativeIncorrect).toBeVisible();
    await user.click(alternativeIncorrect);
    expect(alternativeIncorrect).toHaveClass("alternative incorrect");
  });
});
