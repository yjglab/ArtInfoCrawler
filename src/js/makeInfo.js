import ExbHallModel from "../models/ExbHallModel";
import infoObjects from "./infoObjects";
import hallName from "./hallName";
import pyFiles from "./pyFiles";

// 텍스트 가공 함수
const handleProcessInfoData = (data, country) => {
  const dataStringList = [];
  let crawledDataString = data.toString();
  let startIdx = 0;
  let idxOfFilter = 0;
  const FILTER = "FILTER";
  const SPLITER = "SPLITER";
  while (idxOfFilter !== -1) {
    idxOfFilter = crawledDataString.indexOf(`${FILTER}`, startIdx);
    let dataString = crawledDataString.slice(startIdx, idxOfFilter); // 가공안된거
    dataStringList.push(dataString);
    startIdx = idxOfFilter + `${FILTER}`.length;
  }

  for (let i = 0; i < dataStringList.length; i += 1) {
    dataStringList[i] = dataStringList[i].split(SPLITER);
    for (let j = 0; j < dataStringList[i].length; j += 1) {
      dataStringList[i][j] = dataStringList[i][j].replace(/(\r\n\r\n)/gm, "");
      if (i == 0) {
        dataStringList[i][j] = dataStringList[i][j].replace(/(\r\n)/gm, "");
      }
      if (i == 1) {
        dataStringList[i][j] = dataStringList[i][j].replace(/(\r\n)/gm, "");
      }
      if (i == 2) {
        dataStringList[i][j] = dataStringList[i][j].replace(/(\r\n)/gm, "");
        dataStringList[i][j] = dataStringList[i][j].replace(/(\n)/gm, "");
      }
      if (i == 3) {
        dataStringList[i][j] = dataStringList[i][j].replace(/(\r\n)/gm, "");
      }
    }
    dataStringList[i] = dataStringList[i].filter((el) => el !== "");
  }

  // 텍스트 가공된 관 정보
  if (dataStringList[1] == "") {
    // 빈 값이면 영구 전시임
    for (let _ = 0; _ < dataStringList[0].length; _ += 1) {
      dataStringList[1].push("Permanent");
    }
  }
  let processedInfo = {
    country: country,
    titles: dataStringList[0],
    dates: dataStringList[1],
    thumbnailsSrc: dataStringList[2],
    details: dataStringList[3],
    // category: dataStringList[4],
    // link:
  };
  console.log("====가공 데이터====");
  console.log(processedInfo.titles);
  console.log(processedInfo.dates);
  console.log(processedInfo.thumbnailsSrc);
  console.log(processedInfo.details);
  // console.log(processedInfo.category);

  return processedInfo;
};
// DB 생성 && 업데이트
const makeExbHallsDB = async (i) => {
  await ExbHallModel.deleteMany({ titles: infoObjects[i].titles });
  await ExbHallModel.create({
    country: infoObjects[i].country,
    titles: infoObjects[i].titles,
    dates: infoObjects[i].dates,
    thumbnailsSrc: infoObjects[i].thumbnailsSrc,
    details: infoObjects[i].details,
    hallName: hallName[i],
    // category: infoObjects[i].category,
    // link: infoObjects[i].link,
  });
};
// DEV: i조정
export const makeInfo = (childSpawn) => {
  for (let i = 47; i < infoObjects.length; i += 1) {
    let country = `${pyFiles[i]}`.substring(0, 2); // folder 이름
    const infoData = childSpawn("python", [
      process.cwd() + `/src/pyFiles/country/${country}/${pyFiles[i]}`,
    ]);
    infoData.stdout.on("data", function (data) {
      console.log("----로우 데이터----");
      console.log(data.toString());
      infoObjects[i] = handleProcessInfoData(data, country);
      makeExbHallsDB(i); // db저장
    });
    infoData.stderr.on("data", function (data) {
      console.log(data.toString());
    });
  }
};
