const uniAppRouter = [
  "",
  "前提准备",
  {
    title: "项目开发",
    path: "",
    children: [
      {
        title: "开发规范",
        path: "/framework/uni-app/开发规范",
      },
      {
        title: "项目搭建",
        path: "/framework/uni-app/项目搭建",
      },
      {
        title: "安装依赖",
        path: "/framework/uni-app/安装依赖",
      },
      {
        title: "工具封装",
        children: [
          {
            title: "封装HTTP请求工具",
            path: "/framework/uni-app/工具封装/封装HTTP请求工具",
          },
          {
            title: "封装vuex持久化工具",
            path: "/framework/uni-app/工具封装/封装vuex持久化工具",
          },
        ],
      },
      {
        title: "其他",
        children: [
          {
            title: "路由使用",
            path: "/framework/uni-app/其他/路由使用",
          },
          {
            title: "网络请求",
            path: "/framework/uni-app/其他/网络请求",
          },
          {
            title: "自动注册",
            path: "/framework/uni-app/其他/自动注册",
          },
        ],
      },
    ],
  },
  {
    title: "功能开发",
    children: [
      {
        title: "类vue语法",
        path: "/framework/uni-app/功能开发/类vue语法",
      },
      {
        title: "实现swiperTab",
        path: "/framework/uni-app/功能开发/实现swiperTab.md",
      },
    ],
  },
  "打包发布",
  "资源",
];
module.exports = uniAppRouter;
