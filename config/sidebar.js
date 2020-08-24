const reactRouter = require("./react"); // react的路由
const vueRouter = require("./vue"); // vue的路由
const wxRouter = require("./wx"); // wx的路由
const sidebar = {
  "/css/": ["", "one"],
  "/func/": ["", "普通工具函数", "操作对象数组"],
  "/framework/react/": [...reactRouter],
  "/framework/vue/": [...vueRouter],
  "/framework/wx/": [...wxRouter],
  "/tool/": ["", "git/", "npm/", "nvm/", "vscode/"],
  "/specs/": ["", "工作量评估", "代码审核", "其他"],
};
module.exports = sidebar;
