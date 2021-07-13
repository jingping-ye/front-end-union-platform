# Vue 介绍

## 一、简介

Vue 是由 Even You 个人创建的 MVVM 前端框架，主要有以下三个特点。

- 渐进式：你不必有多深的 JavaScript 基础，也无需对 Vue 有过深的了解，即可用 Vue 开发项目。
- 组件式：相比于以前一个页面由一个`html`文件组成。Vue 将界面拆成不同的一个个模块，由一个个单独的`vue`文件维护，这一个个模块称之为组件（如图一）。
- 响应式：视图和数据绑定，数据的改变会驱动视图随之改变。

![组件化](./images/component.png)

 （图一：组件化）

## 二、兼容性

只支持`IE9`及以上的浏览器

## 三、生态系统

- [Vue Devtools](https://github.com/vuejs/vue-devtools)

- [Vue CLI](https://cli.vuejs.org/zh/)

- [Vue Router]()
- [Vuex](https://router.vuejs.org/zh/)
- [axios](http://www.axios-js.com/zh-cn/)



## 四、性能

- 相同数据的变更：Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。

