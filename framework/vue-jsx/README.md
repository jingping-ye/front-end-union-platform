# vue-jsx

## 参考文档

- [jsx](https://github.com/vuejs/jsx)
- [jsx-next](https://github.com/vuejs/jsx-next)
- [babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx)
- [babel-preset-vue](https://github.com/vuejs/babel-preset-vue)

## 变量

> 通过`{}`表示此处是一个变量，这里注意不要与函数的`{}`冲突

```js
import Vue from "vue";
const state = Vue.observable({ msg: "hello", count: 0 });
const JsxTest = {
  name: "JsxTest",
  render() {
    return (
      <div>
        <button onClick={() => state.count++}>{state.count}</button>
        <p>
          请输入：
          <input value={state.msg} onInput={(e) => (state.msg = e.target.value)} />
        </p> <p>内容:{state.msg}</p>
      </div>
    );
  },
};

export default JsxTest;
```

## 属性绑定

> 可以类似于`html`中的属性一样使用，也可以通过`...`扩展符号使用。比如`<input {...{attrs:inputAttrs} }/>`。不可以直接使用`<input {attrs:inputAttrs}/>`,因为在 jsx 中`{}` 被认为是变量，这样就解析不了对象了。这里的属性必须符合[The Data Object In-Depth](https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth)

```js
import Vue from "vue";
const state = Vue.observable({ msg: "hello", count: 0 });
const JsxTest = {
  name: "JsxTest",
  render() {
    const inputAttrs = { type: "number", placeholder: state.count };
    return (
      <div>
        <input type='number' placeholder={state.count} />
        <input {attrs: inputAttrs} />
      </div>
    );
  },
};

export default JsxTest;
```

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

## 数据双向绑定

> 实现 v-model 效果

### 组件内部

```js
import Vue from "vue";
const state = Vue.observable({ msg: "hello", count: 0 });
const JsxTest = {
  name: "JsxTest",
  render() {
    return (
      <div>
        <p>
          手动处理：
          <input type='text' placeholder={state.msg} on={{ input: (e) => (state.msg = e.target.value) }} />
          {state.msg}
        </p>
        <p>
          使用vModel：
          <input type='text' placeholder={state.msg} vModel={state.msg} />
          {state.count}
        </p>
        <p>
          使用vModel：
          <input type='text' placeholder={state.msg} v-model={state.msg} />
          {state.count}
        </p>
        <p>
          自动去除首尾空格：
          <input type='text' placeholder={state.msg} vModel_trim={state.msg} />
          {state.count}
        </p>
        <p>
          自动去除首尾空格：
          <input type='text' placeholder={state.msg} v-model_trim={state.msg} />
          {state.count}
        </p>
      </div>
    );
  },
};

export default JsxTest;
```

### 组件供外边使用

```js

```

## 事件

```js
import Vue from "vue";
const state = Vue.observable({ msg: "hello", count: 0 });
const JsxTest = {
  name: "JsxTest",
  render() {
    const inputEvent = (e) => {
      state.msg = e.target.value;
    };

    const inputEventSet = {
      input: (e) => (state.msg = e.target.value),
      blur: () => console.log("光标移除"),
    };
    return (
      <div>
        <p>
          直接在html中使用事件名：
          <input type='text' placeholder={state.msg} onInput={inputEvent} value={state.msg} />
          {state.msg}
        </p>
        <p>
          在html中编写事件：
          <input
            type='text'
            placeholder={state.msg}
            on={{
              input: (e) => (state.msg = e.target.value),
              blur: () => {
                console.log("光标移除");
              },
            }}
            value={state.msg}
          />
          {state.msg}
        </p>
        <p>
          绑定事件集：
          <input type='text' placeholder={state.msg} on={inputEventSet} value={state.msg} />
          {state.msg}
        </p>
        <p>
          使用vue的事件绑定v-on：
          <input type='text' placeholder={state.msg} v-on:input={inputEvent} value={state.msg} />
          {state.msg}
        </p>
      </div>
    );
  },
};

export default JsxTest;
```

### 事件修饰符

> 事件修饰符参考 [事件修饰符](https://cn.vuejs.org/v2/guide/render-function.html#%E4%BA%8B%E4%BB%B6-amp-%E6%8C%89%E9%94%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6)

```js
<input
  {...{
    on: {
      "!click": () => this.doThisInCapturingMode,
      "~keyup": () => this.doThisOnce,
      "~!mouseover": () => this.doThisOnceInCapturingMode,
    },
  }}
/>
```

## v-if

```js
import Vue from "vue";
const state = Vue.observable({ msg: "hello", count: 0, isIf: true });
const JsxTest = {
  name: "JsxTest",
  render() {
    return (
      <div>
        {state.isIf ? <input value={state.msg} /> : null}
        <button onClick={() => (state.isIf = !state.isIf)}>{state.isIf ? "隐藏" : "显示"}</button>
      </div>
    );
  },
};

export default JsxTest;
```

## v-show

> 这里的 v-show 可以用`vShow`替换，由此可见`v-show`与`vShow`是相同效果，也就是说 jsx 中，连字符的命名风格和小驼峰的命名风格是互相转换的。

```js
import Vue from "vue";
const state = Vue.observable({ msg: "hello", count: 0, isShow: true });
const JsxTest = {
  name: "JsxTest",
  render() {
    return (
      <div>
        <input value={state.msg} v-show={state.isShow} />
        <button onClick={() => (state.isShow = !state.isShow)}>{state.isShow ? "隐藏" : "显示"}</button>
      </div>
    );
  },
};

export default JsxTest;
```

## 循环

```js
import Vue from "vue";
const state = Vue.observable({
  list: [
    { title: "中国", value: "1" },
    { title: "美国", value: "2" },
    { title: "日本", value: "3" },
  ],
});
const JsxTest = {
  name: "JsxTest",
  render() {
    return (
      <div>
        <select>
          {state.list.map((item) => {
            return <option value={item.value}>{item.title}</option>;
          })}
        </select>
      </div>
    );
  },
};

export default JsxTest;
```

## 动态元素及组件

> 当一个标签名是以大写开头，这种组件被认为是动态组件。（实际上，非大写开头也可以，但是编辑器识别不到，会报错）

```js
import Vue from "vue";
const state = Vue.observable({ msg: "hello", count: 0, isShow: false });
const JsxTest = {
  name: "JsxTest",
  render() {
    let Comp = state.isShow ? "el-button" : "el-tag";
    let HComp = state.isShow ? "h1" : "h2";
    return (
      <HComp>
        测试:<Comp>{state.isShow ? "Hello" : "World"}</Comp>
      </HComp>
    );
  },
};

export default JsxTest;
```

### 组件集渲染

```js
import Vue from "vue";
const state = Vue.observable({ msg: "hello", count: 0, isShow: true });
const JsxTest = {
  name: "JsxTest",
  render() {
    let compA = <h1>Hello</h1>;
    let compB = <h2>Hello</h2>;
    let compC = <h3>Hello</h3>;
    let compSet1 = [compA, compB, compC];
    let compSet2 = [compC, compB, compA];
    return <div>{state.isShow ? compSet1 : compSet2}</div>;
  },
};

export default JsxTest;
```

```js
import Vue from "vue";
const state = Vue.observable({ msg: "hello", count: 0, isShow: false });
const JsxTest = {
  name: "JsxTest",
  render() {
    let compA = <el-button size='large'>Hello</el-button>;
    let compB = <el-button size='medium'>Hello</el-button>;
    let compC = <el-button size='mini'>Hello</el-button>;
    let compSet1 = [compA, compB, compC];
    let compSet2 = [compC, compB, compA];
    return <div>{state.isShow ? compSet1 : compSet2}</div>;
  },
};

export default JsxTest;
```
