# 理解和学习 vue 中的若干概念

## 回顾：HTML 中的属性和事件

在学习 vue 之前，我们先回顾一下 HTML 中标签和事件。

![HTML标签结构](./img/html-tag.png)

- button 元素有很多已定义的属性，比如`disabled`等。
- 我们可以通过`data-*`实现自定义属性。
- button 上可以使用已经定义好的事件，他们都是以`on`开头。

## 概念 1：数据绑定

在 JavaScript 中，我们要去动态改变数据，需要先获取到元素 DOM，接下来改变 DOM 的某个属性来实现。vue 则不需如此麻烦，vue 使用`mvc`模型，将数据模型与视图进行绑定。在此之上，vue 还实现的了双向绑定。

1. 文本插值 ——内容渲染

```js
<span>{{sSex===1?"男":"女"}}</span>

data(){
    return {
        sSex:"1"
    }
}
```

- 将数据放置在 data 中，vue 将监听每一项数据的变动，自动去改变数据。

2. 双向绑定

```js
请输入学生姓名：<input v-model="sName"></input>

data(){
    return {
        sName:""
    }
}
```

3. 绑定属性

```js
<button v-bind:disabled="isDisabled">点击我</button>

// 简写：使用`:`代替`v-bind:`
<button :disabled="isDisabled">点击我</button>

data(){
    return {
        isDisabled:true
    }
}
```

其他：

- 我们可以在绑定的属性或者内容中进行简单的表达式计算，但是不能是语句。
- 比如：

```js
<span :class="stockPrice>openPrice? 'red':'green' ">{{stockPrice}}</span>

data(){
    return {
        stockPrice:"11.00",
        openPrice:"10.00"
    }
}
```

4. 特色语法

(1) v-for

```js
<span v-for="(item,index) in list">{{item.name}}</span>

data(){
    return {
        studentList:[
            {
                id:1,
                name:"张三",
            }，
            {
            	id:2,
            	name:"李四"
            }
        ]
    }
}
```

(2) v-if 和 v-show

```js
<span v-if="isRender">找找我</span>
<span v-show="isDisplay">看到我了吗？</span>

data(){
    return {
        isRender:false,
        isDisplay:false
    }
}
```

- v-if 和 v-show 的不同：v-show 使用的是 css 的`diplay:none`实现。v-if 是真正销毁元素。

## 练习 1：简单实现我们的学生列表

## 概念 2：事件

vue 中的事件与 Javascript 大约一致，转变的只是写法的不同。

比如

```js
<button onClick="clickMe()">点击我</button>

---> vue
<button v-on:click="clickMe()">点击我</button>
// 使用@代替v-on:
<button @click="clickMe()">点击我</button>

methods:{
    clickMe(){
        console.log("点击我....")
    }
}
```

## 小练习 2：结合事件实现一个简单的效果

- 编写一个程序模拟网站提交时提交按钮的变化：
  - 提交按钮的内容由“提交”变为“提交中...”，一直到提交过程完毕。
  - 提交按钮由点击变为不可点击，一直到提交完毕。
  - 假设提交过程为`2s`

## 概念 3：特殊的事件——生命周期

