# template

## 1. template的作用

​	`template`不会产生任何的DOM标签，适用于需要在语法上将一块儿真正的DOM元素产生，因此，使用`template`可以避免渲染无意义的DOM元素,特别是`div`元素的滥用

```vue
<div v-if="false">
    <div>
        12313
    </div>
</div>
```

使用`template`替换

```vue
<template v-if="false">
    <div>
        123123
    </div>
</template>
```

## 2. 要点

### 2.1 template的嵌套

- template支持嵌套

- 因为`template`相当于只是产生了代码上的包裹层，只会产生真正的DOM元素，因此template不可以嵌套在根模板下。如下操作是不被允许的。

  ```vue
  <template>
    <template>
      <div>
        <h1>组件</h1>
      </div>
    </template>
  </template>
  ```

### 2.1 template和slot







