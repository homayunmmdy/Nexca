/**
 * @file Module for defining and exporting the Post model using Mongoose.
 * @module models/Comments
 */

import mongoose, { Schema } from "mongoose";
// Connect to MongoDB using the URI from environment variables
mongoose.connect(process.env.MONGODB_URI as string);
// Use global Promise for Mongoose promises
mongoose.Promise = global.Promise;

/**
 * Schema definition for the Post model.
 * @typedef {Object} PostSchema
 * @property {string} _id - The unique identifier for the comment.
 * @property {string} postId - The unique identifier of the post this comment belongs to.
 * @property {string} name - The name of the commenter.
 * @property {string} email - The email of the commenter.
 * @property {string} message - The content of the comment.
 * @property {string} createdAt - The timestamp when the comment was created.
 * @property {string} updatedAt - The timestamp when the comment was last updated.
 * @property {number} __v - The version key for the comment (used by MongoDB).
 */
const CommentsSchema = new Schema(
  {
    postId: String,
    name: String,
    email: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

/**
 * Comment model representing a comment in the database.
 * If the model already exists, it reuses it; otherwise, it creates a new one.
 * @type {mongoose.Model}
 */
const Comments =
  mongoose.models.Comments || mongoose.model("Comments", CommentsSchema);

export default Comments;
