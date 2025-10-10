import { AllowedColors } from './AllowedOptions';
import { JSX } from 'react';

export type ButtonType = {
   color?: `btn-${AllowedColors}` | null;
   children: React.ReactNode;
   removeDefaultStyle?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type InputType = {
   color?: `input-${AllowedColors}`;
   defaultChecked?: boolean;
   label?: string;
   style?: string;
   checked?: boolean;
   icon?: JSX.Element;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type TextareaType = {
   color: `textarea-${AllowedColors}` | null;
   label?: string;
   style?: string;
   icon?: JSX.Element;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
