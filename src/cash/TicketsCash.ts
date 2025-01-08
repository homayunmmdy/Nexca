import { TicketsCashType } from "@/types/CashTypes";

/**
 * @typedef {Object} TicketsCashType
 * @property {string} _id - The unique identifier for the ticket.
 * @property {string} title - The title of the ticket.
 * @property {string} description - A detailed description of the ticket.
 * @property {string} body - The full content or details of the ticket.
 * @property {number} priority - The priority level of the ticket (e.g., 1 for the lowest and  5 for high priority).
 * @property {number} progress - The progress of the ticket (e.g., 0 for not started).
 * @property {string} status - The current status of the ticket (e.g., "not started").
 * @property {string} startTime - The timestamp when the ticket was started.
 * @property {string} endTime - The timestamp when the ticket is expected to end.
 * @property {string} createdAt - The timestamp when the ticket was created.
 * @property {string} updatedAt - The timestamp when the ticket was last updated.
 * @property {number} __v - The version key for the ticket (used by MongoDB).
 */

/**
 * A mock array of tickets for development purposes.
 * This will only be used if the environment variable `NEXT_PUBLIC_STATUS` is set to "dev".
 * Otherwise, the data should be fetched from the database.
 *
 * @type {TicketsCashType[]}
 */

const TicketsCash: TicketsCashType[] = [
  {
    _id: "664db351473932f6a08928dd",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nam aspernatur tenetur dolorum doloremque cumque ullam culpa quidem voluptates pariatur repellendus repudiandae fugit, aliquam temporibus velit quam, itaque magni deserunt. Iste est amet excepturi laboriosam. Minima nihil doloribus atque laboriosam laudantium odio facilis commodi impedit dolorum iusto. Quaerat itaque esse laudantium repellendus iure ipsam similique quae corrupti cumque harum, ratione illo dicta soluta maxime, officiis repudiandae mollitia dolore, quidem quibusdam. Explicabo voluptatibus sunt nemo! Cumque sint ea earum molestias! Doloremque.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi vel accusamus dolores, at saepe illo aperiam quas architecto voluptatem minus? Reiciendis corrupti accusamus aliquid iure, officiis ducimus sit repellat harum tempora dolor, explicabo architecto natus ipsa voluptatum! Modi cupiditate vitae dolor cum, odit, ducimus nihil amet facilis dolores officia fugiat iure repudiandae inventore? Enim eveniet rem, id error iure, quod iusto veniam placeat alias sequi minus minima aliquid suscipit! Assumenda fuga nihil eaque nemo voluptatibus veniam architecto ut modi distinctio, quae voluptates odit adipisci? Tempora perferendis, totam quod dicta repellendus praesentium, reprehenderit odio eaque quidem expedita libero delectus deleniti enim tenetur tempore. Totam earum perspiciatis cupiditate nulla incidunt tenetur quaerat ipsa ratione, quia libero assumenda, iste molestiae, minima neque!",
    priority: 1,
    progress: 0,
    status: "not started",
    startTime: "2024-05-22T08:56:49.785Z",
    endTime: "2024-05-22T08:56:49.785Z",
    createdAt: "2024-05-22T08:56:49.785Z",
    updatedAt: "2024-05-22T08:56:49.785Z",
    __v: 0,
  },
  {
    _id: "664db351373932f6a08928dd",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nam aspernatur tenetur dolorum doloremque cumque ullam culpa quidem voluptates pariatur repellendus repudiandae fugit, aliquam temporibus velit quam, itaque magni deserunt. Iste est amet excepturi laboriosam. Minima nihil doloribus atque laboriosam laudantium odio facilis commodi impedit dolorum iusto. Quaerat itaque esse laudantium repellendus iure ipsam similique quae corrupti cumque harum, ratione illo dicta soluta maxime, officiis repudiandae mollitia dolore, quidem quibusdam. Explicabo voluptatibus sunt nemo! Cumque sint ea earum molestias! Doloremque.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi vel accusamus dolores, at saepe illo aperiam quas architecto voluptatem minus? Reiciendis corrupti accusamus aliquid iure, officiis ducimus sit repellat harum tempora dolor, explicabo architecto natus ipsa voluptatum! Modi cupiditate vitae dolor cum, odit, ducimus nihil amet facilis dolores officia fugiat iure repudiandae inventore? Enim eveniet rem, id error iure, quod iusto veniam placeat alias sequi minus minima aliquid suscipit! Assumenda fuga nihil eaque nemo voluptatibus veniam architecto ut modi distinctio, quae voluptates odit adipisci? Tempora perferendis, totam quod dicta repellendus praesentium, reprehenderit odio eaque quidem expedita libero delectus deleniti enim tenetur tempore. Totam earum perspiciatis cupiditate nulla incidunt tenetur quaerat ipsa ratione, quia libero assumenda, iste molestiae, minima neque!",
    priority: 2,
    progress: 10,
    status: "not started",
    startTime: "2024-05-22T08:56:49.785Z",
    endTime: "2024-05-22T08:56:49.785Z",
    createdAt: "2024-05-22T08:56:49.785Z",
    updatedAt: "2024-05-22T08:56:49.785Z",
    __v: 0,
  },
  {
    _id: "644db351373932f6a08928dd",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nam aspernatur tenetur dolorum doloremque cumque ullam culpa quidem voluptates pariatur repellendus repudiandae fugit, aliquam temporibus velit quam, itaque magni deserunt. Iste est amet excepturi laboriosam. Minima nihil doloribus atque laboriosam laudantium odio facilis commodi impedit dolorum iusto. Quaerat itaque esse laudantium repellendus iure ipsam similique quae corrupti cumque harum, ratione illo dicta soluta maxime, officiis repudiandae mollitia dolore, quidem quibusdam. Explicabo voluptatibus sunt nemo! Cumque sint ea earum molestias! Doloremque.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi vel accusamus dolores, at saepe illo aperiam quas architecto voluptatem minus? Reiciendis corrupti accusamus aliquid iure, officiis ducimus sit repellat harum tempora dolor, explicabo architecto natus ipsa voluptatum! Modi cupiditate vitae dolor cum, odit, ducimus nihil amet facilis dolores officia fugiat iure repudiandae inventore? Enim eveniet rem, id error iure, quod iusto veniam placeat alias sequi minus minima aliquid suscipit! Assumenda fuga nihil eaque nemo voluptatibus veniam architecto ut modi distinctio, quae voluptates odit adipisci? Tempora perferendis, totam quod dicta repellendus praesentium, reprehenderit odio eaque quidem expedita libero delectus deleniti enim tenetur tempore. Totam earum perspiciatis cupiditate nulla incidunt tenetur quaerat ipsa ratione, quia libero assumenda, iste molestiae, minima neque!",
    priority: 5,
    progress: 100,
    status: "done",
    startTime: "2024-05-22T08:56:49.785Z",
    endTime: "2024-05-22T08:56:49.785Z",
    createdAt: "2024-05-22T08:56:49.785Z",
    updatedAt: "2024-05-22T08:56:49.785Z",
    __v: 0,
  },
  {
    _id: "664db551373932f6a08928dd",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nam aspernatur tenetur dolorum doloremque cumque ullam culpa quidem voluptates pariatur repellendus repudiandae fugit, aliquam temporibus velit quam, itaque magni deserunt. Iste est amet excepturi laboriosam. Minima nihil doloribus atque laboriosam laudantium odio facilis commodi impedit dolorum iusto. Quaerat itaque esse laudantium repellendus iure ipsam similique quae corrupti cumque harum, ratione illo dicta soluta maxime, officiis repudiandae mollitia dolore, quidem quibusdam. Explicabo voluptatibus sunt nemo! Cumque sint ea earum molestias! Doloremque.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi vel accusamus dolores, at saepe illo aperiam quas architecto voluptatem minus? Reiciendis corrupti accusamus aliquid iure, officiis ducimus sit repellat harum tempora dolor, explicabo architecto natus ipsa voluptatum! Modi cupiditate vitae dolor cum, odit, ducimus nihil amet facilis dolores officia fugiat iure repudiandae inventore? Enim eveniet rem, id error iure, quod iusto veniam placeat alias sequi minus minima aliquid suscipit! Assumenda fuga nihil eaque nemo voluptatibus veniam architecto ut modi distinctio, quae voluptates odit adipisci? Tempora perferendis, totam quod dicta repellendus praesentium, reprehenderit odio eaque quidem expedita libero delectus deleniti enim tenetur tempore. Totam earum perspiciatis cupiditate nulla incidunt tenetur quaerat ipsa ratione, quia libero assumenda, iste molestiae, minima neque!",
    priority: 3,
    progress: 50,
    status: "delay",
    startTime: "2024-05-22T08:56:49.785Z",
    endTime: "2024-05-22T08:56:49.785Z",
    createdAt: "2024-05-22T08:56:49.785Z",
    updatedAt: "2024-05-22T08:56:49.785Z",
    __v: 0,
  },
];

export default TicketsCash;
