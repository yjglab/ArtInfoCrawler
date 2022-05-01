import { infoObjects } from "./makeInfo.js";

export const makeAllPlaceInfo = () => {
  const allPlaceInfoName = [
    "uk_britishInfo",
    "uk_londonNatlInfo",
    "fr_pompidouInfo",
    "fr_orsayInfo",
    "fr_lodinInfo",
    "us_cincinnatiInfo",
    "us_chicagoInfo",
    "us_bostonInfo",
    "at_wienInfo",
    "at_arsElectronicaInfo",
    "es_pradoInfo",
  ];
  const allPlaceInfo = {};

  // DEV: i조정
  allPlaceInfoName.forEach((name, i) => {
    allPlaceInfo[name] = {
      titles: infoObjects[9].titles,
      dates: infoObjects[9].dates,
      thumbnailsSrc: infoObjects[9].thumbnailsSrc,
      details: infoObjects[9].details,
      infoLength: infoObjects[9].titles.length,
    };
  });

  return allPlaceInfo;
};
