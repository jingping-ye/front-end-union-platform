# Prettier

> Prettier 是一个支持多语言的代码格式工具，如常用的：js、jsx、Vue、Flow、Ts、HTML、CSS 等，非常全面，将代码解析为 AST，然后重新组装，目的是最终输出风格统一的代码，对比 eslint 对 error 的 fix 要强一些，如最大长度的改动，eslint 只是对有问题的地方进行格式化修改，不改动源代码风格，而 prettier 是对全量的代码进行格式化。

## 安装

```shell
npm install --save-dev prettier
```

## 配置

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,json,css,md}": ["prettier --write", "git add"]
  }
}
```

这里我们结合之前用到的 husky、lint-staged，默认 prettier 是直接标准输出到终端的，--write，这个配置代表直接改写文件。

prettier 让我们专注于业务逻辑，无需再纠结代码风格，配合其它工具，实现了代码提交到仓库前，统一格式化。
