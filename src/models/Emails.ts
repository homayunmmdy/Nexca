import mongoose, { Schema } from "mongoose";
import { defaultSchemaOptions } from "./schemaOptions"; // Importing default schema options 
import './ConnetDB'; // Ensure the database connection is established

const EmailsSchema = new Schema(
  {
    email: String,
  },
  defaultSchemaOptions
);

const Emails = mongoose.models.Emails || mongoose.model("Emails", EmailsSchema);

export default Emails;
