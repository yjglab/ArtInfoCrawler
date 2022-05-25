import ExbHallModel from "../models/ExbHallModel";

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
let it_napoliInfo = {};
let kr_natlFolkInfo = {};
let kr_modernContemporaryInfo = {};
let kr_natlInfo = {};
let jp_tokyoNatlInfo = {};
let jp_kyotoNatlInfo = {};
let jp_naraNatlInfo = {};
let gr_archaeologicalInfo = {};
let gr_thessalonikiInfo = {};
let gr_odysseusInfo = {};
let cz_pragueNatlInfo = {};
let cz_pragueNatlGalleryInfo = {};
let cz_brnoTechnicalInfo = {};
let ru_galleryInfo = {};
let ru_tretyakovInfo = {};
let ru_kremlinInfo = {};

const hallName = [
  // uk
  "British Museum",
  "London National Gallery",
  // fr
  "Centre Georges-Pompidou",
  "Orsay Museum",
  "Rodin Museum",
  // us
  "Cincinnati Art Museum",
  "The Art Institute of Chicago",
  "Museum of Fine Arts, Boston",
  // at
  "Kunsthistorisches Museum", // wien
  "Ars Electronica Center",
  "Belvedere Museum Vienna",
  // es
  "Prado National Museum",
  "Thyssen-Bornemisza National Museum",
  "Automobile Museum Malaga",
  // it
  "Uffizi Museum",
  "Doge's Palace",
  "Napoli National Archaeological Museum",
  // kr
  "National Folk Museum of Korea",
  "National Museum of Modern Art",
  "National Museum of Koera",
  // jp
  "Tokyo National Museum",
  "Kyoto National Museum",
  "Nara National Museum",
  // GR
  "National Archaeological Museum",
  "Archaeological Museum of Thessaloniki",
  "Ancient Agora Museum", // odysseus
  // CZ
  "Prague National Museum",
  "Prague National Gallery",
  "Brno Technical Museum",
  // RU
  "The State Russian Museum",
  "Tretyakov Gallery",
  "Moscow Kremlin Museum",
];

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
  it_napoliInfo,
  kr_natlFolkInfo,
  kr_modernContemporaryInfo,
  kr_natlInfo,
  jp_tokyoNatlInfo,
  jp_kyotoNatlInfo,
  jp_naraNatlInfo,
  gr_archaeologicalInfo,
  gr_thessalonikiInfo,
  gr_odysseusInfo,
  cz_pragueNatlInfo,
  cz_pragueNatlGalleryInfo,
  cz_brnoTechnicalInfo,
  ru_galleryInfo,
  ru_tretyakovInfo,
  ru_kremlinInfo,
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
  "kr_natlFolk.py",
  "kr_modernContemporary.py",
  "kr_natl.py",
  "jp_tokyoNatl.py",
  "jp_kyotoNatl.py",
  "jp_naraNatl.py",
  "gr_archaeological.py",
  "gr_thessaloniki.py",
  "gr_odysseus.py",
  "cz_pragueNatl.py",
  "cz_pragueNatlGallery.py",
  "cz_brnoTechnical.py",
  "ru_gallery.py",
  "ru_tretyakov.py",
  "ru_kremlin.py",
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
    // category: dataStringList[4],
  };
  console.log("가공됨");
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
  });
};
// DEV: i조정
export const makeInfo = (childSpawn) => {
  for (let i = 31; i < infoObjects.length; i += 1) {
    // 29
    let country = `${pyFile[i]}`.substring(0, 2); // folder 이름
    const infoData = childSpawn("python", [
      process.cwd() + `/src/pyFiles/country/${country}/${pyFile[i]}`,
    ]);
    infoData.stdout.on("data", function (data) {
      console.log("날 거");
      console.log(data.toString());
      infoObjects[i] = handleProcessInfoData(data, country);
      makeExbHallsDB(i); // db저장
    });
    infoData.stderr.on("data", function (data) {
      console.log(data.toString());
    });
  }
};
