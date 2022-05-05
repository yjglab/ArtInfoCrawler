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
    "at_belvedereInfo", // titles, dates 오류
    "es_pradoInfo",
    "es_thyssenInfo",
    "es_malagaAutomovilInfo",
  ];
  const allPlaceInfo = {};

  // DEV: i조정
  allPlaceInfoName.forEach((name, i) => {
    allPlaceInfo[name] = {
      titles: infoObjects[13].titles,
      dates: infoObjects[13].dates,
      thumbnailsSrc: infoObjects[13].thumbnailsSrc,
      details: infoObjects[13].details,
      infoLength: infoObjects[13].titles.length,
    };
  });

  return allPlaceInfo;
};
