import React from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles.js";

export const buttonTypeClasses = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = buttonTypeClasses.base) => {
  const renderedButtons = {
    [buttonTypeClasses.base]: BaseButton,
    [buttonTypeClasses.google]: GoogleSignInButton,
    [buttonTypeClasses.inverted]: InvertedButton,
  };
  return renderedButtons[buttonType];
};
const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
