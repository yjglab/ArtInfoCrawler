let uk_britishInfo = {};
let us_cincinnatiInfo = {};
let fr_pompidouInfo = {};
let uk_londonNatlInfo = {};
let at_wienInfo = {};
let es_pradoInfo = {};

export const infoObjects = [
  uk_britishInfo,
  us_cincinnatiInfo,
  fr_pompidouInfo,
  uk_londonNatlInfo,
  at_wienInfo,
  es_pradoInfo,
];
const pyFile = [
  "uk_british.py",
  "us_cincinnati.py",
  "fr_pompidou.py",
  "uk_londonNatl.py",
  "at_wien.py",
  "es_prado.py",
];

// 텍스트 가공 함수
const handleProcessInfoData = (data) => {
  const dataStringList = [];
  let crawledDataString = data.toString();
  let startIdx = 0;
  let idxOfFilter = 0;
  const FILTER = "FILTER";

  while (idxOfFilter !== -1) {
    idxOfFilter = crawledDataString.indexOf(`${FILTER}`, startIdx);
    let dataString = crawledDataString.slice(startIdx, idxOfFilter); // 가공안된거
    dataStringList.push(dataString);
    startIdx = idxOfFilter + `${FILTER}}`.length;
  }

  for (let i = 0; i < dataStringList.length; i += 1) {
    dataStringList[i] = dataStringList[i].split("//");
    for (let j = 0; j < dataStringList[i].length; j += 1) {
      dataStringList[i][j] = dataStringList[i][j].replace(/(\r\n\r\n)/gm, "");
    }
    dataStringList[i] = dataStringList[i].filter((el) => el !== "");
  }

  // 텍스트 가공된 관 정보
  let processedInfo = {
    titles: dataStringList[0],
    dates: dataStringList[1],
  };
  console.log(processedInfo.titles);
  console.log(processedInfo.dates);

  return processedInfo;
};
export const makeInfo = (childSpawn) => {
  for (let i = 0; i < pyFile.length; i += 1) {
    const infoData = childSpawn("python", [
      process.cwd() + `/src/pydata/${pyFile[i]}`,
    ]);
    infoData.stdout.on("data", function (data) {
      // console.log(data.toString());
      infoObjects[i] = handleProcessInfoData(data);
    });
    infoData.stderr.on("data", function (data) {
      // console.log(data.toString());
    });
  }
};

// export const makeInfos = (
//   britishSpawn,
//   louvreSpawn,
//   pompidouSpawn,
//   londonNatlSpawn
// ) => {
//   const britishMsmData = britishSpawn("python", [
//     process.cwd() + "/src/pydata/british.py",
//   ]);
//   const louvreMsmData = louvreSpawn("python", [
//     process.cwd() + "/src/pydata/louvre.py",
//   ]);
//   const pompidouMsmData = pompidouSpawn("python", [
//     process.cwd() + "/src/pydata/pompidou.py",
//   ]);
//   const londonNatlData = londonNatlSpawn("python", [
//     process.cwd() + "/src/pydata/london_natl.py",
//   ]);

//   const handleProcessInfoData = (data) => {
//     const dataStringList = [];
//     let crawledDataString = data.toString();
//     let startIdx = 0;
//     let idxOfFilter = 0;
//     const FILTER = "FILTER";

//     while (idxOfFilter !== -1) {
//       idxOfFilter = crawledDataString.indexOf(`${FILTER}`, startIdx);
//       let dataString = crawledDataString.slice(startIdx, idxOfFilter); // 가공안된거
//       dataStringList.push(dataString);
//       startIdx = idxOfFilter + `${FILTER}}`.length;
//     }

//     for (let i = 0; i < dataStringList.length; i += 1) {
//       dataStringList[i] = dataStringList[i].split("//");
//       for (let j = 0; j < dataStringList[i].length; j += 1) {
//         dataStringList[i][j] = dataStringList[i][j].replace(/(\r\n\r\n)/gm, "");
//       }
//       dataStringList[i] = dataStringList[i].filter((el) => el !== "");
//     }

//     let msmInfo = {
//       titles: dataStringList[0],
//       dates: dataStringList[1],
//     };
//     console.log(msmInfo.titles);
//     console.log(msmInfo.dates);

//     return msmInfo;
//   };

//   britishMsmData.stdout.on("data", function (data) {
//     // console.log(data.toString());
//     uk_britishInfo = handleProcessInfoData(data);
//   });
//   britishMsmData.stderr.on("data", function (data) {
//     // console.log(data.toString());
//   });

//   louvreMsmData.stdout.on("data", function (data) {
//     // console.log(data.toString());
//      = handleProcessInfoData(data);
//   });
//   louvreMsmData.stderr.on("data", function (data) {
//     // console.log(data.toString());
//   });

//   pompidouMsmData.stdout.on("data", function (data) {
//     // console.log(data.toString());
//     fr_pompidouInfo = handleProcessInfoData(data);
//   });
//   pompidouMsmData.stderr.on("data", function (data) {
//     // console.log(data.toString());
//   });

//   londonNatlData.stdout.on("data", function (data) {
//     // console.log(data.toString());
//     uk_londonNatlInfo = handleProcessInfoData(data);
//   });
//   londonNatlData.stderr.on("data", function (data) {
//     // console.log(data.toString());
//   });
// };
