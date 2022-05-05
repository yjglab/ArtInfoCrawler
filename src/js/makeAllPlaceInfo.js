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
    "at_belvedereInfo", //교체
    "es_pradoInfo",
  ];
  const allPlaceInfo = {};

  // DEV: i조정
  allPlaceInfoName.forEach((name, i) => {
    allPlaceInfo[name] = {
      titles: infoObjects[10].titles,
      dates: infoObjects[10].dates,
      thumbnailsSrc: infoObjects[10].thumbnailsSrc,
      details: infoObjects[10].details,
      infoLength: infoObjects[10].titles.length,
    };
  });

  return allPlaceInfo;
};
