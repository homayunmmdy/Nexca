import mongoose, { Schema } from "mongoose";
import "../ConnetDB"; // Ensure the database connection is established
import { defaultSchemaOptions } from "../schemaOptions"; // Importing default schema options

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
