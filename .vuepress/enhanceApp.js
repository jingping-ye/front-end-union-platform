//  代码高亮
import VueHighlightJS from "vue-highlight.js";
import "vue-highlight.js/lib/allLanguages";
import "highlight.js/styles/tomorrow-night-eighties.css";

//  引入ui库:ant-design-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

//  引入复制库
import VueClipboard from "vue-clipboard2";

// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(VueHighlightJS);
  Vue.use(Antd);
  Vue.use(VueClipboard);
};
