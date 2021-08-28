# npm-script 定制

## 开发环境运行

```shell
"serve": "vue-cli-service serve",
```

## 打包源代码

```shell
"build": "vue-cli-service build --dest prod && compress prod",
```

### 效果

1. 根目录下生成 prod 文件夹

2. 根目录生成`prod.20210824140030.zip`的压缩包

### 提前

1. 安装`vue-dist-compress`包

```shell
npm i vue-dist-compress -D
```

## 打包源代码并生成源码分析报告

```shell
"build:report": "vue-cli-service build --dest prod-report --report",
```

### 效果

1. 生成 prod-report 文件夹
2. prod-report 文件夹下存在文件`report.html`

## lint 代码

```shell
"lint": "vue-cli-service lint",
```

## 省查项目项目使用的 webpack 配置

```shell
"inspect:dev": "vue-cli-service inspect --mode development >> webpack.config.development.js",
"inspect:prod": "vue-cli-service inspect --mode production >> webpack.config.production.js",
```

## 指定镜像源安装依赖

```shell
"install": "rimraf node_modules && npm i kingstar-ui --registry=http://npm.kingstarfintech.com/npm/repository/kingstar-group/ -S",
```

## 指定镜像源

```shell
"registry:kingstar": "npm config set registry http://npm.kingstarfintech.com/npm/repository/kingstar-group/",
"registry:taobao": "npm config set registry https://registry.npm.taobao.org/",
"registry": "npm config set registry https://registry.npmjs.org/"
```
