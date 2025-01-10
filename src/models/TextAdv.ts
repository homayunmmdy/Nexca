import mongoose, { Schema } from "mongoose";
import { defaultSchemaOptions } from "./schemaOptions";
mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const TextAdvSchema = new Schema(
  {
    textadvid: Number,
    advname: String,
    body: String,
    link: String,
  },
  defaultSchemaOptions
);

const TextAdv =
  mongoose.models.TextAdv || mongoose.model("TextAdv", TextAdvSchema);

export default TextAdv;
