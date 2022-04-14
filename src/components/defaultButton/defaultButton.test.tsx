import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DefaultButton from "./DefaultButton";

describe("defaultButton component", () => {
  it("should calls onClick function as a click event on every click", async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    render(<DefaultButton onClick={onClick}>Test button</DefaultButton>);
    const button = screen.getByText("Test button");
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
