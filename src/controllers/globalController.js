import { makeMsmInfo, msmInfoName } from "../js/makeMsmInfo.js";

const childSpawn = require("child_process").spawn;

makeMsmInfo(childSpawn);

export const main = (req, res) => {
  res.render("main", {
    pageTitle: "출력 정리",
    britishMsmInfo: {
      titles: msmInfoName[0].titles,
      dates: msmInfoName[0].dates,
      infoLength: msmInfoName[0].titles.length,
    },
    // louvreMsmInfo: {
    //   titles: msmInfoName[1].titles,
    //   dates: msmInfoName[1].dates,
    //   infoLength: msmInfoName[1].titles.length,
    // },
    cincinnatiInfo: {
      titles: msmInfoName[1].titles,
      dates: msmInfoName[1].dates,
      infoLength: msmInfoName[1].titles.length,
    },
    pompidouMsmInfo: {
      titles: msmInfoName[2].titles,
      dates: msmInfoName[2].dates,
      infoLength: msmInfoName[2].titles.length,
    },
    londonNatlInfo: {
      titles: msmInfoName[3].titles,
      dates: msmInfoName[3].dates,
      infoLength: msmInfoName[3].titles.length,
    },

    wienMsmInfo: {
      titles: msmInfoName[4].titles,
      dates: msmInfoName[4].dates,
      infoLength: msmInfoName[4].titles.length,
    },
    pradoMsmInfo: {
      titles: msmInfoName[5].titles,
      dates: msmInfoName[5].dates,
      infoLength: msmInfoName[5].titles.length,
    },
  });
};
