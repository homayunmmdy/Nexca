import { defaultSchemaOptions } from "@/models/schemaOptions";
import mongoose, { Schema } from "mongoose";
import "@/models/ConnetDB"; 

const mapsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    imgurl: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      trim: true,
    },
    province: {
      type: String,
      trim: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      trim: true,
    },
    source: {
      type: String,
      trim: true,
    },
  },
  defaultSchemaOptions // Apply default schema options (e.g., timestamps)
);

/**
 * Post model representing a maps in the database.
 * If the model already exists, it reuses it; otherwise, it creates a new one.
 * This check prevents OverwriteModelError when the model is imported multiple times.
 *
 * @type {mongoose.Model<PostSchema>}
 */
const MapsModel = mongoose.models.Maps || mongoose.model("Maps", mapsSchema);

export default MapsModel;
