import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import App from "./App";
import questions from "./mocks/questions";

describe("App component", () => {
  it("should show the ScoreBoard component and the play again button when the Check answers button is clicked", async () => {
    jest.spyOn(axios, "get").mockReturnValue(Promise.resolve(questions));
    const user = userEvent.setup();
    render(<App />);
    const checkAnswersBtn = screen.getByText("Check answers");
    const correctAnswerQ1 = await screen.findByText("correct answer q1");
    const correctAnswerQ2 = await screen.findByText("correct answer q2");
    await user.click(correctAnswerQ1);
    await user.click(correctAnswerQ2);
    await user.click(checkAnswersBtn);
    const scoreBoard = screen.getByText("You scored 2/5 correct answers");
    const playAgainBtn = screen.getByText("Play Again");
    expect(scoreBoard).toBeVisible();
    expect(playAgainBtn).toBeVisible();
  });

  it("should start a new quiz when the play again button is clicked", async () => {
    jest.spyOn(axios, "get").mockReturnValue(Promise.resolve(questions));
    const user = userEvent.setup();
    render(<App />);
    const checkAnswersBtn = screen.getByText("Check answers");
    const correctAnswerQ1 = await screen.findByText("correct answer q1");
    const incorrectAnswerQ2 = await screen.findByText("incorrect answer q2-1");
    await user.click(correctAnswerQ1);
    await user.click(incorrectAnswerQ2);
    await user.click(checkAnswersBtn);
    expect(correctAnswerQ1).toHaveClass("alternative correct");
    expect(incorrectAnswerQ2).toHaveClass("alternative incorrect");
    const playAgainBtn = screen.getByText("Play Again");
    await user.click(playAgainBtn);
    expect(correctAnswerQ1).toHaveClass("alternative");
    expect(incorrectAnswerQ2).toHaveClass("alternative");
  });
});
