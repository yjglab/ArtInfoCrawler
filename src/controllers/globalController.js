let pythonData;
let pythonDataList;

const infoCrawler = () => {
  const spawn = require("child_process").spawn;
  const result = spawn("python", ["infoCrawler.py"]);

  result.stdout.on("data", function (data) {
    pythonData = data.toString();
    pythonDataList = pythonData.split("//");
    for (let i = 0; i < pythonDataList.length; i += 1) {
      pythonDataList[i] = pythonDataList[i].replace(/(\r\n\r\n)/gm, "");
    }
    pythonDataList = pythonDataList.filter((el) => el !== "").slice(0, -2);
    console.log(data.toString());
    console.log(pythonDataList);
  });
  result.stderr.on("data", function (data) {
    console.log(data.toString());
  });
};

export const main = (req, res) => {
  res.render("main", { pageTitle: "결과", pythonDataList });
};

infoCrawler();
