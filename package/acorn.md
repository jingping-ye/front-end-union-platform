# Acron

> JavaScript 解析器

## 安装

1. npm 安装

```shell
npm install acorn
```

2. github 下载安装

```shell
git clone https://github.com/acornjs/acorn.git
cd acorn
npm install
```

## 接口

## 命令行 API

> 使用`npm install`后可以在 cmd 中使用`acorn`命令。`acorn`命令可以用来解析文件。

```shell
acorn -h
```

```
usage: acorn [--ecma3|--ecma5|--ecma6|--ecma7|--ecma8|--ecma9|...|--ecma2015|--ecma2016|--ecma2017|--ecma2018|...]
        [--tokenize] [--locations] [---allow-hash-bang] [--allow-await-outside-function] [--compact] [--silent] [--module] [--help] [--] [<infile>...]
```

### 参数说明

- `--ecma3|--ecma5|--ecma6|--ecma7|--ecma8|--ecma9|...|--ecma2015|--ecma2016|--ecma2017|--ecma2018|...`:设置要解析的 ECMAScript 版本。默认为版本 9。
- `--locations`
- `--allow-hash-bang`: 是否将第一行作为注释。比如以字符 #! （如在 shellscript 中）开头
- `--allow-await-outside-function`：允许顶级的`await`表达式
- `--compact`： AST 输出中不使用空格。
- `--silent`
- `--module`: 解析模式。设置为`module`或`script`其他。
- `--help`

### 示例
