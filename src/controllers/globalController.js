const spawn = require("child_process").spawn;
const britishMsmData = spawn("python", ["infoCrawler.py"]);
const louvreMsmData = spawn("python", ["louvre.py"]);

let britishMsmInfo = {};
let louvreMsmInfo = {};

const handleMsmData = (data) => {
  const dataStringList = [];
  let msmDataString = data.toString();
  let startIdx = 0;
  let idxOfFilter = 0;
  const FILTER = "FILTER";

  while (idxOfFilter !== -1) {
    idxOfFilter = msmDataString.indexOf(`${FILTER}`, startIdx);
    let dataString = msmDataString.slice(startIdx, idxOfFilter); // 가공안된거
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

  let msmInfo = {
    titles: dataStringList[0],
    dates: dataStringList[1],
  };
  console.log(msmInfo.titles);
  console.log(msmInfo.dates);

  return msmInfo;
};
britishMsmData.stdout.on("data", function (data) {
  // console.log(data.toString());
  britishMsmInfo = handleMsmData(data);
});
britishMsmData.stderr.on("data", function (data) {
  // console.log(data.toString());
});

louvreMsmData.stdout.on("data", function (data) {
  console.log(data.toString());
  louvreMsmInfo = handleMsmData(data);
});
louvreMsmData.stderr.on("data", function (data) {
  console.log(data.toString());
});

export const main = (req, res) => {
  res.render("main", {
    pageTitle: "결과",
    britishMsmInfo: {
      titles: britishMsmInfo.titles,
      dates: britishMsmInfo.dates,
      infoLength: britishMsmInfo.titles.length,
    },
    louvreMsmInfo: {
      titles: louvreMsmInfo.titles,
      dates: louvreMsmInfo.dates,
      infoLength: louvreMsmInfo.titles.length,
    },
  });
};
