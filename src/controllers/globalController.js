import { makeInfo } from "../js/makeInfo.js";
import ExbHallModel from "../models/ExbHallModel.js";

const childSpawn = require("child_process").spawn;
// makeInfo(childSpawn);

export const main = async (req, res) => {
  return res.render("main", {
    pageTitle: "출력 정리",
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
  });
};
