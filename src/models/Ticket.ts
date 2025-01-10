import mongoose, { Schema } from "mongoose";
import { defaultSchemaOptions } from "./schemaOptions";
mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const TicketSchema = new Schema(
  {
    title: String,
    description: String,
    body: String,
    priority: Number,
    progress: Number,
    status: String,
    startTime: Date,
    endTime: Date,
  },
  defaultSchemaOptions
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", TicketSchema);

export default Ticket;
