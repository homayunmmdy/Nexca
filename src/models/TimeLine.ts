import mongoose, { Schema } from "mongoose";
import { defaultSchemaOptions } from "./schemaOptions";
mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

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
