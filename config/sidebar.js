const reactRouter = require("./react"); // react的路由
const vue = require("./vue/vue"); // vue的路由
const vueRouter = require("./vue/router"); // vue-router的路由
const wxRouter = require("./wx"); // wx的路由
const vuexRouter = require("./vue/vuex"); // vuex的路由
const axiosRouter = require("./vue/axios"); // axios的路由
const uniAppRouter = require("./uni-app"); // uni-app的路由
const startVueRouter = require("./first-step/vue");
const sidebar = {
  "/css/": ["", "one"],
  "/func/": ["", "普通工具函数", "操作对象数组"],
  "/framework/react/": [...reactRouter],
  "/framework/vue/": [...vue],
  "/framework/router/": [...vueRouter],
  "/framework/vuex/": [...vuexRouter],
  "/framework/axios/": [...axiosRouter],
  "/framework/wx/": [...wxRouter],
  "/framework/uni-app/": [...uniAppRouter],
  "/tool/": ["git/", "npm/", "nvm/", "vscode/"],
  "/specs/": ["", "工作量评估", "代码审核", "其他"],
  "/first-step/start-vue/": [...startVueRouter],
};
module.exports = sidebar;
