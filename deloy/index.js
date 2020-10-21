const scpClient = require("scp2");
const ora = require("ora");
const serverList = require("./serverInfo");
const spinner = ora("正在发布...");

spinner.start();

scpClient.scp("docs/", ...serverList[0], (err) => {
  spinner.stop();
  if (err) {
    console.log("发布失败！");
  } else {
    console.log("成功发布！");
  }
});
