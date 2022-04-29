import { infoObjects } from "./makeInfo.js";

export const makeAllPlaceInfo = () => {
  const allPlaceInfoName = [
    "uk_britishInfo",
    "uk_londonNatlInfo",
    "fr_pompidouInfo",
    "fr_orsayInfo",
    "fr_lodinInfo",
    "us_cincinnatiInfo",
    "at_wienInfo",
    "es_pradoInfo",
  ];
  const allPlaceInfo = {};
  allPlaceInfoName.forEach((name, i) => {
    allPlaceInfo[name] = {
      titles: infoObjects[i].titles,
      dates: infoObjects[i].dates,
      thumbnailsSrc: infoObjects[i].thumbnailsSrc,
      details: infoObjects[i].details,
      infoLength: infoObjects[i].titles.length,
    };
  });

  return allPlaceInfo;
};
