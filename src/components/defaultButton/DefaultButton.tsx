import React from "react";
import "./defaultButton.scss";
import DefaultButtonProps from "../../types/DefaultButton";

const DefaultButton = ({ children, onClick }: DefaultButtonProps) => (
  <button type="button" className="default-button" onClick={onClick}>
    {children}
  </button>
);

export default DefaultButton;
