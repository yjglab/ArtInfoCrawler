import mongoose from "mongoose";

const exbSchema = new mongoose.Schema({
  country: String,
  countryCode: String,
  title: String,
  date: String,
  thumbnailSrc: String,
  detail: String,
  link: String,
  hall: String,
  category: String,
});

const ExbModel = mongoose.model("ExbModel", exbSchema);
export default ExbModel;
