import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const EmailsSchema = new Schema(
  {
    email: String,
  },
  {
    timestamps: true,
  }
);

const Emails = mongoose.models.Emails || mongoose.model("Emails", EmailsSchema);

export default Emails;
