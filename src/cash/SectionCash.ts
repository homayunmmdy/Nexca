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
    "_id": "66dec4da04318837a05eaeb2",
    "name": "Main Post",
    "secid": 1,
    "activate": true,
    "createdAt": "2024-09-09T09:50:18.963Z",
    "updatedAt": "2024-10-07T18:30:38.284Z",
    "__v": 0,
  },
  {
    "_id": "66ded30749a20901d184635a",
    "name": "Posts",
    "secid": 2,
    "activate": true,
    "createdAt": "2024-09-09T10:50:47.478Z",
    "updatedAt": "2024-09-09T10:50:47.478Z",
    "__v": 0
  },
  {
    "_id": "66ded3165a0f5a954ed1e216",
    "name": "Single Post",
    "secid": 3,
    "activate": true,
    "createdAt": "2024-09-09T10:51:02.802Z",
    "updatedAt": "2024-10-07T18:31:51.860Z",
    "__v": 0,
  },
  {
    "_id": "66ded32049a20901d1846360",
    "name": "Vertical Posts",
    "secid": 4,
    "activate": true,
    "createdAt": "2024-09-09T10:51:12.739Z",
    "updatedAt": "2024-09-09T10:51:12.739Z",
    "__v": 0
  },
  {
    "_id": "66f4551c14445c1f0f3ee37f",
    "name": "News Page - More Posts",
    "secid": 5,
    "activate": false,
    "createdAt": "2024-09-25T18:23:24.921Z",
    "updatedAt": "2024-09-29T19:44:01.666Z",
    "__v": 0
  },
  {
    "_id": "68040519d9a1b2d7b899ff08",
    "name": "Sport",
    "secid": 6,
    "activate": true,
    "createdAt": "2025-04-19T20:18:33.880Z",
    "updatedAt": "2025-04-19T20:18:33.880Z",
    "__v": 0
  },
  {
    "_id": "680c814abb3a7c0dd8780ebc",
    "name": "Teletype",
    "secid": 7,
    "activate": false,
    "createdAt": "2025-04-26T06:46:34.899Z",
    "updatedAt": "2025-04-26T06:46:34.899Z",
    "__v": 0
  }
];

export default SectionCash;
