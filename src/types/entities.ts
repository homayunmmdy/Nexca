import { AllowedColors, AllowedInputType } from "./AllowedOptions";

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

export type InputType = {
  id?: string;
  name?: string;
  style?: string;
  value?: string | number;
  color?: `input-${AllowedColors}`;
  type: AllowedInputType;
  placeholder?: string;
  onChange?: (e: any) => void;
  required?: boolean; 
  icon?: JSX.Element;
  defaultChecked? : boolean;
};