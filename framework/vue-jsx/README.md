## slot

### 默认 slot

> 使用`$slots.default`渲染默认的 slot,相当于`<slot></slot>`

```vue
<jsx-test> 你好 </jsx-test>
```

```js
const JsxTest = {
  name: "JsxTest",
  render() {
    return <h1>标题：{this.$slots.default}</h1>;
  },
};

export default JsxTest;
```

### 命名 slot

> 使用`$scopedSlots`实现，类似`<slot name="slotName"></slot>`

#### 一般使用

``

```vue
<jsx-test>
  <template #title> 你好 </template>
</jsx-test>
```

```js
const JsxTest = {
  name: "JsxTest",
  render() {
    return <h1>标题：{this.$scopedSlots.title()}</h1>;
  },
};
export default JsxTest;
```

### 传递参数

```vue
<jsx-test>
  <template #title="props"> 你好 {{props}} </template>
</jsx-test>
```

```js
const JsxTest = {
  name: "JsxTest",
  render() {
    return <h1>标题：{this.$scopedSlots.title({ msg: "nice" })}</h1>;
  },
};

export default JsxTest;
```

### 嵌套 slots

> 通过在 jsx 中指定组件的节点属性`scopedSlots`实现

假设存在组件`comp.vue`,需要在 jsx 中调用，最后在 jsx 在一个新的 vue 组件调用。

```vue
<template>
  <div>
    <comp>
      <template #title="props"> 你好{{ props }} </template>
    </comp>
  </div>
</template>

<script>
import comp from "@/views/jsx/comp";
export default {
  name: "JsxIndex",
  components: {
    comp,
  },
};
</script>
```

#### 使用 template 的`slot`语法

```js
// jsxTest.js
import Comp from "./comp";
const JsxTest = {
  name: "JsxTest",
  components: {
    Comp,
  },
  render() {
    let scopedSlots = { title: (scope) => this.$scopedSlots.title(scope) };
    return <comp {...{ scopedSlots }}></comp>;
  },
};

export default JsxTest;
```

```html
<jsx-test>
  <template #title="props"> 你好 {{props}} </template>
</jsx-test>
```

#### 使用渲染函数实现`slot`

```js
// jsxTest.js
import Comp from "./comp";
const JsxTest = {
  name: "JsxTest",
  components: {
    Comp,
  },
  render() {
    let scopedSlots = { title: (props) => this.$attrs.renderFunc(props) };
    return <comp {...{ scopedSlots }}></comp>;
  },
};

export default JsxTest;
```

```vue
<!-- jsxIndex.vue -->
<template>
  <div>
    <jsx-test :renderFunc="renderFunc"> </jsx-test>
  </div>
</template>

<script>
import jsxTest from "@/views/jsx/jsxTest";
export default {
  name: "JsxIndex",
  components: {
    jsxTest,
  },
  data() {
    return {
      renderFunc: (props) => <span>render部分{props.msg}</span>,
    };
  },
};
</script>
```
