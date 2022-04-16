import {
  makeMsmInfo,
  britishMsmInfo,
  louvreMsmInfo,
  pompidouMsmInfo,
} from "../js/makeMsmInfo.js";

const britishSpawn = require("child_process").spawn;
const louvreSpawn = require("child_process").spawn;
const pompidouSpawn = require("child_process").spawn;

makeMsmInfo(britishSpawn, louvreSpawn, pompidouSpawn);

export const main = (req, res) => {
  res.render("main", {
    pageTitle: "출력 정리",
    britishMsmInfo: {
      titles: britishMsmInfo.titles,
      dates: britishMsmInfo.dates,
      infoLength: britishMsmInfo.titles.length,
    },
    louvreMsmInfo: {
      titles: louvreMsmInfo.titles,
      dates: louvreMsmInfo.dates,
      infoLength: louvreMsmInfo.titles.length,
    },
    pompidouMsmInfo: {
      titles: pompidouMsmInfo.titles,
      dates: pompidouMsmInfo.dates,
      infoLength: pompidouMsmInfo.titles.length,
    },
  });
};
