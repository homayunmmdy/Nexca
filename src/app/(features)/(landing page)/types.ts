export type PriceItemType = {
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