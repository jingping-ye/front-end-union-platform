# 语义化版本和npm version

## 语义化版本的简单描述

首先，语义化版本的简单描述如下。

版本管理中，主要存在三个版本：主版本(major)、次版本(minor)、补丁/修复版本(patch)

- major: 全面变更了API,API是不兼容的。 
- minor: 变更了功能，是可以向后兼容的。 
- patch: 修复了bug, bug是向后兼容的。 

另外，可以在[major.minor.patch]后面添加预发布(pre-release)和版本元信息(build metadata)

## npm version 影响范围说明

- 更新package.json中的version
- 更新package-lock.json中的version
- 如果存在的话，更新npm-shrinkwrap.json。
- 如果在 git repo 中运行，它还会创建一个版本提交和标记

## npm version 命令说明

npm内置了语义化版本管理命令`npm version`,`npm version`包含的子命令如下

- major:主版本
- minor: 功能版本
- patch: bug修复版 
- premajor:预发布主版本：主版本号加1，将功能版本号、bug修复版本号和预发布版本号重置为0 
- preminor:预发布功能版本: 功能版本号加1，bug修复版本号和预发布版本号重置为0
- prepatch:预发布修复版本: bug修复版本号加1,预发布版本号重置为0
- prerelease:预发布版本 
  - 非预发布版本，执行效果同`npm version prepatch`
  - 预发布版本，预发布版本号加1

假设当前版本为1.0.0

### 更新主版本 npm version major
```shell
npm version major

v2.0.0
```

### 更新功能版本 npm version minor
```shell
npm version minor

v1.1.0
```

### 更新修复版本 npm version patch

```shell
npm version patch

v1.0.1
```

### 更新预发布主版本 npm version premajor

```shell
npm version premajor

v2.0.0-0
```

### 更新预发布功能版本  npm version preminor

```shell
npm version preminor

v1.1.0-0
```

### 更新预发布修复版本 npm version prepatch

```shell
npm version prepatch

v1.0.1-0
```

### 发布预发布版本 npm version prerelease

```shell
npm version prelease

v1.0.1-0



### 使用git中的版本标签

```shell
npm version from-git
```