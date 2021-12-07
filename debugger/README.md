# 调试

## 问题

1. `VM11049:1 Uncaught TypeError: Converting circular structure to JSON`

```js
// 执行以下代码
var getStr = function (obj) {
  var cache = [];
  var str = JSON.stringify(obj, function (key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // 移除
        return;
      }
      // 收集所有的值
      cache.push(value);
    }
    return value;
  });
  cache = null;
  return str;
};

// 获取对象stringify的值
getStr(myObj);
```
