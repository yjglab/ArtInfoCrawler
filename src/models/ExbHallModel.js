import mongoose from "mongoose";

const exbHallSchema = new mongoose.Schema({
  data: [],
  country: String,
  hallName: String,
  category: String,
  infoLength: Number,
  titles: [{ type: String }],
});

const ExbHallModel = mongoose.model("ExbHallModel", exbHallSchema);
export default ExbHallModel;

// import mongoose from "mongoose";

// const exbHallSchema = new mongoose.Schema({
//   country: String,
//   titles: [{ type: String }],
//   dates: [{ type: String }],
//   thumbnailsSrc: [{ type: String }],
//   details: [{ type: String }],
//   hallName: String,
//   infoLength: Number,
// });

// const ExbHallModel = mongoose.model("ExbHallModel", exbHallSchema);
// export default ExbHallModel;
