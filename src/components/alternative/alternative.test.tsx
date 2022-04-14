import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Alternative from "./Alternative";

describe("Alternative component", () => {
  it("should not show if the alternative is correct or not when showAnswer prop is false", () => {
    const onClick = jest.fn();
    render(
      <Alternative
        id="1"
        index={1}
        correct
        selected={false}
        showAnswer={false}
        onClick={onClick}
      >
        test
      </Alternative>
    );
    const alternative = screen.getByText("test");
    expect(alternative).toHaveClass("alternative");
  });

  it("should show if the alternative is correct or not when showAnswer prop is true", () => {
    const onClick = jest.fn();
    render(
      <Alternative
        id="1"
        index={1}
        correct
        selected={false}
        showAnswer
        onClick={onClick}
      >
        test
      </Alternative>
    );
    const alternative = screen.getByText("test");
    expect(alternative).toHaveClass("alternative correct");
  });

  it("should have the class 'alternative selected' when the prop selected is true", () => {
    const onClick = jest.fn();
    render(
      <Alternative
        id="1"
        index={1}
        correct
        selected
        showAnswer={false}
        onClick={onClick}
      >
        test
      </Alternative>
    );
    const alternative = screen.getByText("test");
    expect(alternative).toHaveClass("alternative selected");
  });

  it("should not have the class 'alternative selected' when the prop selected is true but the prop showAnswer is also true", () => {
    const onClick = jest.fn();
    render(
      <Alternative
        id="1"
        index={1}
        correct
        selected
        showAnswer
        onClick={onClick}
      >
        test
      </Alternative>
    );
    const alternative = screen.getByText("test");
    expect(alternative).not.toHaveClass("alternative selected");
    expect(alternative).toHaveClass("alternative correct");
  });

  it("should calls the onClick function as a click event passing the click event and the prop 'index' as it arguments", async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    render(
      <Alternative
        id="1"
        index={1}
        correct
        selected={false}
        showAnswer={false}
        onClick={onClick}
      >
        test
      </Alternative>
    );
    const alternative = screen.getByText("test");
    await user.click(alternative);
    expect(onClick.mock.calls[0][0].type).toBe("click");
    expect(onClick.mock.calls[0][1]).toBe(1);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