| 事件                            | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| beforeCreate                    | 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| created                         | 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，`$el` property 目前尚不可用。                                                                                                                                                                                                                                                                                                                                |
| beforeMount                     | 在挂载开始之前被调用：相关的 `render` 函数首次被调用。                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| mounted                         | 实例被挂载后调用，这时 `el` 被新创建的 `vm.$el` 替换了。如果根实例挂载到了一个文档内的元素上，当 `mounted` 被调用时 `vm.$el` 也在文档内。**该钩子在服务器端渲染期间不被调用。**                                                                                                                                                                                                                                                                                                                                         |
| beforeUpdate                    | 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。                                                                                                                                                                                                                                                                                                                                                                                                           |
| updated                         | 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用[计算属性](https://cn.vuejs.org/v2/api/#computed)或 [watcher](https://cn.vuejs.org/v2/api/#watch) 取而代之。注意 `updated` **不会**保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 `updated` 里使用 [vm.\$nextTick](https://cn.vuejs.org/v2/api/#vm-nextTick)： |
| actived                         | 被 keep-alive 缓存的组件激活时调用。**该钩子在服务器端渲染期间不被调用。**                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| deactived                       | 被 keep-alive 缓存的组件停用时调用。**该钩子在服务器端渲染期间不被调用。**                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| beforeDestory                   | 实例销毁之前调用。在这一步，实例仍然完全可用。**该钩子在服务器端渲染期间不被调用。**                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| destroyed                       | 实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。**该钩子在服务器端渲染期间不被调用。**                                                                                                                                                                                                                                                                                                                                                                 |
| errorCaptured（2.5.0+以上版本） | 当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 `false` 以阻止该错                                                                                                                                                                                                                                                                                                                                                             |

- 生命周期事件不需要写在`methods`配置里面，而是写在外面
- 那么多事件，我们需要记住的时间就三个`created`、`mounted`和`beforeDestory`
- 区别 created 和 mounted：前面说到 vue 值基于`mvc`的，那么在处理网页的时候，vue 会先构建数据模型，之后再构建网页的 DOM（虚拟 DOM），之后将构建的 DOM 插入我们指定的区域。这个插入的过程称之为挂载。在 created 阶段，数据模型已经准备好了，但是还没有挂载进去。
- created：在这个事件内，你可以做不涉及视图渲染的操作。一般我们会在这里获取路由信息等数据初始化工作。
- mounted：在这个事件内，我们可以开始做视图操作。一般而言，我们会在这里做网络请求。
- beforeDestoryed：这个事件非常重要！！！如果我们在页面中写了定时器，那么在这个时间内，要将定时器销毁。否则，定时器会继续运行，造成内存泄漏的结果。

```js
export default {
  methods: {
    /***
     * HTTP REQUEST
     * 获取用户列表
     */
    getStudentListRequest() {
      console.log("获取用户列表!");
    },
  },
  mounted() {
    this.getStudentListRequest();
  },
};
```

## 概念 4：监听器

既然我们有了数据模型，那么即可对数据进行监听，看数据是否变动，针对数据变动做一系列的操作。

```js
// 新建一个文件/src/views/EditStudentInfoModal.vue

data(){
    return {
        isShow: false
    }
},
watch:{
    isShow(newV, oldV){
        if(newV){
            this.getStudentDetailRequest();
        }
    }
},
methods:{
   /**
   * HTTP Request
   * 获取用户详情
   */
    getStudentDetailRequest(){

    }
}
```

## 概念 5：计算属性

计算属性和`data`一样，可以绑定在属性上，也可以显示内容。但是不同的是，计算属性依赖其他 data 生成的新的数据。

```js
<span>
	<input v-model="num1"/>
    <span>+</span>
    <input v-model="num2" />
    <span>=</span>
    <span>{{sum}}</span>
</span>

data(){
    return {
        num1:1,
        num2: 2,
    }
},
computed(){
    sum(){
        return sum1+sum2;
    }
}
```

## 概念 6：过滤器

过滤器和方法一样，不同的是，过滤器专门用于简单的文本逻辑处理,专门用于文本插值内。比如

```js
<span>{{status|getStatusText}}</span>

data(){
    return {
        status:0
    }
}
filters:{
    getStatusText(status){
        let statusList = ["开始", "进行中", "已结束"];
        return statusList[status];
    }
}
```

## 练习 3：使用组件编写学生列表

> 引入 ant-design-vue 组件

### 1. 安装

参见：https://www.antdv.com/docs/vue/getting-started-cn/

### 2. 使用[a-table](https://www.antdv.com/components/table-cn/)

- columns

  - title 表格标题
  - dataIndex 标题所对应的数据项名称

- data-source

- rowKey

  - 每一行的 key 值
