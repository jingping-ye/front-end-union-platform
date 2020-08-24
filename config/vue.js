const vueRouter = [
  "",
  "开发规范",
  "vue介绍",
  "开发环境",
  "生命周期",
  // "界面渲染",
  {
    title: "界面渲染",
    path: "",
    children: [
      {
        title: "插值",
        path: "/framework/vue/界面渲染/插值",
      },
      {
        title: "指令",
        path: "/framework/vue/界面渲染/指令",
      },
      {
        title: "style和class",
        path: "/framework/vue/界面渲染/style和class",
      },
      {
        title: "条件渲染",
        path: "/framework/vue/界面渲染/条件渲染",
      },
      {
        title: "列表渲染",
        path: "/framework/vue/界面渲染/列表渲染",
      },
      {
        title: "插槽",
        path: "/framework/vue/界面渲染/插槽",
      },
      {
        title: "动画",
        path: "/framework/vue/界面渲染/动画",
      },
      {
        title: "表单",
        path: "/framework/vue/界面渲染/表单",
      },
    ],
  },
  "过滤器",
  "计算属性",
  "监听器",
  "事件",
  //  组件
  {
    title: "组件",
    path: "",
    children: [
      {
        title: "组件定义",
        path: "/framework/vue/组件/组件定义",
      },
      {
        title: "组件注册",
        path: "/framework/vue/组件/组件注册",
      },
      {
        title: "组件挂载",
        path: "/framework/vue/组件/组件挂载",
      },
      {
        title: "组价通信",
        path: "/framework/vue/组件/组件通信",
      },
      {
        title: "组件类型",
        path: "/framework/vue/组件/组件类型",
      },
      {
        title: "特殊组件",
        path: "/framework/vue/组件/特殊组件",
      },
      {
        title: "keep-alive",
        path: "/framework/vue/组件/keepAlive",
      },
    ],
  },
  "混入",
  "实例属性和方法",
  "操作DOM",
];
module.exports = vueRouter;
