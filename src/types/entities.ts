import { AllowedColors, AllowedInputType } from "./AllowedOptions";

// Components
export type ButtonType = {
  title: string | JSX.Element;
  icon?: JSX.Element;
  color: `btn-${AllowedColors}`| null;
  type?: "submit" | "reset" | "button" | undefined;
  style?: string;
  disabled?: boolean;
  onClick?: () => void;
  onClickEvent?: (e: any) => void;
  ariaLabel?: string;
  removeDefaultStyle? : boolean;
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

export type  FeaturesType =  {
  id: number;
  title: string;
  icon: JSX.Element ;
  description: string;
}

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

export type TicketsCashType = {
  _id: string;
  title: string;
  description: string;
  body: string;
  priority: number;
  progress: number;
  status: string;
  startTime: string;
  endTime: string;
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
