import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const learnSchema = new Schema(
  {
    imgurl: String,
    title: String,
    description: String,
    body: String,
  },
  {
    timestamps: true,
  }
);

const learn = mongoose.models.learn || mongoose.model("learn", learnSchema);

export default learn;
