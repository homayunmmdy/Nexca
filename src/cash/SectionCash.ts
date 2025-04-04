import { SectionCashType } from "@/types/CashTypes";

/**
 * @typedef {Object} SectionCashType
 * @property {string} _id - The unique identifier for the section.
 * @property {string} name - The name of the section.
 * @property {number} secid - The unique identifier for the section (numeric).
 * @property {string} createdAt - The timestamp when the section was created.
 * @property {string} updatedAt - The timestamp when the section was last updated.
 * @property {number} __v - The version key for the section (used by MongoDB).
 */

/**
 * A mock array of sections for development purposes.
 * This will only be used if the environment variable `NEXT_PUBLIC_STATUS` is set to DEV_MODE.
 * Otherwise, the data should be fetched from the database.
 *
 * @type {SectionCashType[]}
 */

const SectionCash: SectionCashType[] = [
  {
    _id: "664dab119ddca5e2184ff315",
    name: "Main Post",
    secid: 1,
    createdAt: "2024-05-22T08:21:37.278Z",
    updatedAt: "2024-05-22T08:21:37.278Z",
    __v: 0,
  },
  {
    _id: "664dac840219fb211feab060",
    name: "Posts",
    secid: 2,
    createdAt: "2024-05-22T08:27:48.949Z",
    updatedAt: "2024-05-22T08:27:48.949Z",
    __v: 0,
  },
  {
    _id: "664daf56373932f6a08928b4",
    name: "Single Post",
    secid: 3,
    createdAt: "2024-05-22T08:39:50.781Z",
    updatedAt: "2024-05-22T08:39:50.781Z",
    __v: 0,
  },
  {
    _id: "664daf56373932f6a01928b4",
    name: "Vertical Posts",
    secid: 4,
    createdAt: "2024-05-22T08:39:50.781Z",
    updatedAt: "2024-05-22T08:39:50.781Z",
    __v: 0,
  },
];

export default SectionCash;
