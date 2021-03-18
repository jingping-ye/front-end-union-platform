# API

## 1. 发起请求

> 发起请求有两种写法，一种是配置式，一种是别名方法。一般来说，我们更多的会采用别名方法的形式，因为可以尽量避免写重复的代码。

### 1.1 GET 请求

#### 1.1.1 配置式

##### 语法

```js
axios({
  method: String,
  url: String,
  params: Object,
  headers: Object,
  responseType: String,
});
```

##### 示例

```js
axios({
  method: "get",
  url: "/user/detail",
  params: {
    id: 123,
  },
  headers: {
    Authorization: `Bearer sdasdasdasda`,
  },
  responseType: "blob",
});
```

#### 1.1.2 别名方法

##### 语法

```js
axios.get(url:String, {params:Object, headers:Object, ...moreConfig:Object})
```

##### 示例

```js
// 请求参数
const params = {
    id:123,
};

//	请求头部
const  = {
      Authorization:`Bearer qweqwe`
};

//	更多配置
const moreConfig = {
    responseType:"blob",
}

//	发起请求
axios.get("/user/detail",{params, headers, ...moreConfig))
    .then(res =>{console.log("res===",res)})
    .catch(err=>{console.log("res===",res)});
```

### 1.2 POST 请求

#### 1.2.1 配置式

##### 语法

```js
axios({
    method,
    url,
    data,
    headers,
    ....
})
```

##### 示例

```js
axios({
  method: "post",
  url: "/user/detail",
  data: {
    id: 123,
  },
  headers: {
    Authorization: `Bearer asdasdsad`,
  },
});
```

#### 1.2.2 别名方法

##### 语法

```js
axios.post((url: String), (data: Object), (config: Object));
```

##### 示例

```js
//	传入的数据
const data = {
  id: 123,
};

//	配置
const config = {
  headers: {
    Authorization: `Bearer adasdasd`,
    "Content-type": "application/json",
  },
};

//	发起请求
axios
  .post("/user/detail", data, config)
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
```

### 1.3 PUT 请求

#### 1.3.1 配置式

##### 语法

```js
axios({
    method,
    url,
    data,
    headers,
    ....
})
```

##### 示例

```js
axios({
  method: "update",
  url: "/user/update",
  data: {
    id: 123,
  },
  headers: {
    Authorization: `Bearer asdasdsad`,
  },
});
```

#### 1.3.2 别名方法

##### 语法

```js
axios.put((url: String), (data: Object), (config: Object));
```

##### 示例

```js
//	传入的数据
const data = {
  id: 123,
};

//	配置
const config = {
  headers: {
    Authorization: `Bearer adasdasd`,
    "Content-type": "application/json",
  },
};

//	发起请求
axios
  .put("/user/update", data, config)
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
```

### 1.4 DELETE 请求

#### 1.4.1 配置式

##### 语法

```js
axios({
    method,
    url,
    data,
    headers,
    ....
})
```

##### 示例

```js
axios({
  method: "delete",
  url: "/user/delete",
  data: {
    id: 123,
  },
  headers: {
    Authorization: `Bearer qweqewqe`,
  },
})
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
```

#### 1.4.2 别名方法

##### 语法

```js
axios.delete(url:String, {data:Object, headers:Object, ...moreConfig:Object}})
```

##### 示例

```js
axios
  .delete("/user/delete", {
    data: {
      id: 123,
    },
    headers: {
      Authorizaiton: `Bearer qweqwewq`,
    },
  })
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
```

## 2. 创建实例

### 语法

```js
axios.create(config);
```

### 示例

```js
const http = axios.create({
  baseURL: "https://10.0.0.1/api/",
  timeout: 5000,
  headers: {
    Authorization: `Bearer erearea`,
  },
});
```

### 其他

与创建实例类似的，有一种设置默认值的方法，不推荐使用。如想使用，请参考：

