let britishMsmDataList;
const britishMsmData = () => {
  const exibitionTitle = [];
  exibitionTitle.push();
  const exibitionDate = [];
};

const infoCrawler = () => {
  const spawn = require("child_process").spawn;
  const result = spawn("python", ["infoCrawler.py"]);

  result.stdout.on("data", function (data) {
    let britishMsmDataString = data.toString();
    console.log(britishMsmDataString);
    britishMsmDataString = britishMsmDataString.slice(
      0,
      britishMsmDataString.indexOf("---")
    );
    console.log(britishMsmDataString);
    britishMsmDataList = britishMsmDataString.split("//");

    for (let i = 0; i < britishMsmDataList.length; i += 1) {
      britishMsmDataList[i] = britishMsmDataList[i].replace(/(\r\n\r\n)/gm, "");
    }

    britishMsmDataList = britishMsmDataList
      .filter((el) => el !== "")
      .slice(0, -2);

    console.log(data.toString());
    console.log(britishMsmDataList);
  });
  result.stderr.on("data", function (data) {
    console.log(data.toString());
  });
};

export const main = (req, res) => {
  res.render("main", { pageTitle: "결과", britishMsmDataList });
};

infoCrawler();
