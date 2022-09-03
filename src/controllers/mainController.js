import { makeInfo } from "../js/makeInfo.js";
import ExbHallModel from "../models/ExbHallModel.js";
import ExbModel from "../models/ExbModel.js";
import distributeAll from "../js/distributeAll.js";

import spreadAll from "../js/spreadAll.js";

const childSpawn = require("child_process").spawn;
// makeInfo(childSpawn);

export const main = async (req, res) => {
  return res.render("main", {
    pageTitle: `Main`,
    allExbs: await spreadAll(),
  });
};

export const exbDetail = async (req, res) => {
  //   console.log(req);
  const exb = await ExbModel.findById(req.params.id);
  return res.render("exbDetail", {
    pageTitle: `${exb.title}`,
    exb: exb,
  });
};
