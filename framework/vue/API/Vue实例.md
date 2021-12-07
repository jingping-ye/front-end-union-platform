# Vue实例

> 注意，每个vue组件相当于一个实例，在vue组件中，我们通过`this.[property]`的形式访问到的是组件内部的属性。

## 实例 property

>  以`$`开头

- [vm.$data](https://cn.vuejs.org/v2/api/#vm-data)
- [vm.$props](https://cn.vuejs.org/v2/api/#vm-props)
- [vm.$el](https://cn.vuejs.org/v2/api/#vm-el)
- [vm.$options](https://cn.vuejs.org/v2/api/#vm-options)
- [vm.$parent](https://cn.vuejs.org/v2/api/#vm-parent)
- [vm.$root](https://cn.vuejs.org/v2/api/#vm-root)
- [vm.$children](https://cn.vuejs.org/v2/api/#vm-children)
- [vm.$slots](https://cn.vuejs.org/v2/api/#vm-slots)
- [vm.$scopedSlots](https://cn.vuejs.org/v2/api/#vm-scopedSlots)
- [vm.$refs](https://cn.vuejs.org/v2/api/#vm-refs)
- [vm.$isServer](https://cn.vuejs.org/v2/api/#vm-isServer)
- [vm.$attrs](https://cn.vuejs.org/v2/api/#vm-attrs)
- [vm.$listeners](https://cn.vuejs.org/v2/api/#vm-listeners)

### vm.$data

> Vue 实例观察的数据对象。Vue 实例代理了对其 data 对象 property 的访问。

- 相当于是vue组件里面配置的`data`属性
- 通过`this.$data`可以访问到当前组件配置的`data`
- 当使用`Object.freeze()`时，将阻止修改property，此时无法追踪变化

```bash
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})
<div id="app">
  <p>{{ foo }}</p>
  <!-- 这里的 `foo` 不会更新！ -->
  <button v-on:click="foo = 'baz'">Change it</button>
</div>
```



### vm.$el

> 访问组件生成的DOM元素，从根DOM元素开始

- Vue 实例使用的根 DOM 元素;
- 在组件内访问时，将访问到组件的根DOM元素
- 可以通过`this.$refs.subComp.$el`的形式访问子组件。

```js
<subComp ref="myComp"></subComp>

this.$el; // 访问当前组件的DOM元素
this.$refs.myComp.$el; // 访问子组件的DOM元素
```

## 实例方法/数据

- [vm.$watch](https://cn.vuejs.org/v2/api/#vm-watch)
- [vm.$set](https://cn.vuejs.org/v2/api/#vm-set)
- [vm.$delete](https://cn.vuejs.org/v2/api/#vm-delete)

### vm.$watch

```js
vm.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
})
```



