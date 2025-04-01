import { AllowedColors, AllowedInputType } from "./AllowedOptions";

type BaseType = {
  id?: string;
  style?: string;
  required?: boolean;
};

export type ButtonType = {
  color?: `btn-${AllowedColors}` | null;
  children: React.ReactNode;
  removeDefaultStyle?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type InputType = {
  color?: `input-${AllowedColors}` ;
  defaultChecked?: boolean;
  label?: string;
  style?: string;
  checked?:boolean;
  icon?: JSX.Element;
} &  React.InputHTMLAttributes<HTMLInputElement>;

export type TextareaType = {
  name?: string;
  rows?: number;
  value?: string | number;
  color: `textarea-${AllowedColors}`| null;
  placeholder?: string;
  onChange?: (e: any) => void;
  label?: string;
  icon?: JSX.Element;
} & BaseType & React.TextareaHTMLAttributes<HTMLTextAreaElement>;