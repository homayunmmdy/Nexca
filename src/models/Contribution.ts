import mongoose, { Schema } from "mongoose";
import { defaultSchemaOptions } from "./schemaOptions"; // Importing default schema options 
import './ConnetDB'; // Ensure the database connection is established

const ContributionSchema = new Schema(
  {
    title: String,
    description: String,
    link: String,
    date: String,
  },
  defaultSchemaOptions
);

const Contribution = mongoose.models.Contribution || mongoose.model("Contribution", ContributionSchema);

export default Contribution;
