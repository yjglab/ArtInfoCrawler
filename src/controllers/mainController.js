import { makeInfo } from "../js/makeInfo.js";
import ExbHallModel from "../models/ExbHallModel.js";
import ExbModel from "../models/ExbModel.js";

const childSpawn = require("child_process").spawn;
// makeInfo(childSpawn);

export const main = async (req, res) => {
  return res.render("main", {
    pageTitle: `Main`,
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
  });
};

export const hallDetail = async (req, res) => {
  //   console.log(req);
  const hall = await ExbHallModel.findById(req.params.id);

  return res.render("hallDetail", {
    pageTitle: `${hall.hallName}`,
    hall: hall,
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
// export const museum = async (req, res) => {
//   return res.render("museum", {
//     pageTitle: "museum",
//   });
// };
// export const gallery = async (req, res) => {
//   return res.render("gallery", {
//     pageTitle: "gallery",
//   });
// };
