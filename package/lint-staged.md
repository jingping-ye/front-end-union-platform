# lint-staged

> 一个仅仅过滤出 Git 代码暂存区文件(被 committed 的文件)进行格式检查的工具。

```shell
npm install --save-dev lint-staged husky
```

## 配置

- Lint-staged 仅仅是文件过滤器，不会帮你格式化任何东西，所以没有代码规则配置文件，需要自己配置一下，如：.eslintrc、.stylelintrc 等，然后在 package.json 中引入。

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": ["eslint --fix", "git add"]
  }
}
```

- 当文件变化，我们 git commit 它们，pre-commit 钩子会启动，执行 lint-staged 命令，我们对于 lint-staged 如上文配置，对本次被 commited 中的所有.js 文件，执行 eslint --fix 命令和 git add,命令，前者的的目的是格式化，后者是对格式化之后的代码重新提交。

- 除了在 package.json 中配置，也可以在.lintstagedrc、lint-staged.config.js 文件中，lint-staged 的常用选项除了 liners 之外，还有 ignore、concurrent 等

```json
{
  "lint-staged": {
    "linters": {
      "*.{js,scss}": ["some command", "git add"]
    },
    "ignore": ["**/dist/*.min.js"]
  }
}
```

对于文件的过滤，lint-staged 的格式如下：

```js
{
  // .js files anywhere in the project
  "*.js": "eslint",
  // .js files anywhere in the project
  "**/*.js": "eslint",
  // .js file in the src directory
  "src/*.js": "eslint",
  // .js file anywhere within and below the src directory
  "src/**/*.js": "eslint",
}
```

lint-staged 提供的功能远不止于此，它只是平台，具体的格式化工具的搭配有很多，如对于图片的、样式的、.tsx、.md 等文件的。
