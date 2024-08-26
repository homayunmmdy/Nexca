import { AllowedColors } from "./AllowedOptions";

// Components
export type ButtonType = {
  title: string | JSX.Element;
  color: `btn-${AllowedColors}`;
  type?: "submit" | "reset" | "button" | undefined;
  style?: string;
  disabled?: boolean;
  onCllick?: () => void;
};