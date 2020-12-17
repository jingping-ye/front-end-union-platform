# 实现`swiperTab`

目前为止,` uni-app`和`uView`的官方并没有实现一个成熟的`swiperTab`组件，而`swiperTab`又是一个常用的功能。所以，本文介绍如何实现`swiperTab`功能。参考代码如下：

```js
<template>
  <view>
    <u-tabs-swiper
      :list="list"
      :current="current"
      :is-scroll="false"
      activeColor="#D6B382"
      ref="tabs"
      @change="change"
      font-size="26"
      swiperWidth="750"
    ></u-tabs-swiper>
    <swiper
      :current="swiperCurrent"
      @transition="transition"
      @animationfinish="animationfinish"
      :style="containerHeightStyle"
    >
      <swiper-item v-for="item in list" :key="item.name">
        <scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
          {{ item.name }}
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  name: "SwiperTab",
  components: {},
  props: {},
  watch: {},
  data() {
    return {
      list: [
        {
          name: "选项卡1",
        },
        {
          name: "选项卡2",
        },
        {
          name: "选项卡3",
        },
        {
          name: "选项卡4",
        },
      ],
      current: 0,
      dx: 0,
      containerHeightStyle: "",
    };
  },
  onLoad() {},
  onReady() {
    this.calContainerHeight();
  },
  computed: {},
  methods: {
    calContainerHeight() {
      let NodesRef = this.createSelectorQuery().select("#container-top-line");
      NodesRef.boundingClientRect((data) => {
        const top = data.top;
        const bottom = this.$u.sys().windowHeight;
        const containerHeight = bottom - top;
        this.containerHeightStyle = `min-height:${containerHeight}px`;
      }).exec();
    },
    reachBottom() {
      console.log("滚动到底部");
    },
    change(index) {
      this.current = index;
    },
    transition({ detail: { dx } }) {
      this.$refs.tabs.setDx(dx);
    },
    animationfinish({ detail: { current } }) {
      this.$refs.tabs.setFinishCurrent(current);
      this.current = current;
    },
  },
};
</script>
<style lang="scss" scoped>
.tab-container {
  background: #f2f6fc;
}
</style>
```

