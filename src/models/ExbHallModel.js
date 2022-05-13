import mongoose from "mongoose";

const exbHallSchema = new mongoose.Schema({
  country: String,
  titles: [{ type: String }],
  dates: [{ type: String }],
  thumbnailsSrc: [{ type: String }],
  details: [{ type: String }],
  infoLength: Number,
});

const ExbHallModel = mongoose.model("ExbHallModel", exbHallSchema);
export default ExbHallModel;
