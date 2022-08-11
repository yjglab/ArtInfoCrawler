import mongoose from "mongoose";

const exbHallSchema = new mongoose.Schema({
  data: [],
  country: String,
  hallName: String,
  category: String,
  infoLength: Number,
});

const ExbHallModel = mongoose.model("ExbHallModel", exbHallSchema);
export default ExbHallModel;
