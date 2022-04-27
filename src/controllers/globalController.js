import { makeInfo, infoObjects } from "../js/makeInfo.js";

const childSpawn = require("child_process").spawn;

makeInfo(childSpawn);

export const main = (req, res) => {
  res.render("main", {
    pageTitle: "출력 정리",
    uk_britishInfo: {
      titles: infoObjects[0].titles,
      dates: infoObjects[0].dates,
      infoLength: infoObjects[0].titles.length,
    },
    us_cincinnatiInfo: {
      titles: infoObjects[1].titles,
      dates: infoObjects[1].dates,
      infoLength: infoObjects[1].titles.length,
    },
    fr_pompidouInfo: {
      titles: infoObjects[2].titles,
      dates: infoObjects[2].dates,
      infoLength: infoObjects[2].titles.length,
    },
    uk_londonNatlInfo: {
      titles: infoObjects[3].titles,
      dates: infoObjects[3].dates,
      infoLength: infoObjects[3].titles.length,
    },

    at_wienInfo: {
      titles: infoObjects[4].titles,
      dates: infoObjects[4].dates,
      infoLength: infoObjects[4].titles.length,
    },
    es_pradoInfo: {
      titles: infoObjects[5].titles,
      dates: infoObjects[5].dates,
      infoLength: infoObjects[5].titles.length,
    },
  });
};
