# vuex-persistedstate

## 安装

1. npm 方式

```shell
npm install --save vuex-persistedstate
```

2. UMD 引入方式

```html
<script src="https://unpkg.com/vuex-persistedstate/dist/vuex-persistedstate.umd.js"></script>
```

引入后，可以使用`window.createPersistedState`调用。

## 用法

### 基础用法

```js
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = new Vuex.Store({
  // ...
  plugins: [createPersistedState()],
});
```

### 示例

#### 示例 1：普通使用

- 默认缓存全部 vuex 声明变量（包括模块化数据）
- 使用 localStorage 存储（在 Application/Storage/Local Storage 中可查看）
- 首次加载时，将不会触发`set`方法。也就是不会将 vuex 变量存储到客户端缓存中。
- 页面初次加载时，将会触发`get`方法，也就会访问 localStorage，默认访问`key`为`vuex`。如果`key`存在，并且值不为空，那么将值赋值给内部的 vuex 存储。
  对于一个对象，对于 localStorage 中存储的值将进行如下处理
  - 初始值为`undefined`、`null`、`{}`，不赋值,不影响内部 vuex 初始值
  - 存在多余的键，将自动创建一个与该键同名的内部 vuex 变量。比如 vuex 中声明的值为`{ "count": 0, "userInfo": { "username": "admin", "password": "123" } }`。`localStorage`中存储的值为`{"count":15,"userInfo":{"username":"admin","password":"123","other":"123"}}`。加载页面后，vuex 中的内部值将变为`{ "count": 15, "userInfo": { "username": "admin", "password": "123", "other": "123" } }`
  - 缺少键，相对于 vuex 内部声明变量缺少响应键，那么不影响内部 vuex 变量存储，所在的操作为不赋值。

```js
// ~/src/store/index.js
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    userInfo: {
      username: "admin",
      password: "123",
    },
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
```

```vue
<!--index.vue-->
<template>
  <div>
    {{ $store.state.count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
<script>
export default {
  name: "Test",
  methods: {
    test() {
      console.log("Hello World!");
    },
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>
```

#### 示例 2：使用 js-cookie

```shell
npm i js-cookie -D
```

```js
// ~/src/store/index.js
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    userInfo: {
      username: "admin",
      password: "123",
    },
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  ],
});
```

#### 示例 3：使用 secure-ls

```shell
npm i secure-ls -D
```

```js
// ~/src/store/index.js
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    userInfo: {
      username: "admin",
      password: "123",
    },
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
```

#### 示例 4：存储指定值

```js
// ~/src/store/user.js
const state = {
  userInfo: {
    username: "admin",
    password: "123",
  },
  userModule: "true",
};

const getters = {};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
```

以下存储了 user 模块中的 userInfo 的 username 变量、全局 count 变量。查看存储结果为`{"user":{"userInfo":{"username":"admin"}},"count":11}`

```js
// ~/src/store/index.js
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import user from "./user";
Vue.use(Vuex);

const presistedState = createPersistedState({
  paths: ["user.userInfo.username", "count"],
});
export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
  },
  actions: {},
  modules: {
    user,
  },
  plugins: [presistedState],
});
```

#### 示例 5：在 Nuxt.js 中使用

使用 localStorage(在客户端使用)

```js
// nuxt.config.js
plugins: [{ src: "~/plugins/persistedState.client.js" }];
```

```js
// ~/plugins/persistedState.client.js

import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'yourkey',
    paths: [...]
    ...
  })(store)
}
```

使用 cookies(通用客户端和服务器端)
安装`cookie`和`js-cookie`

```shell
npm install --save cookie js-cookie
# or
yarn add cookie js-cookie
```

```js
// nuxt.config.js
...
plugins: [{ src: '~/plugins/persistedState.js'}]
...

```

```js
// ~/plugins/persistedState.js

import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';
import cookie from 'cookie';

export default ({ store, req }) => {
    createPersistedState({
        paths: [...],
        storage: {
            getItem: (key) => {
                // See https://nuxtjs.org/guide/plugins/#using-process-flags
                if (process.server) {
                    const parsedCookies = cookie.parse(req.headers.cookie);
                    return parsedCookies[key];
                } else {
                    return Cookies.get(key);
                }
            },
            // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
            setItem: (key, value) =>
                Cookies.set(key, value, { expires: 365, secure: false }),
            removeItem: key => Cookies.remove(key)
        }
    })(store);
};
```

## API

调用方法：`createPersistedState([options])`，以下为`options`说明

- `key <String>`：存储持久状态的键。默认为`vuex`。
- `paths <Array>`：存储指定值的路径。如果没有给出路径，则所有的状态将被持久化(vuex)。如果给出一个空数组，则不保持任何数据。指定路径时，必须使用点表示法。如果使用模块，那么在声明变量时，必须先声明模块名称。例如：“auth.user” 。默认为`undefined`。
- `reducer <Function>`: 一个函数，将被调用以根据给定的路径将状态减少到持久化。默认包括值。
- `subscriber <Function>`：一个被调用来设置mutation的函数。默认为`store => handler => store.subscribe(handler)`.
- `storage <Object>`: 代替（或结合）`getState`和`setState`。默认为 localStorage。
- `getState <Function>`：将被调用以重新注入先前持久状态的函数。默认使用`storage`.
- `setState <Function>`：将被调用以设置持久化状态给的函数。默认使用`storage`.
- `filter <Function>`：将被调用以过滤`setState`最终将在存储上触发的任何mutation的函数。默认为`() => true`.
- `overwrite <Boolean>`: 重新注入 时，是否使用`getState`直接覆写存在的state, 而不是使用`deepmerge`合并两个对象。默认为`false`.
- `arrayMerger <Function>`：重新注入state时，合并数组所用函数。默认为`function (store, saved) { return saved }`（保存状态替换提供状态）。
- `rehydrated <Function>`: 重新注入完成之后调用。使用`Nuxt.js`时非常有用，当注入注入持久化state时一个异步行为。默认为`store => {}`
- `fetchBeforeUse <Boolean>`：一个布尔值，指示在使用插件之前是否应该从存储中获取状态。默认为`false`.
- `assertStorage <Function>`：确保存储可用的可覆盖函数，在插件初始化时触发。默认是在给定的 Storage 实例上执行 Write-Delete 操作。请注意，默认行为可能会引发错误（如`DOMException: QuotaExceededError`）。

## 其他

### 自定义存储

- 可以使用localStorage、cookie实现
- 实际上，任何遵守Storage协议(包含getItem、setItem、removeItem等api)的对象都可以传递。比如在服务器端渲染时，可以使用[dom-storage](https://www.npmjs.com/package/dom-storage)

```js
createPersistedState({ storage: window.sessionStorage });
```

### 混淆本地存储数据

- 为了防止数据暴露，可以采用一些工具对vuex在`localStorage`中的数据进行混淆，参见[示例 3：使用 secure-ls](#示例 3：使用 secure-ls)

### LocalForage

- [LocalForage](https://github.com/localForage/localForage)无法使用。那是因为所有的getters和setter必须是同步的，但是`LocalForage`是异步的。

## 参考文档

- [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate)
