import { makeInfo } from "../js/makeInfo.js";
import { makeAllPlaceInfo } from "../js/makeAllPlaceInfo.js";
import ExbHallModel from "../models/ExbHallModel.js";
import { infoObjects } from "../js/makeInfo.js";

const childSpawn = require("child_process").spawn;

makeInfo(childSpawn);
// makeAllPlaceInfo()
// infoObjects
const makeExbHalls = async () => {
  await ExbHallModel.create({
    country: infoObjects[0].country,
    titles: infoObjects[0].titles,
    dates: infoObjects[0].dates,
    thumbnailsSrc: infoObjects[0].thumbnailsSrc,
    details: infoObjects[0].details,
    infoLength: infoObjects[0].titles.length,
  });

  let exbHalls = await ExbHallModel.find({ country: "uk" }); // db에서 찾음.
  // exbHalls = exbHalls.filter((v) => v.country == "uk");

  console.log("이엑스비홀", exbHalls, typeof exbHalls);
  console.log("???", exbHalls[0].titles);
  console.log("???", exbHalls[0].infoLength);
  return exbHalls;
};

export const main = async (req, res) => {
  return res.render("main", {
    pageTitle: "출력 정리",
    halls: await makeExbHalls(), // db에서 불러와야함.
  });
};
