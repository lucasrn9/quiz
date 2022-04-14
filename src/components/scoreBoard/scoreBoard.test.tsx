import React from "react";
import { render, screen } from "@testing-library/react";
import ScoreBoard from "./ScoreBoard";

describe("scoreBoard component", () => {
  it("should render the scoreBoard whitin the value passed in prop amount", () => {
    render(<ScoreBoard amount={2} />);
    const scoreBoard = screen.getByRole("presentation");
    expect(scoreBoard).toHaveTextContent("You scored 2/5 correct answers");
  });
});
