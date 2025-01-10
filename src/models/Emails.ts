import mongoose, { Schema } from "mongoose";
import { defaultSchemaOptions } from "./schemaOptions";
mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const EmailsSchema = new Schema(
  {
    email: String,
  },
  defaultSchemaOptions
);

const Emails = mongoose.models.Emails || mongoose.model("Emails", EmailsSchema);

export default Emails;
