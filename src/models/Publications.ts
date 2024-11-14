import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const PublicationsSchema = new Schema(
  {
    title: String,
    imgurl: String,
    description: String,
    body: String,
    author: String,
    page_amount: Number,
    publisher: String,
    publication_date: Date,
    pdf_link: Date,
    categories: [{ id: Number, name: String }],
  },
  {
    timestamps: true,
  }
);

const Publications =
  mongoose.models.Publications ||
  mongoose.model("Publications", PublicationsSchema);

export default Publications;
