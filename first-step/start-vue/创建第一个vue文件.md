# 创建第一个`vue`文件

## 1. 快速创建一个`vue`文件

1. 建议一个`src/views/studentList.vue`文件
2. 安装`quick-vue-template`插件
3. 右键生成一个`vue`文件。
4. 删除`style`中的`lang="scss" `

## 2. 理解`vue`文件结构

在传统网站开发中，往往有这样的说法，网站开发技术由HTML/CSS/JavaScript组成。其中：

- HTML 用于描述页面结构，也就说明网页内容
- CSS用于美化页面
- JavaScript则用于页面与用户交互。

那么，`vue`文件由以下三部分组件，用于实现传统网站开发中技术实现的效果

- template：组件的内容
- style：组件的样式

- script：组件的脚本

那么以上三项分别对应着`HTML`/`CSS`/`JavaScript`。由此可见，使用`Vue`开发时实际上还是脱离不了这网站开发的三大基础。

## 3. 理解组件概念

组件很神秘吗？不，“组件”这个名称就表明的一切。“组件”——组成的控件。我们回顾一下传统的网页开发，实际上也是由一系列的`HTML Tag`和其上的事件组成。只不过，在传统开发中，我们做到分离的是HTML/CSS/JS几个文件，而不是一个个部分，这样的话，造成开发的耦合性很高。使用的组件式开发，则把`HTML/CSS/JavaScript`放在一个`vue`文件中，像面向对象开发一样，我们可以定义入参和出参并实例化。这样的话，就将页面自然的解耦了，组件的复用性也得以实现。与单个标签使用不同的是，我们可以将多个标签组成一个组件。

## 4. 引入并使用`stundetList.vue`组件 

```js
// app.vue

# 引入组件
<script>
import StudentList from "./views/studentList.vue";
// ...
</script>

# 注册组件 
<script>
export default {
 // ...
  components: {
    StudentList,
  },
 // ...
}
</script>

# 使用组件
<template>
    <div>
    	<student-list></student-list>
    </div>
</template>
```

- `StudentList`组件可以反复使用，你可以将这个想象成类的实例化。



