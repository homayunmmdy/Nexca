import { PriceItemType } from "../types";

export const PriceItemDate: PriceItemType[] = [
  {
    id: 1,
    special: false,
    titr: "Basic",
    description:
      "Best option for personal use & for your next project. You can use it for free and forever.",
    features: [
      { id: 1, name: "Posts Operation", mark: true },
      { id: 2, name: "Service Creation", mark: true },
      { id: 3, name: "Master Editor Access", mark: false },
      { id: 4, name: "Section Creation", mark: false },
      { id: 5, name: "Receive Latest Updates", mark: true },
    ],
  },
  {
    id: 2,
    special: true,
    titr: "Premium",
    description:
      "For you who want to grow your business. You can use this plan for free but you need to pay for the transaction fee.",
    features: [
      { id: 1, name: "Posts Operation", mark: true },
      { id: 2, name: "Service Creation", mark: true },
      { id: 3, name: "Master Editor Access", mark: true },
      { id: 4, name: "Section Creation", mark: true },
      { id: 5, name: "Receive Latest Updates", mark: true },
    ],
  },
  {
    id: 3,
    special: false,
    titr: "Pro",
    description:
      "For you who want to grow your business and don't want to pay for the transaction fee. You need to pay for this plan.",
    features: [
      { id: 1, name: "Posts Operation", mark: true },
      { id: 2, name: "Service Creation", mark: true },
      { id: 3, name: "Master Editor Access", mark: false },
      { id: 4, name: "Section Creation", mark: true },
      { id: 5, name: "Receive Latest Updates", mark: true },
    ],
  },
];

