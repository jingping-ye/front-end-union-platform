# keep-alive

## 一、全部缓存

```vue
//	子组件 FirstComp.vue
<template>
  <div>
    <input v-model="str" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "",
    };
  },
};
</script>

<style></style>

```

```vue
//	子组件 SecondComp.vue
<template>
  <div>
    <div>
      {{ isShow ? "显示" : "隐藏" }}
    </div>
    <button @click="clickMe">clickMe</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    clickMe() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style></style>

```

```vue
//	父组件 index.vue
<template>
  <div>
    <button @click="componentName = 'FirstComp'">组件一</button>
    <button @click="componentName = 'SecondComp'">组件二</button>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import FirstComp from "../components/FirstComp";
import SecondComp from "../components/SecondComp";
export default {
  components: {
    FirstComp,
    SecondComp,
  },
  data() {
    return {
      componentName: "FirstComp",
    };
  },
};
</script>

<style></style>

```

## 二、部分缓存

> 可以在keep-alive上指定属性include和exclude，指定要缓存的组件

- `include` - 字符串或正则表达式。只有名称匹配的组件会被缓存。
- `exclude` - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
- `max` - 数字。最多可以缓存多少组件实例。

示例：仍然是上面的两个组件

```vue
//	缓存第一个组件，不缓存第二个组件
<template>
  <div>
    <button @click="componentName = 'FirstComp'">组件一</button>
    <button @click="componentName = 'SecondComp'">组件二</button>
    <keep-alive include="FirstComp">
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import FirstComp from "../components/FirstComp";
import SecondComp from "../components/SecondComp";
export default {
  components: {
    FirstComp,
    SecondComp,
  },
  data() {
    return {
      componentName: "FirstComp",
    };
  },
};
</script>

<style></style>

```

语法说明：

```vue
<!-- 逗号分隔字符串 -->
<keep-alive include="a,b">
  <component :is="view"></component>
</keep-alive>

<!-- 正则表达式 (使用 `v-bind`) -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- 数组 (使用 `v-bind`) -->
<keep-alive :include="['a', 'b']">
  <component :is="view"></component>
</keep-alive>
```

匹配首先检查组件自身的 `name` 选项，如果 `name` 选项不可用，则匹配它的局部注册名称 (父组件 `components` 选项的键值)。匿名组件不能被匹配。