import mongoose, { Schema } from "mongoose";
import { defaultSchemaOptions } from "./schemaOptions"; // Importing default schema options 
import './ConnetDB'; // Ensure the database connection is established

const TimeLineSchema = new Schema(
  {
    title: String,
    date: String,
    description: String,
  },
  defaultSchemaOptions
);

const TimeLine =
  mongoose.models.TimeLine || mongoose.model("TimeLine", TimeLineSchema);

export default TimeLine;
