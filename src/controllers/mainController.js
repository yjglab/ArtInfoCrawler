import { makeInfo } from "../js/makeInfo.js";
import ExbHallModel from "../models/ExbHallModel.js";
import ExbModel from "../models/ExbModel.js";
import distributeAll from "../js/distributeAll.js";
import distributeMuseum from "../js/distributeMuseum.js";
import distributeGallery from "../js/distributeGallery.js";
import spreadAll from "../js/spreadAll.js";

const childSpawn = require("child_process").spawn;
// makeInfo(childSpawn);

export const main = async (req, res) => {
  // let test = await distributeAll();
  // console.log(test.col1[0]);
  return res.render("main", {
    pageTitle: `Main`,
    allCols: await distributeAll(),
  });
};
export const mainFilter = async (req, res) => {
  return res.render("mainFilter", {
    pageTitle: `Filter`,
    allExbs: await spreadAll(),
  });
};
export const data = async (req, res) => {
  return res.render("data", {
    pageTitle: "data",
    uk: await ExbHallModel.find({ country: "uk" }), // db에서.
    fr: await ExbHallModel.find({ country: "fr" }),
    at: await ExbHallModel.find({ country: "at" }),
    it: await ExbHallModel.find({ country: "it" }),
    us: await ExbHallModel.find({ country: "us" }),
    es: await ExbHallModel.find({ country: "es" }),
    kr: await ExbHallModel.find({ country: "kr" }),
    jp: await ExbHallModel.find({ country: "jp" }),
    gr: await ExbHallModel.find({ country: "gr" }),
    cz: await ExbHallModel.find({ country: "cz" }),
    ru: await ExbHallModel.find({ country: "ru" }),
    ch: await ExbHallModel.find({ country: "ch" }),
    pl: await ExbHallModel.find({ country: "pl" }),
    ca: await ExbHallModel.find({ country: "ca" }),
    au: await ExbHallModel.find({ country: "au" }),
    tr: await ExbHallModel.find({ country: "tr" }),
    dk: await ExbHallModel.find({ country: "dk" }),
    br: await ExbHallModel.find({ country: "br" }),
    hu: await ExbHallModel.find({ country: "hu" }),
    hk: await ExbHallModel.find({ country: "hk" }),
    nl: await ExbHallModel.find({ country: "nl" }),
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
