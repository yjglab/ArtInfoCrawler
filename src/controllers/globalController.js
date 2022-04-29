import { makeInfo, infoObjects } from "../js/makeInfo.js";

const childSpawn = require("child_process").spawn;

makeInfo(childSpawn);
const allSpaceInfo = {};
export const main = (req, res) => {
  res.render("main", {
    pageTitle: "출력 정리",
    uk_britishInfo: {
      titles: infoObjects[0].titles,
      dates: infoObjects[0].dates,
      thumbnailsSrc: infoObjects[0].thumbnailsSrc,
      details: infoObjects[0].details,
      infoLength: infoObjects[0].titles.length,
    },
    uk_londonNatlInfo: {
      titles: infoObjects[1].titles,
      dates: infoObjects[1].dates,
      thumbnailsSrc: infoObjects[1].thumbnailsSrc,
      details: infoObjects[1].details,
      infoLength: infoObjects[1].titles.length,
    },
    fr_pompidouInfo: {
      titles: infoObjects[2].titles,
      dates: infoObjects[2].dates,
      thumbnailsSrc: infoObjects[2].thumbnailsSrc,
      details: infoObjects[2].details,
      infoLength: infoObjects[2].titles.length,
    },
    fr_orsayInfo: {
      titles: infoObjects[3].titles,
      dates: infoObjects[3].dates,
      thumbnailsSrc: infoObjects[3].thumbnailsSrc,
      details: infoObjects[3].details,
      infoLength: infoObjects[3].titles.length,
    },
    fr_lodinInfo: {
      titles: infoObjects[4].titles,
      dates: infoObjects[4].dates,
      thumbnailsSrc: infoObjects[4].thumbnailsSrc,
      details: infoObjects[4].details,
      infoLength: infoObjects[4].titles.length,
    },

    us_cincinnatiInfo: {
      titles: infoObjects[5].titles,
      dates: infoObjects[5].dates,
      thumbnailsSrc: infoObjects[5].thumbnailsSrc,
      details: infoObjects[5].details,
      infoLength: infoObjects[5].titles.length,
    },

    at_wienInfo: {
      titles: infoObjects[6].titles,
      dates: infoObjects[6].dates,
      thumbnailsSrc: infoObjects[6].thumbnailsSrc,
      details: infoObjects[6].details,
      infoLength: infoObjects[6].titles.length,
    },
    es_pradoInfo: {
      titles: infoObjects[7].titles,
      dates: infoObjects[7].dates,
      thumbnailsSrc: infoObjects[7].thumbnailsSrc,
      details: infoObjects[7].details,
      infoLength: infoObjects[7].titles.length,
    },
  });
};
