# dotenv

## 功能

- 读取`.env`文件中的环境变量
- 将`.env`变为当前进程中的变量，通过`process.env`访问

## 安装

```shell
npm install dotenv

yarn add dotenv
```

## 用法

```env
# 假设 .env
require('dotenv').config()
```

```js
// js文件操作
require("dotenv").config();
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
```
