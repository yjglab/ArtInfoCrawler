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
    "it_uffiziInfo",
    "it_ducaleInfo",
    "it_napoliInfo",
  ];
  const allPlaceInfo = {};

  // DEV: i조정
  allPlaceInfoName.forEach((name, i) => {
    allPlaceInfo[name] = {
      titles: infoObjects[16].titles,
      dates: infoObjects[16].dates,
      thumbnailsSrc: infoObjects[16].thumbnailsSrc,
      details: infoObjects[16].details,
      infoLength: infoObjects[16].titles.length,
    };
  });

  return allPlaceInfo;
};
