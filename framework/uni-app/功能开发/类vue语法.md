# 类vue语法

uni-app的语法与vue的语法类似，参加[试用Vue.js注意事项](https://uniapp.dcloud.io/use)。我们这里主要说他们的不同。

## 1. 生命周期

`uni-app`的生命周期与vue不同，他分为两种类型的生命周期，包括：应用生命周期和页面生命周期。在页面生命周期中，容易混淆的是`onLoad`、`onShow`、`onReady`,我们将其与`vue`的生命周期相比较。

| uni-app | vue     | 描述                                           |
| ------- | ------- | ---------------------------------------------- |
| onShow  | -       | 从后台进入前台显示；只要页面显示都会触发。     |
| onLoad  | created | 监听页面加载；在这里我们可以接受上个页面的值。 |
| onReady | mounted | 监听页面初次渲染完成。                         |

## 2. 动态组件

`uni-app`不支持动态组件，所以不能使用`<component :is="xx"></component>`的方式来实现组件的切换，如果有实现动态组件的需求，只能使用`v-if`来控制。

## 3. 获取节点位置信息

在`vue`中，我们可以通过`this.$refs`来获取节点，进而获取节点信息。但是`uni-app`并不支持此功能。如果要获取节点，可以使用以下方法。（特别注意的是：在页面内和组件内获取节点的方式不同）。

在页面内获取节点：

```js

<template>
  <view class="test-comp">
    <view @click="clickMe" id="test">测试组件</view>
  </view>
</template>

<script>
export default {
  methods: {
    clickMe() {
      let NodesRef = uni.createSelectorQuery().select("#test");
      console.log("theNode", NodesRef);
      NodesRef.boundingClientRect((data) => {
        console.log("得到布局位置信息" + JSON.stringify(data));
      }).exec();
    },
  },
};
</script>
```

在组件内获取节点

```js
<template>
  <view class="test-item" id="test-item">
    <view @click="clickMe">点击我</view>
  </view>
</template>

<script>
export default {
  name: "TestItem",
  methods: {
    clickMe() {
      let NodesRef = this.createSelectorQuery().select("#test-item");
      console.log("theNode", NodesRef);
      NodesRef.boundingClientRect((data) => {
        console.log("得到布局位置信息" + JSON.stringify(data));
      }).exec();
    },
  },
};
</script>
```

## 4. 条件编译

> 这是uni-app独有的功能，是为了解决在不同端上，需编译不同代码实现不同功能的需求。

参照：[条件编译](https://uniapp.dcloud.io/platform?id=%e6%9d%a1%e4%bb%b6%e7%bc%96%e8%af%91)

## 5. 使用本地背景图片

通常，我们使用如下方式就可以设置本地背景图片：

```css
 .test2 {
     background-image: url('~@/static/logo.png');
 }
```

但是小程序中不支持在css中使用本地文件，包括本地的背景图和字体文件。解决方法如下：

- 将图片转换为base64调用。
- 等项目将图片上传至远程地址后调用远程地址。
- 使用`<image >`标签调用本地图片。
- 在`template`中写入style，但是这种方式只支持小于`40kb`。这个时候，`uni-app`会将其转为base64格式。

```js
 <view class="user-info" :style="{ backgroundImage: `url(${backgroundImg})` }">
 </view>

import backgroundImg from "@/static/img/background.png";

export default{
    data(){
        return {
            backgroundImg,
        }
    }
}
```

