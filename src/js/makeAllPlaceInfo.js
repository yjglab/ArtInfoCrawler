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
    "at_belvedereInfo", // titles, dates 미수집 오류
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
      titles: infoObjects[0].titles,
      dates: infoObjects[0].dates,
      thumbnailsSrc: infoObjects[0].thumbnailsSrc,
      details: infoObjects[0].details,
      infoLength: infoObjects[0].titles.length,
    };
  });

  return allPlaceInfo;
};
