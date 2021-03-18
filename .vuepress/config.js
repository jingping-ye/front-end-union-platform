const path = require("path");
const nav = require("../config/nav");
const sidebar = require("../config/sidebar");
console.log("sidebar", sidebar);
module.exports = {
  theme: "antdocs",
  title: "风车 | 前端同一构建平台",
  description: "快速构建文档系统",
  port: "8888",
  themeConfig: {
    backToTop: true,
    logo: "/logo.png",
    sidebar: { ...sidebar },
    nav: [...nav],
  },
  plugins: [],
};
