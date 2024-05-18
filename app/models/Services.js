import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    secid: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;
