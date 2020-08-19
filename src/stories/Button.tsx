import React, { useContext } from "react";
import { ThemeContext } from "../App";
import "./button.scss";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  label,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  return (
    <button
      type="button"
      className={`storybook-button storybook-button--primary storybook-button--${theme}`}
      {...props}
    >
      {label}
    </button>
  );
};
