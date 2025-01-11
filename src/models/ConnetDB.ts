import mongoose from "mongoose";

/**
 * The MongoDB connection URI retrieved from the environment variables.
 * @type {string}
 */
const MONGODB_URI = process.env.MONDOGDB as string;

// Check if the MONGODB_URI environment variable is defined
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

/**
 * Connects to the MongoDB database using the provided URI.
 * Also sets Mongoose's Promise implementation to use the global Promise object.
 * @throws {Error} If the connection to the database fails.
 */
mongoose.connect(MONGODB_URI);
mongoose.Promise = global.Promise;