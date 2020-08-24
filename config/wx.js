const wxRouter = [
  "",
  "项目一般目录结构",
  "开发规范",
  "项目配置和页面配置",
  "样式",
  "生命周期",
  {
    title: "界面渲染",
    path: "",
    children: [
      {
        title: "style和class",
        path: "/framework/wx/界面渲染/style和class",
      },
      {
        title: "条件渲染",
        path: "/framework/wx/界面渲染/条件渲染",
      },
      {
        title: "列表渲染",
        path: "/framework/wx/界面渲染/列表渲染",
      },
      {
        title: "wxs过滤器",
        path: "/framework/wx/界面渲染/wxs过滤器",
      },
    ],
  },
  "事件",
  "模板",
  "自定义组件",
  "分包",
  "其他",
  "常见模式",
];
module.exports = wxRouter;
