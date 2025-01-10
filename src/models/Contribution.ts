import mongoose, { Schema } from "mongoose";
import { defaultSchemaOptions } from "./schemaOptions";
mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

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
