import mongoose, { Schema } from "mongoose";
import { defaultSchemaOptions } from "./schemaOptions";
mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const contactsSchema = new Schema(
  {
    name: String,
    email : String,
    message: String,
  },
  defaultSchemaOptions
);

const Contacts = mongoose.models.Contacts || mongoose.model("Contacts", contactsSchema);

export default Contacts;