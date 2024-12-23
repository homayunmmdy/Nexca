import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const ContributionSchema = new Schema(
  {
    title: String,
    description: String,
    link: String,
    date: String,
  },
  {
    timestamps: true,
  }
);

const Contribution = mongoose.models.Contribution || mongoose.model("Contribution", ContributionSchema);

export default Contribution;
