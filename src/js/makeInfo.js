import ExbHallModel from "../models/ExbHallModel";
import infoObjects from "./infoObjects";
import hallName from "./hallName";
import pyFiles from "./pyFiles";
import ExbModel from "../models/ExbModel";

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
      dataStringList[i][j] = dataStringList[i][j].replace(/(\r\n)/gm, "");
      if (i == 2) {
        dataStringList[i][j] = dataStringList[i][j].replace(/(\n)/gm, "");
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
    details: dataStringList[4],
    links: dataStringList[3],
    categories: dataStringList[5],
  };
  console.log("====가공 데이터====");
  console.log(processedInfo.titles);
  console.log(processedInfo.dates);
  console.log(processedInfo.thumbnailsSrc);
  console.log(processedInfo.details);
  console.log(processedInfo.links);
  console.log(processedInfo.categories);

  return processedInfo;
};
// DB 생성 && 업데이트
const makeExbHallsDB = async (i) => {
  await ExbHallModel.deleteMany({ hallName: hallName[i] });
  await ExbModel.deleteMany({ hall: hallName[i] });
  const exbModelArray = [];
  for (let p = 0; p < infoObjects[i].titles.length; p += 1) {
    await ExbModel.deleteOne({ title: infoObjects[i].titles[p] });
    const exbModel = await ExbModel.create({
      title: infoObjects[i].titles[p],
      date: infoObjects[i].dates[p],
      thumbnailSrc: infoObjects[i].thumbnailsSrc[p],
      detail: infoObjects[i].details[p],
      hall: hallName[i],
      link: infoObjects[i].links[p],
      category: infoObjects[i].categories[p],
    });
    exbModelArray.push(exbModel);
  }
  await ExbHallModel.create({
    data: exbModelArray,
    country: infoObjects[i].country,
    hallName: hallName[i],
    category: infoObjects[i].categories[0],
    infoLength: infoObjects[i].titles.length,
  });
};
// DEV: i조정
export const makeInfo = (childSpawn) => {
  for (let i = 47; i < 48; i += 1) {
    // infoObjects.length
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
