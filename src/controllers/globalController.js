import { makeInfo } from "../js/makeInfo.js";
import { makeAllPlaceInfo } from "../js/makeAllPlaceInfo.js";
import ExbHall from "../models/ExbHall.js";
import { infoObjects } from "../js/makeInfo.js";

const childSpawn = require("child_process").spawn;

makeInfo(childSpawn);
// makeAllPlaceInfo()
// infoObjects

export const main = (req, res) => {
  ExbHall.find({}, (err, exbs) => {
    console.log("에러", err);
    console.log("전시", exbs);
  });
  const exbHall = new ExbHall({
    titles: infoObjects[0].titles,
    dates: infoObjects[0].dates,
    thumbnailsSrc: infoObjects[0].thumbnailsSrc,
    details: infoObjects[0].details,
    infoLength: infoObjects[0].titles.length,
  });
  console.log(exbHall);
  return res.render("main", {
    pageTitle: "출력 정리",
    allPlaceInfo: exbHall,
  });
};
