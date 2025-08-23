import { IconType } from "react-icons/lib";

export type PriceDataType = {
  id: number;
  titr: string;
  special: boolean;
  description: string;
  features: { id: number; name: string; mark: boolean }[];
};

export type FeaturesType = {
  id: number;
  title: string;
  icon: JSX.Element;
  description: string;
};

export type TechStackTypeData = {
  Icon: IconType;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
  delay: number;
};
