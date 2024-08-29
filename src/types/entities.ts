import { AllowedColors } from "./AllowedOptions";

// Components
export type ButtonType = {
  title: string | JSX.Element;
  icon?: JSX.Element;
  color: `btn-${AllowedColors}`;
  type?: "submit" | "reset" | "button" | undefined;
  style?: string;
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

export type FullHoverAnimationType = {
  text: string;
  link?: string;
};