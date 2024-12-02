import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

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

const Comments =
  mongoose.models.Comments || mongoose.model("Comments", CommentsSchema);

export default Comments;
