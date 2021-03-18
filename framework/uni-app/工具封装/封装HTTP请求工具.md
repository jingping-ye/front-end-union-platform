# 封装 HTTP 请求工具

> 使用 uView 的 http 请求工具进行封装，参考：http://uviewui.com/js/http.html；我们这里假设后台凭token认证。

1. 建立 http 拦截器：新建`src/plugins/http.plugin.js`，写入如下内容：

```js
const install = (Vue, vm) => {
  Vue.prototype.$u.http.setConfig({
    baseUrl: "", // 项目的baseUrl
    showLoading: true, // 超过响应时间是否显示loading
    loadingText: "加载中....", // loading提示文字
    loadingTime: 800, // 超过800秒后显示loading
    originalData: true, // 是否直接返回后台服务返回数据，如果为false，那么uView会自动解析返回数据
    header: {
      // 以json的格式进行传输
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  //  请求拦截
  Vue.prototype.$u.http.interceptor.request = (config) => {
    console.log("config", config); // 输出请求

    let token = vm.$store.state.token; // 取出vuex中的token
    if (token.length > 0) {
      config.header.token = token; // 在头部中加入token
    }

    return config;
  };

  //  响应拦截
  Vue.prototype.$u.http.interceptor.response = (res) => {
    console.log("response", res); // 输出响应信息
    if (res.statusCode == 200) {
      // 正常响应（返回状态码200）
      let responseBody = res.data;
      if (responseBody.code == 0) {
        // 后台响应数据的code为0，代表服务正常返回。
        if (responseBody.data) {
          // 返回响应数据
          return responseBody.data;
        } else {
          return "";
        }
      } else if (responseBody.code == 1) {
        // 后台响应数据的code为1，代码无权限情况。提示并跳转到登录页面。
        vm.$u.toast("验证失败，请重新登录！");
        setTimeout(() => {
          vm.$Router.replaceAll({ name: "Login" });
        }, 500);
        return false;
      } else {
        // 其他情况：服务异常，进行提示。
        vm.$u.toast(responseBody.message);
        return false;
      }
    } else {
      vm.$u.toast("服务异常，请稍后再试！");
      return false;
    }
  };
};
export default {
  install,
};
```

2. 在`main.js`中引入

```js
import httpPlugin from "./plugins/http.plugin.js";

const app = new Vue({
  ...App,
  store,
});

// 使用http插件，传入app实例
Vue.use(httpPlugin, app);
```
