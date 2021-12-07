# commitlint

> 代码信息提交规范

## 安装

```shell
npm install --save-dev @commitlint/config-conventional @commitlint/cli

// 生成配置文件commitlint.config.js，当然也可以是 .commitlintrc.js
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
```

## 配置

在 husky 的配置加入 CommitlIint 配置，v1.0.1 版本以后为 HUSKY_GIT_PARAMS，v0.14.3 为 GIT_PARAMS

```shell
"husky": {
  "hooks": {
    "pre-commit": "npm run test",
    "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
  }
},
```

## 提及规范

<type>: <subject>

常用的 type 类别

- upd：更新某功能（不是 feat, 不是 fix）

- feat：新功能（feature）

- fix：修补 bug

- docs：文档（documentation）

- style： 格式（不影响代码运行的变动）

- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）

- test：增加测试

- chore：构建过程或辅助工具的变动
  例子：

git commit -m 'feat: 增加 xxx 功能'
git commit -m 'bug: 修复 xxx 功能'
subject
subject 是 commit 目的的简短描述，可以做一些配置，如最大长度限制。

## commitlint.config.js 文件配置

rule 配置说明:：rule 由 name 和配置数组组成，如：'name:[0, 'always', 72]'，数组中第一位为 level，可选 0,1,2，0 为 disable，1 为 warning，2 为 error，第二位为应用与否，可选 always|never，第三位该 rule 的值。具体配置例子如下：

```js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["upd", "feat", "fix", "refactor", "docs", "chore", "style", "revert"]],
    "type-case": [0],
    "type-empty": [0],
    "scope-empty": [0],
    "scope-case": [0],
    "subject-full-stop": [0, "never"],
    "subject-case": [0, "never"],
    "header-max-length": [0, "always", 72],
  },
};
```

## 文档

https://commitlint.js.org/#/

## 最新 husky 配置

npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
