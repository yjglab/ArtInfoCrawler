const spawn = require("child_process").spawn;
const result = spawn("python", ["infoCrawler.py"]);

result.stdout.on("data", function (data) {
  console.log(data.toString());
  handleBritishMsmData(data);
});
result.stderr.on("data", function (data) {
  console.log(data.toString());
});

let britishMsmInfo = {};

const handleBritishMsmData = (data) => {
  const dataStringList = [];
  let britishMsmDataString = data.toString();

  let startIdx = 0;
  let idxOfFilter = 0;
  const FILTER = "FILTER";
  while (idxOfFilter !== -1) {
    idxOfFilter = britishMsmDataString.indexOf(`${FILTER}`, startIdx);
    let dataString = britishMsmDataString.slice(startIdx, idxOfFilter); // 가공안된거
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

  britishMsmInfo = {
    titles: dataStringList[0],
    dates: dataStringList[1],
  };
  console.log(britishMsmInfo.titles);
  console.log(britishMsmInfo.dates);
};
export const main = (req, res) => {
  res.render("main", {
    pageTitle: "결과",
    britishMsmInfo: {
      titles: britishMsmInfo.titles,
      dates: britishMsmInfo.dates,
      infoLength: britishMsmInfo.titles.length,
    },
  });
};
