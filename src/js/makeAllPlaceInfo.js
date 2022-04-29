import { infoObjects } from "./makeInfo.js";

export const makeAllPlaceInfo = () => {
  // DEV: 항목 지정
  const allPlaceInfoName = [
    "uk_britishInfo",
    "uk_londonNatlInfo",
    "uk_victoriaAlbertInfo",
    "fr_pompidouInfo",
    "fr_orsayInfo",
    "fr_lodinInfo",
    "us_cincinnatiInfo",
    "at_wienInfo",
    "es_pradoInfo",
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
