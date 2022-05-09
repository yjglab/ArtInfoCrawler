import { infoObjects } from "./makeInfo.js";

export const makeAllPlaceInfo = () => {
  const allPlaceInfoName = [
    // "uk_britishInfo",
    "uk_londonNatlInfo",
    "fr_pompidouInfo",
    "fr_orsayInfo",
    "fr_lodinInfo",
    "us_cincinnatiInfo",
    "us_chicagoInfo",
    "us_bostonInfo",
    "at_wienInfo",
    "at_arsElectronicaInfo",
    "at_belvedereInfo", // titles, dates 오류
    "es_pradoInfo",
    "es_thyssenInfo",
    "es_malagaAutomovilInfo",
    "it_uffiziInfo",
    "it_ducaleInfo",
  ];
  const allPlaceInfo = {};

  // DEV: i조정
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
