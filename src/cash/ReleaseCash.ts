import { ReleaseCashType } from '@/types/CashTypes';

/**
 * @typedef {Object} ReleaseCashType
 * @property {string} _id - The unique identifier for the timeline entry.
 * @property {string} title - The title of the timeline entry.
 * @property {string} date - The date associated with the timeline entry.
 * @property {string} description - A detailed description of the timeline entry.
 * @property {string} createdAt - The timestamp when the timeline entry was created.
 * @property {string} updatedAt - The timestamp when the timeline entry was last updated.
 * @property {number} __v - The version key for the timeline entry (used by MongoDB).
 */

/**
 * A mock array of timeline entries for development purposes.
 * This will only be used if the environment variable `NEXT_PUBLIC_STATUS` is set to "dev".
 * Otherwise, the data should be fetched from the database.
 *
 * @type {ReleaseCashType[]}
 */

const TimeLineCash: ReleaseCashType[] = [
   {
      _id: '664db351473932f6a08928dd',
      title: 'Apple Watch',
      date: '2005-05-22T08:56:49.785Z',
      link: 'https://applewatch.org',
      description:
         'The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with  iOS and other Apple products and services',

      createdAt: '2024-05-22T08:56:49.785Z',
      updatedAt: '2024-05-22T08:56:49.785Z',
      __v: 0,
   },
   {
      _id: '664db351373932f6a08928dd',
      title: 'iPhone',
      date: '2007-05-22T08:56:49.785Z',
      description:
         " iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share",
      createdAt: '2024-05-22T08:56:49.785Z',
      updatedAt: '2024-05-22T08:56:49.785Z',
      __v: 0,
   },
   {
      _id: '664db351373932f6a18928dd',
      title: 'iPod',
      date: '2010-05-22T08:56:49.785Z',
      description:
         'The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At  over 20 years, the iPod brand is the oldest to be discontinued by Apple',
      createdAt: '2024-05-22T08:56:49.785Z',
      updatedAt: '2024-05-22T08:56:49.785Z',
      __v: 0,
   },
];

export default TimeLineCash;
