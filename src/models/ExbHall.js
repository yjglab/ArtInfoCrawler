import mongoose from "mongoose";

const exbHallSchema = new mongoose.Schema({
  titles: [{ type: String }],
  dates: [{ type: String }],
  thumbnailsSrc: [{ type: String }],
  details: [{ type: String }],
  infoLength: Number,
});

const ExbHall = mongoose.model("Exb", exbHallSchema);
export default ExbHall;
