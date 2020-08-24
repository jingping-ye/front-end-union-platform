const reactRouter = [
  "",
  "开发规范",
  "react生态系统一览",
  "reactJs知识体系",
  "安装",
  "createClass与class语法",
  "生命周期",
  "jsx语法",
  // "界面渲染",
  {
    title: "界面渲染",
    path: "",
    children: [
      {
        title: "自定义属性",
        path: "/framework/react/界面渲染/自定义属性",
      },
      {
        title: "style和class",
        path: "/framework/react/界面渲染/style和class",
      },
      {
        title: "条件渲染",
        path: "/framework/react/界面渲染/条件渲染",
      },
      {
        title: "列表渲染",
        path: "/framework/react/界面渲染/列表渲染",
      },
    ],
  },
  "事件",
  "表单",
  {
    title: "组件",
    path: "",
    children: [
      {
        title: "state",
        path: "/framework/react/组件/state",
      },
      {
        title: "prop",
        path: "/framework/react/组件/prop",
      },
      {
        title: "创建组件的方法",
        path: "/framework/react/组件/state",
      },
      {
        title: "父子组件通信",
        path: "/framework/react/组件/父子组件通信",
      },
      {
        title: "分类",
        path: "",
        children: [
          {
            title: "有状态组件与无状态组件",
            path: "/framework/react/组件/分类/有状态组件与无状态组件",
          },
          {
            title: "受控组件与非受控组件",
            path: "/framework/react/组件/分类/受控组件与非受控组件",
          },
        ],
      },
      {
        title: "组件的设计",
        path: "/framework/react/组件/组件的设计",
      },
    ],
  },
  // "组件",
  "ref",
  "操作DOM",
  "使用Fragment",
  "性能优化",
  "es5和es6",
  {
    title: "其他",
    path: "",
    children: [
      {
        title: "bootstrap",
        path: "/framework/react/其他/bootstrap",
      },
      {
        title: "IE",
        path: "/framework/react/其他/IE",
      },
    ],
  },
];
module.exports = reactRouter;
