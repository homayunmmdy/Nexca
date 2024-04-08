import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const advSchema = new Schema(
  {
    title: String,
    link: String,
    imgurl:String,
    advsec: Number,
  },
  {
    timestamps: true,
  }
);

const Adv = mongoose.models.Adv || mongoose.model("Adv", advSchema);

export default Adv;
