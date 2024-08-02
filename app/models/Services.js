import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const servicesSchema = new Schema(
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

const Services = mongoose.models.Services || mongoose.model("Services", servicesSchema);

export default Services;