import { makeInfo } from "../js/makeInfo.js";
import { makeAllPlaceInfo } from "../js/makeAllPlaceInfo.js";
import ExbHallModel from "../models/ExbHallModel.js";
import { infoObjects } from "../js/makeInfo.js";

const childSpawn = require("child_process").spawn;
makeInfo(childSpawn);
// let exbHalls = ExbHallModel.find({ country: "uk" }); // db에서 찾음.

export const main = async (req, res) => {
  return res.render("main", {
    pageTitle: "출력 정리",
    halls: await ExbHallModel.find({ country: "uk" }), // db에서 불러와야함.
  });
};
