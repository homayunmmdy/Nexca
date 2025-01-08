import { ContributeCashType } from "@/types/CashTypes";

/**
 * @typedef {Object} ContributeCashType
 * @property {string} _id - The unique identifier for the contribution.
 * @property {string} title - The title of the contribution.
 * @property {string} description - A detailed description of the contribution.
 * @property {string} link - An optional link associated with the contribution.
 * @property {string} date - The date associated with the contribution.
 * @property {string} createdAt - The timestamp when the contribution was created.
 * @property {string} updatedAt - The timestamp when the contribution was last updated.
 * @property {number} __v - The version key for the contribution (used by MongoDB).
 */

/**
 * A mock array of cash contributions for development purposes.
 * This will only be used if the environment variable `NEXT_PUBLIC_STATUS` is set to "dev".
 * Otherwise, the data should be fetched from the database.
 *
 * @type {ContributeCashType[]}
 */

const ContributionCash: ContributeCashType[] = [
  {
    _id: "664db351373934f6a08928dd",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nam aspernatur tenetur dolorum doloremque cumque ullam.",
    link: "",
    date: "2024-05-22T08:56:49.785Z",
    createdAt: "2024-05-22T08:56:49.785Z",
    updatedAt: "2024-05-22T08:56:49.785Z",
    __v: 0,
  },
  {
    _id: "664db351313932f6a08928dd",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nam aspernatur tenetur dolorum doloremque cumque ullam.",
    link: "http://nexca.vercel.app/",
    date: "2024-05-24T08:56:49.785Z",
    createdAt: "2024-05-22T08:56:49.785Z",
    updatedAt: "2024-05-22T08:56:49.785Z",
    __v: 0,
  },
  {
    _id: "664db351373932f5a08928dd",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nam aspernatur tenetur dolorum doloremque cumque ullam.",
    link: "http://nexca.vercel.app/",
    date: "2024-06-22T08:56:49.785Z",
    createdAt: "2024-05-22T08:56:49.785Z",
    updatedAt: "2024-05-22T08:56:49.785Z",
    __v: 0,
  },
  {
    _id: "665db351373932f6a0r928dd",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nam aspernatur tenetur dolorum doloremque cumque ullam.",
    link: "http://nexca.vercel.app/",
    date: "2024-08-22T08:56:49.785Z",
    createdAt: "2024-05-22T08:56:49.785Z",
    updatedAt: "2024-05-22T08:56:49.785Z",
    __v: 0,
  },
  {
    _id: "665db351373332f6a08928dd",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nam aspernatur tenetur dolorum doloremque cumque ullam.",
    link: "http://nexca.vercel.app/",
    date: "2024-10-22T08:56:49.785Z",
    createdAt: "2024-05-22T08:56:49.785Z",
    updatedAt: "2024-05-22T08:56:49.785Z",
    __v: 0,
  },
];

export default ContributionCash;
