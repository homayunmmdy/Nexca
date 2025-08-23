import { BaseType } from "@/types/CashTypes";

export type MapsCashType = {
  title: string;
  imgurl: string;
  description: string;
  country: string;
  province: string;
  source?: string;
  author?: string;
} & BaseType;