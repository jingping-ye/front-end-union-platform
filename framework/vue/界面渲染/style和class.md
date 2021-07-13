# style和class

## 一、style

1. 绑定字符串

   ```js
   <template>
     <div>
       <p style="color: red;">一段话</p>
       <p :style="'color:' + (isRed ? 'red' : 'green')">一段话1</p>
       <p :style="`color:${isRed ? 'red' : 'green'}`">一段话2</p>
     </div>
   </template>
   
   <script>
   export default {
     data() {
       return {
         isRed: true,
       };
     },
   };
   </script>
   
   <style scoped>
   .red {
     color: red;
   }
   .green {
     color: green;
   }
   </style>
   
   ```

   - 两种写法，一种是字符串拼接，另外一种是使用模板字符串。

2. 绑定对象

   ```js
   <template>
     <div>
       <p :style="{ color: greenColor, fontSize: bigFont }">一段话1</p>
       <p :style="paragraph2">一段话2</p>
     </div>
   </template>
   
   <script>
   export default {
     data() {
       return {
         greenColor: "green",
         bigFont: "24px",
         paragraph2: {
           color: "green",
           fontSize: "24px",
         },
       };
     },
   };
   </script>
   
   <style scoped></style>
   
   ```

3. 绑定数组

   ```js
   <template>
     <div>
       <p :style="[bigFont, greenColor]">一段话1</p>
       <p :style="[bigFont, greenColor, redColor]">一段话2</p>
       <p :style="[bigFont, isRed ? redColor : greenColor]">一段话3</p>
       <p :style="[bigFont, { color: isRed ? 'red' : 'green' }]">一段话4</p>
     </div>
   </template>
   
   <script>
   export default {
     data() {
       return {
         isRed: true,
         bigFont: {
           fontSize: "24px",
         },
         redColor: {
           color: "red",
         },
         greenColor: {
           color: "green",
         },
       };
     },
   };
   </script>
   
   <style></style>
   
   ```

4. 绑定计算属性或data

   ```js
   <template>
     <div>
       <p>一段话1</p>
       <p :style="paragraph2">一段话2</p>
     </div>
   </template>
   
   <script>
   export default {
     data() {
       return {
         isRed: true,
       };
     },
     computed: {
       paragraph2() {
         return {
           color: this.isRed ? "red" : "green",
         };
       },
     },
   };
   </script>
   
   <style></style>
   ```

   

## 二、class

1. 绑定字符串

   ```js
   <template>
     <div>
       <p class="red-color">一段话</p>
       <p :class="isRed ? 'red-color' : 'green-color'">一段话1</p>
       <p :class="`${isRed ? 'red-color' : 'green-color'}`">一段话2</p>
       <p :class="`${isRed ? 'red-color' : 'green-color'} big-font`">一段话3</p>
     </div>
   </template>
   
   <script>
   export default {
     data() {
       return {
         isRed: true,
       };
     },
   };
   </script>
   
   <style scoped>
   .red-color {
     color: red;
   }
   .green-color {
     color: green;
   }
   .big-font {
     font-size: 25px;
   }
   </style>
   
   ```

   - 可以多个class写一起。

2. 绑定对象

   ```js
   <template>
     <div>
       <p class="red-color">一段话1</p>
       <p :class="{ 'red-color': isRed }">一段话2</p>
       <p :class="redColor">一段话3</p>
     </div>
   </template>
   
   <script>
   export default {
     data() {
       return {
         isRed: true,
         redColor: {
           "red-color": true,
         },
       };
     },
   };
   </script>
   
   <style scoped>
   .red-color {
     color: red;
   }
   .green-color {
     color: green;
   }
   .big-font {
     font-size: 25px;
   }
   </style>
   
   ```

   - 绑定对象有两种写法，一种是直接在标签中写入对象，另一种是写入一个对象变量，注意两种之间的区别。

3. 绑定数组

   ```js
   <template>
     <div>
       <p :class="[redColor, bigFont]">一段话1</p>
       <p :class="[isRed ? redColor : greenColor, bigFont]">一段话2</p>
       <p :class="[isRed ? 'red-color' : 'green-color', bigFont]">一段话3</p>
       <p :class="[{ 'red-color': !isRed }, bigFont]">一段话4</p>
     </div>
   </template>
   
   <script>
   export default {
     data() {
       return {
         isRed: false,
         redColor: "red-color",
         greenColor: "green-color",
         bigFont: "big-font",
       };
     },
   };
   </script>
   
   <style scoped>
   .red-color {
     color: red;
   }
   .green-color {
     color: green;
   }
   .big-font {
     font-size: 25px;
   }
   </style>
   ```

4. 绑定计算属性

   ```js
   <template>
     <div>
       <p class="red-color">一段话1</p>
       <p :class="redColor">一段话3</p>
     </div>
   </template>
   
   <script>
   export default {
     data() {
       return {
         isRed: true,
       };
     },
     computed: {
       redColor() {
         return {
           "red-color": this.isRed,
         };
       },
     },
   };
   </script>
   
   <style scoped>
   .red-color {
     color: red;
   }
   .green-color {
     color: green;
   }
   .big-font {
     font-size: 25px;
   }
   </style>
   
   ```

## 三、其他

1. 原来style中带`-`的属性在对象中需要全部转为小驼峰写法。
2. 当 `v-bind:style` 使用需要添加[浏览器引擎前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix)的 CSS property 时，如 `transform`，Vue.js 会自动侦测并添加相应的前缀。

