# vue-class-component

## 地址

[npm地址](https://www.npmjs.com/package/vue-class-component)

[document address](https://class-component.vuejs.org/)

## 安装

###  1. Vue CLI 方式

   （1）建立新项目时选择TypeScript

   （2）选择TypeScript后选择class-style component syntax

###  2. 手动安装

（1）安装`vue-class-component`

```shell
# npm 安装
npm i vue-class-component -S

# yarn 安装
yarn add --save vue vue-class-component
```

(2) 构建配置

目前只支持[ECMAScript stage 1 decorators](https://github.com/tc39/proposal-decorators);ECMAScript stage 2 decorators不支持

1)项目根目录下新建`tsconfig.json`文件

```js
{
  "compilerOptions": {
    "target": "es5",
    "module": "es2015",
    "moduleResolution": "node",
    "strict": true,
    "experimentalDecorators": true // 转译修饰符语法
  }
}
```

2）安装babel相关插件

```shell
$ npm install --save-dev @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties
```

3)项目根目录下新建`.babelrc`

```js
{
  "plugins": [
    ["@babel/proposal-decorators", { "legacy": true }],
    ["@babel/proposal-class-properties", { "loose": true }]
  ]
}
```
### 3. CDN
```html
<!-- UMD build -->
<script src="https://unpkg.com/vue-class-component@latest/dist/vue-class-component.js"></script>

<!-- UMD minified build -->
<script src="https://unpkg.com/vue-class-component@latest/dist/vue-class-component.min.js"></script>

<!-- ES Module build -->
<script src="https://unpkg.com/vue-class-component@latest/dist/vue-class-component.esm.browser.js"></script>

<!-- ES Module minified build -->
<script src="https://unpkg.com/vue-class-component@latest/dist/vue-class-component.esm.browser.min.js"></script>
```

### 4. 不同的构建产出物

开发环境：

- `vue-class-component.js` (UMD)
- `vue-class-component.common.js` (CommonJS)
- `vue-class-component.esm.js` (ES Module for bundlers)
- `vue-class-component.esm.browser.js` (ES Module for browsers)

生产环境：

- `vue-class-component.min.js` (UMD)
- `vue-class-component.esm.browser.min.js` (ES Module for browsers)

- https://www.npmjs.com/package/vuex-persistedstate)

## 用法

### Class Component

`@Component`修饰符用来创建一个Vue组件

```js
import Vue from 'vue'
import Component from 'vue-class-component'

// HelloWorld class will be a Vue component
@Component
export default class HelloWorld extends Vue {}
```

#### Data





初始的`data`被声明为类的属性

```vue
<template>
  <div>{{ message }}</div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // Declared as component data
  message = 'Hello World!'
}
</script>
```

如果初始值是`undefined`,类属性将无响应变化。这时可以用`null`替代或者直接使用`data`hook

```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // `message` will be reactive with `null` value
  message = null

  // See Hooks section for details about `data` hook inside class.
  data() {
    return {
      // `hello` will be reactive as it is declared via `data` hook.
      hello: undefined
    }
  }
}
```

#### Methods

`methods`直接声明为类的原型方法

```vue
<template>
  <button v-on:click="hello">Click</button>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // Declared as component method
  hello() {
    console.log('Hello World!')
  }
}
</script>
```

#### Computed Properties

Computed属性声明为class属性中的`getter`和`setter`方法

```vue
<template>
  <input v-model="name">
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  firstName = 'John'
  lastName = 'Doe'

  // Declared as computed property getter
  get name() {
    return this.firstName + ' ' + this.lastName
  }

  // Declared as computed property setter
  set name(value) {
    const splitted = value.split(' ')
    this.firstName = splitted[0]
    this.lastName = splitted[1] || ''
  }
}
</script>
```

#### Hooks

`data`和`render`和其他生命周期hooks可以被直接声明为class的原型方法，但是无法被直接调用。当我们自定义方法时，也要避免方法名称与这个方法名冲突

```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // Declare mounted lifecycle hook
  mounted() {
    console.log('mounted')
  }

  // Declare render function
  render() {
    return <div>Hello World!</div>
  }
}
```

#### Other Options

其他组件的选项配置，通过`@Component`修饰符方法实现

```vue
<template>
  <OtherComponent />
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import OtherComponent from './OtherComponent.vue'

@Component({
  // Specify `components` option.
  // See Vue.js docs for all available options:
  // https://vuejs.org/v2/api/#Options-Data
  components: {
    OtherComponent
  }
})
export default class HelloWorld extends Vue {}
</script>
```

### 其他Hooks

使用Vue Router类似的插件的实现。`Component.registerHooks`允许注册Hooks

```js
// class-component-hooks.js
import Component from 'vue-class-component'

// Register the router hooks with their names
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])
```

注册完hooks后，class将其作为原型方法

```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // The class component now treats beforeRouteEnter,
  // beforeRouteUpdate and beforeRouteLeave as Vue Router hooks
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter')
    next()
  }

  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  }

  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')
    next()
  }
}
```

建议额外写一个单独的文件用来注册类似的hooks。为了保证执行顺序，可以在`main.js`的顶部引入该文件.

```js
// main.js

// Make sure to register before importing any components
import './class-component-hooks'

import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  render: h => h(App)
})
```

### 自定义修饰符

使用`createDecorator`

语法:`createDecorator(callback:(options:Object, key:String, parameterIndex:Number):void)`

- options: Vue component options对象。
- key:修饰符应用的 属性或者方法的名称。
- paremeterIndex: 修饰符参数的索引。

```js
// decorators.js
import { createDecorator } from 'vue-class-component'

// Declare Log decorator.
export const Log = createDecorator((options, key) => {
  // Keep the original method for later.
  const originalMethod = options.methods[key]

  // Wrap the method with the logging logic.
  options.methods[key] = function wrapperMethod(...args) {
    // Print a log.
    console.log(`Invoked: ${key}(`, ...args, ')')

    // Invoke the original method.
    originalMethod.apply(this, args)
  }
})
```

使用修饰符如下：

```js
import Vue from 'vue'
import Component from 'vue-class-component'
import { Log } from './decorators'

@Component
class MyComp extends Vue {
  // It prints a log when `hello` method is invoked.
  @Log
  hello(value) {
    // ...
  }
}
```

假设`this.hello(42)`

最终输出

```
Invoked: hello( 42 )
```

### extends和mixins

#### extend

使用`class component`使用原始的类继承语法

```js
// super.js
import Vue from 'vue'
import Component from 'vue-class-component'

// Define a super class component
@Component
export default class Super extends Vue {
  superValue = 'Hello'
}
```

```js
import Super from './super'
import Component from 'vue-class-component'

// Extending the Super class component
@Component
export default class HelloWorld extends Super {
  created() {
    console.log(this.superValue) // -> Hello
  }
}
```

-  一个`Super`类必须是一个`class component`
- `Vue`构造器必须是祖先类
- 一个`Super`类必须被`@Component`修饰

#### Mixins

- 通过`mixins`方法实现
- 所有的`mixins`必须声明为`class component`

```js
// mixins.js
import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare mixins as the same style as components.
@Component
export class Hello extends Vue {
  hello = 'Hello'
}

@Component
export class World extends Vue {
  world = 'World'
}
```

```js
import Component, { mixins } from 'vue-class-component'
import { Hello, World } from './mixins'

// Use `mixins` helper function instead of `Vue`.
// `mixins` can receive any number of arguments.
@Component
export class HelloWorld extends mixins(Hello, World) {
  created () {
    console.log(this.hello + ' ' + this.world + '!') // -> Hello World!
  }
}

```

### Class Component注意事项

#### this

1. 使用回调函数时，访问this无效（原因：实例化时this是一个proxy对象）;只需要直接定义一个方法。`Vue`会自动绑定实例。

错误的做法：

 ```js
 import Vue from 'vue'
 import Component from 'vue-class-component'
 
 @Component
 export default class MyComp extends Vue {
   foo = 123
 
   // DO NOT do this
   bar = () => {
     // Does not update the expected property.
     // `this` value is not a Vue instance in fact.
     this.foo = 456
   }
 }
 ```

正确的做法：

```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class MyComp extends Vue {
  foo = 123

  // DO this
  bar() {
    // Correctly update the expected property.
    this.foo = 456
  }
}
```

### constructor

1. 初始化时请勿使用`constructor`, 而是应该使用生命周期hooks替代 

错误的做法：

```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Posts extends Vue {
  posts = []

  // DO NOT do this
  constructor() {
    fetch('/posts.json')
      .then(res => res.json())
      .then(posts => {
        this.posts = posts
      })
  }
}
```
正确的做法：
```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Posts extends Vue {
  posts = []

  // DO this
  created() {
    fetch('/posts.json')
      .then(res => res.json())
      .then(posts => {
        this.posts = posts
      })
  }
}
```

## Typescript 指导

### 定义Props

- 使用`Vue.extend`定义props

```vue
<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

// Define the props by using Vue's canonical way.
const GreetingProps = Vue.extend({
  props: {
    name: String
  }
})

// Use defined props by extending GreetingProps.
@Component
export default class Greeting extends GreetingProps {
  get message(): string {
    // this.name will be typed
    return 'Hello, ' + this.name
  }
}
</script>
```

如果有其他的`super class`和`mixins`来扩展，使用`mixins`

```vue
<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'
import Super from './super'

// Define the props by using Vue's canonical way.
const GreetingProps = Vue.extend({
  props: {
    name: String
  }
})

// Use `mixins` helper to combine defined props and a mixin.
@Component
export default class Greeting extends mixins(GreetingProps, Super) {
  get message(): string {
    // this.name will be typed
    return 'Hello, ' + this.name
  }
}
</script>
```


#### property type定义

```vue
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapGetters, mapActions } from 'vuex'

// Interface of post
import { Post } from './post'

@Component({
  computed: mapGetters([
    'posts'
  ]),

  methods: mapActions([
    'fetchPosts'
  ])
})
export default class Posts extends Vue {
  // Declare mapped getters and actions on type level.
  // You may need to add `!` after the property name
  // to avoid compilation error (definite assignment assertion).

  // Type the mapped posts getter.
// 断言posts不是null或者undefined
  posts!: Post[]

  // Type the mapped fetchPosts action.
  fetchPosts!: () => Promise<void>

  mounted() {
    // Use the mapped getter and action.
    this.fetchPosts().then(() => {
      console.log(this.posts)
    })
  }
}
```

#### refs

```js
<template>
  <input ref="input">
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class InputFocus extends Vue {
  // annotate refs type.
  // The symbol `!` (definite assignment assertion)
  // is needed to get rid of compilation error.
  $refs!: {
    input: HTMLInputElement
  }

  mounted() {
    // Use `input` ref without type cast.
    this.$refs.input.focus()
  }
}
</script>
```

#### Hooks

Vue Class Component 提供内建的hook类型，比如`data`或者`render`,但是必须在`main.js`中引入，也可以自己声明

```jss
// main.ts
import 'vue-class-component/hooks' // import hooks type to enable auto-complete
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')
```

```js
import Vue from 'vue'
import { Route, RawLocation } from 'vue-router'

declare module 'vue/types/vue' {
  // Augment component instance type
  interface Vue {
    beforeRouteEnter?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
    ): void

    beforeRouteLeave?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
    ): void

    beforeRouteUpdate?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
    ): void
  }
}
```

#### 声明组件

```typescript
// Annotate the decorator with the component type 'Post' so that `this` type in
// the decorator argument becomes 'Post'.
@Component<Post>({
  watch: {
    postId(id: string) {
      this.fetchPost(id) // -> No errors
    }
  }
})
class Post extends Vue {
  postId: string

  fetchPost(postId: string): Promise<void> {
    // ...
  }
}
```

