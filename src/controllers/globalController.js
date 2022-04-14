let pythonData;

const infoCrawler = () => {
  const spawn = require("child_process").spawn;
  const result = spawn("python", ["infoCrawler.py"]);

  result.stdout.on("data", function (data) {
    pythonData = data.toString();
    console.log(data.toString());
  });
  result.stderr.on("data", function (data) {
    console.log(data.toString());
  });
};

export const main = (req, res) => {
  res.render("main", { pageTitle: "결과", pythonData });
};

infoCrawler();
