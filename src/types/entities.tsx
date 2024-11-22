export type FullHoverAnimationType = {
  text: string;
  link?: string;
};

export type TitrType = {
  title: string;
  borderColor?: string;
  item: "text-center" | "text-left" | "text-right" | string;
  style?: string;
};

export type FeaturesType = {
  id: number;
  title: string;
  icon: JSX.Element;
  description: string;
};

export type CollapseType = {
  id: number;
  label: string;
  body: string;
};

export type SinglePagepParamsType = {
  id: string;
};
export type MenuTypes = {
  pathname: string;
  nav: {
    id: number;
    name: string;
    link: string;
  }[];
};

export type FooterLinkType = {
  id: number;
  title: string;
  href: string;
  icon: JSX.Element;
};

export type PriceItemType = {
  id: number;
  titr: string;
  special: boolean;
  description: string;
  features: { id: number; name: string; mark: boolean }[];
};