[Global axios defaults](https://github.com/axios/axios#global-axios-defaults)。

注意点：

- 如果实例、全局默认值同时存在，那么优先顺序为：实例 >全局默认值> axios 自身的默认值

## 3. 拦截器

> 拦截器即在 axios 发起请求时和获得请求时插入的回调函数。

### 语法

```js
import axios from "axios";
const http = axios.create();
// 添加请求拦截器
http.interceptors.request.use(
  function(config) {
    // 处理请求配置，一定要return
    return config;
  },
  function(error) {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  function(response) {
    // 处理响应，一定要return
    return response;
  },
  function(error) {
    // 处理响应错误
    return Promise.reject(error);
  }
);
```

## 4. 请求配置项

### 4.1 配置参数

| 参数               | 说明                                                           | 类型     | 可选值                                                                                                              | 默认值       |
| ------------------ | -------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------- | ------------ |
| url                | 请求的服务器 URL                                               | String   |                                                                                                                     |              |
| method             | 请求方法                                                       | String   | get\|post\|update\|delete\|...                                                                                      | get          |
| baseURL            | 基础 url 前缀，设置后，会与请求 url 进行拼接                   | String   |                                                                                                                     |              |
| transformRequest   | 修改请求数据，可以将请求数据修改成特定的格式，如：XML 或者 CSV | Function |                                                                                                                     |              |
| transformResponse  | 修改响应数据                                                   | Function |                                                                                                                     |              |
| headers            | 请求头                                                         | Object   |                                                                                                                     |              |
| params             | 请求数据，用于 GET                                             | Object   |                                                                                                                     |              |
| paramsSerializer   | 序列化 params 参数                                             | Object   |                                                                                                                     |              |
| data               | 请求数据，用于 POST，PUT,DELETE                                | Any      | string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams,\[FormData, File, Blob](浏览器),\[Stream](Node) |              |
| timeout            | 超时时间                                                       | Number   |                                                                                                                     |              |
| withCredentials    | 跨域请求时是否需要使用凭证                                     | Boolean  |                                                                                                                     | false        |
| adapter            | 定义处理请求                                                   | Function |                                                                                                                     |              |
| auth               | HTTP 基础认证字段                                              | Object   |                                                                                                                     |              |
| responseType       | 服务器响应数据类型                                             | String   | arraybuffer,blob,document,json,text,stream                                                                          | json         |
| responseEncoding   | 服务器响应数据编码                                             | String   |                                                                                                                     | utf8         |
| xsrfCookieName     | xsrf token 名称                                                | String   |                                                                                                                     | XSRF-TOKEN   |
| xsrfHeaderName     | xsrf 携带 token 值的 header 的名字                             | String   |                                                                                                                     | X-XSRF-TOKEN |
| onUploadProgress   | 文件上传进度                                                   | Function |                                                                                                                     |              |
| onDownloadProgress | 文件下载进度                                                   | Function |                                                                                                                     |              |
| maxContentLength   | 允许的响应内容的最大尺寸                                       | Number   |                                                                                                                     |              |
| validateStatus     | HTTP 响应校验                                                  | Function |                                                                                                                     |              |
| maxRedirects       | 最大重定向数据                                                 | Number   |                                                                                                                     | 5            |
| socketPath         | UNIX Socket 路径                                               | String   |                                                                                                                     | null         |
| httpAgent          | 自定义代理                                                     | Object   |                                                                                                                     |              |
| httpsAgent         | 自定义代理                                                     | Object   |                                                                                                                     |              |
| proxy              | 代理服务器配置                                                 | Object   |                                                                                                                     |              |
| cancelToken        | 取消请求用的 token                                             | Object   |                                                                                                                     |              |

## 4. 响应结构

| 参数       | 说明                                       | 类型   | 可选值 | 默认值 |
| ---------- | ------------------------------------------ | ------ | ------ | ------ |
| data       | 响应报文体                                 | Any    |        |        |
| status     | HTTP 状态码                                | Number |        |        |
| statusText | HTTP 状态信息                              | String |        |        |
| headers    | 响应头                                     | Object |        |        |
| config     | 原始请求配置信息                           | Object |        |        |
| request    | 请求参数。实际的 XMLHttpRequest 请求信息。 | Object |        |        |
