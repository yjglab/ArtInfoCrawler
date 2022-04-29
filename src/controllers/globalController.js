import { makeInfo } from "../js/makeInfo.js";
import { makeAllPlaceInfo } from "../js/makeAllPlaceInfo.js";

const childSpawn = require("child_process").spawn;

makeInfo(childSpawn);

export const main = (req, res) => {
  res.render("main", {
    pageTitle: "출력 정리",
    allPlaceInfo: makeAllPlaceInfo(),
  });
};
