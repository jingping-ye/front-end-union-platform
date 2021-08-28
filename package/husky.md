# Husky

## 说明

提交钩子：简单说就是使用 Git 命令会触发的函数。

## 安装

```shell
npm instal husky -D
```

## 配置

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm run test",
      "pre-push": "npm  run test",
      "...": "..."
    }
  }
}
```

在 1.0.0 之后的版本支持了使用.huskyrc，.huskyrc.json，.huskyrc.js 配置文件，可以不放在 package.json 中。

## 最新配置

```shell
npm install husky --save-dev # Install Husky v6

npx husky install # Activate hooks

npx husky add .husky/pre-commit "npm run lint" # Add hook
```

## 文档

https://typicode.github.io/husky/#/?id=package-scripts
