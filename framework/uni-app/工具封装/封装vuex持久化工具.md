# 封装vuex持久化工具

要点：

- 使用`vuex-persistedstate`实现数据持久化
- 使用`u-secure-storage`实现数据加密

1. 安装`vuex-persistedstate`和`u-secure-storage`

```bash
# 安装vuex-persistedstate
npm i vuex-persistedstate

# 安装u-secure-storage
npm i u-secure-storage
```

2. 新建`store/index.js`文件，写入如下内容：

```js
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import USecureStorage from "u-secure-storage";
const uSecureStorage = new USecureStorage();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [
   //	实现数据持久化
    createPersistedState({
      storage: {
        getItem: (key) => uSecureStorage.get(key),
        setItem: (key, value) => uSecureStorage.set(key, value),
        removeItem: (key) => uSecureStorage.remove(key),
      },
      paths: [], // 指定加密的变量
    }),
  ],
});

```

