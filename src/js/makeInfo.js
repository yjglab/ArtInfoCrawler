let uk_britishInfo = {};
let uk_londonNatlInfo = {};
let fr_pompidouInfo = {};
let fr_orsayInfo = {};
let fr_lodinInfo = {};
let us_cincinnatiInfo = {};
let us_chicagoInfo = {};
let us_bostonInfo = {};
let at_wienInfo = {};
let at_arsElectronicaInfo = {};
let at_belvedereInfo = {};
let es_pradoInfo = {};
let es_thyssenInfo = {};
let es_malagaAutomovilInfo = {};
let it_uffiziInfo = {};
let it_ducaleInfo = {};

export const infoObjects = [
  uk_britishInfo,
  uk_londonNatlInfo,
  fr_pompidouInfo,
  fr_orsayInfo,
  fr_lodinInfo,
  us_cincinnatiInfo,
  us_chicagoInfo,
  us_bostonInfo,
  at_wienInfo,
  at_arsElectronicaInfo,
  at_belvedereInfo,
  es_pradoInfo,
  es_thyssenInfo,
  es_malagaAutomovilInfo,
  it_uffiziInfo,
  it_ducaleInfo,
];
const pyFile = [
  "uk_british.py",
  "uk_londonNatl.py",
  "fr_pompidou.py",
  "fr_orsay.py",
  "fr_lodin.py",
  "us_cincinnati.py",
  "us_chicago.py",
  "us_boston.py",
  "at_wien.py",
  "at_arsElectronica.py",
  "at_belvedere.py",
  "es_prado.py",
  "es_thyssen.py",
  "es_malagaAutomovil.py",
  "it_uffizi.py",
  "it_ducale.py",
  "it_napoli.py",
];

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

  // 텍스트 가공된 관 정보s
  let processedInfo = {
    country: country,
    titles: dataStringList[0],
    dates: dataStringList[1],
    thumbnailsSrc: dataStringList[2],
    details: dataStringList[3],
  };
  console.log("가공됨");
  console.log(processedInfo.titles);
  console.log(processedInfo.dates);
  console.log(processedInfo.thumbnailsSrc);
  console.log(processedInfo.details);

  return processedInfo;
};

// DEV: i조정
export const makeInfo = (childSpawn) => {
  for (let i = 0; i < 1; i += 1) {
    let country = `${pyFile[i]}`.substring(0, 2); // folder 이름
    const infoData = childSpawn("python", [
      process.cwd() + `/src/pyFiles/country/${country}/${pyFile[i]}`,
    ]);
    infoData.stdout.on("data", function (data) {
      console.log("날 거");
      console.log(data.toString());
      infoObjects[i] = handleProcessInfoData(data, country);
    });
    infoData.stderr.on("data", function (data) {
      console.log(data.toString());
    });
  }
};
