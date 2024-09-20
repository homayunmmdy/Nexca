import React from "react";
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
  onClickEvent?: (e: any) => void;
  ariaLabel?: string;
};

export type FullHoverAnimationType = {
  text: string;
  link?: string;
};

export type TitrType = {
  title: string;
  item: "text-center" | "text-left" | "text-right" | string;
  style?: string;
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
  defaultChecked?: boolean;
};

export type PostsCashType = {
  _id: string;
  title: string;
  imgurl: string;
  description: string;
  services: string;
  section: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TextAdvCashType = {
  _id: string;
  textadvid: number;
  advname: string;
  body: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
