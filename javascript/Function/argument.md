# Arguments

## 描述

- `arguments是一个类数组对象`，意味着它有数组的长度属性、索引元素，但是没有数组的内建方法。
- arguments无法用于箭头函数。
- arguments只包括实际传入参数，如果有参数未传入，那么arguments中将不体现。
- arguments与实参之间是引用关系。
  - 引用关系不包括实参个数的变化

```js
// 测试arguments
function func1(a,b){
    console.log(arguments); // Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log(arguments.length); // 2; 实参的个数
}

func1(2,3)

// 少传参数
function fun2(a, b, c){
    console.log(arguments); // Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log(arguments.length);  // 2;
}

func2(2,3)

// 多传参数
function test(a) {
  console.log(a); // 1
  console.log(arguments); // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
test(1, 2, 3);


// 引用关系描述
const test = function (a, b, c) {
  a = 3;
  c = 4;
  console.log(arguments); // Arguments(2) [3, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ];
  arguments[0] = 5;
  console.log("a", a); // 5
};

test(1, 2);
```

## 类型

```js
function test(a) {
  console.log(typeof arguments); // object
  console.log(a, Object.prototype.toString.call(arguments)); // 1 [object Arguments]
  console.log(arguments[0], arguments[1]); // 1 undefined
  console.log(typeof arguments[0]); // number
}
test(1);

```

## arguments转换成数组

```js
const test = function (a, b, c) {
  let args1 = Array.prototype.slice.call(arguments);
  console.log(args1); // [1, 2]

  let args2 = [].slice.call(arguments);
  console.log(args2); // [1, 2]

  let args3 = Array.from(arguments);
  console.log(args3); // [1,2]

  let args4 = [...arguments];
  console.log(args4); // [1,2]

  // 避免slice造成的性能问题
  let args5 = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
  console.log(args5); // [1,2]
};

test(1, 2);

```

## 严格模式与非严格模式

在严格模式下，[剩余参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)、[默认参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)和[解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)参数的存在不会改变 `arguments`对象的行为，但是在非严格模式下就有所不同了。

当非严格模式中的函数**没有**包含[剩余参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)、[默认参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)和[解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)，那么`arguments`对象中的值**会**跟踪参数的值（反之亦然）