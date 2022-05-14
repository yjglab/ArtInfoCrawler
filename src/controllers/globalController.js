import { makeInfo } from "../js/makeInfo.js";
import ExbHallModel from "../models/ExbHallModel.js";

const childSpawn = require("child_process").spawn;
// makeInfo(childSpawn);

export const main = async (req, res) => {
  return res.render("main", {
    pageTitle: "출력 정리",
    uk: await ExbHallModel.find({ country: "uk" }), // db에서.
    fr: await ExbHallModel.find({ country: "fr" }),
  });
};
