import { infoObjects } from "./makeInfo.js";

export const makeAllPlaceInfo = () => {
  // DEV: 항목 지정
  const allPlaceInfoName = [
    "uk_britishInfo",
    "uk_londonNatlInfo",
    "fr_pompidouInfo",
    "fr_orsayInfo",
    "fr_lodinInfo",
    "us_cincinnatiInfo",
    "us_chicagoInfo",
    "at_wienInfo",
    "es_pradoInfo",
  ];
  const allPlaceInfo = {};

  // DEV: i조정
  allPlaceInfoName.forEach((name, i) => {
    allPlaceInfo[name] = {
      titles: infoObjects[6].titles,
      dates: infoObjects[6].dates,
      thumbnailsSrc: infoObjects[6].thumbnailsSrc,
      details: infoObjects[6].details,
      infoLength: infoObjects[6].titles.length,
    };
  });

  return allPlaceInfo;
};
