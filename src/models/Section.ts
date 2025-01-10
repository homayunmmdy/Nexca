import mongoose, { Schema } from "mongoose";
import { defaultSchemaOptions } from "./schemaOptions";
mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const sectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    secid: {
      type: Number,
    },
  },
  defaultSchemaOptions
);

const Section =
  mongoose.models.Section || mongoose.model("Section", sectionSchema);

export default Section;
