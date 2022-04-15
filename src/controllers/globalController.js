let britishMsmDataList;
const britishMsmData = (britishMsmDataString) => {
  const info = {
    titles: "",
  };
};
let arr = [];
const infoCrawler = () => {
  const spawn = require("child_process").spawn;
  const result = spawn("python", ["infoCrawler.py"]);

  result.stdout.on("data", function (data) {
    console.log(data.toString());
    let britishMsmDataString = data.toString();

    let startIdx = 0;
    let idxOfFilter = 0;
    const FILTER = "FILTER";
    while (idxOfFilter !== -1) {
      idxOfFilter = britishMsmDataString.indexOf(`${FILTER}`, startIdx);
      let dataString = britishMsmDataString.slice(startIdx, idxOfFilter);
      arr.push(dataString);
      startIdx = idxOfFilter + `${FILTER}}`.length;
    }

    console.log("fffff");
    for (let i = 0; i < arr.length; i += 1) {
      arr[i] = arr[i].split("//");
      for (let j = 0; j < arr[i].length; j += 1) {
        arr[i][j] = arr[i][j].replace(/(\r\n\r\n)/gm, "");
      }
      arr[i] = arr[i].filter((el) => el !== "");
    }

    console.log(arr[0]);
    console.log(arr[1]);
    // console.log(data.toString());
    // console.log(britishMsmDataList);
  });
  result.stderr.on("data", function (data) {
    console.log(data.toString());
  });
};

export const main = (req, res) => {
  res.render("main", { pageTitle: "결과", dataList: arr[1] });
};

infoCrawler();
