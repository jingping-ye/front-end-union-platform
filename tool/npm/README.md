# npm

## 1. 注意

当下载 Node.js 时，npm 也随之下载了。下载完毕后，检查npm包和下载的`Node.js`版本是否对应。

[Node.js版本及对应的npm包](https://nodejs.org/en/download/releases/)

## 2. 什么是包

包就一堆封装起来的代码，目的是抽象或总结解决问题的方法，避免重复解决问题。包可以是一个文件，也可以是多个文件。

## 3. npm 的作用

1. 引入包

   把所有的包汇集在一个库中，使用同一的命令管理

2. 管理包之间的关系

   通过 cdn 引入代码库的形式，容易造成代码包之间版本兼容等问题。npm 可以管理包和包之间的关系和包的版本。

## 4. npm 操作

1. 生成一个管理文件 package.json

   ```js
   npm init -yes // -yes表示采用默认配置，也可以简写为-y
   ```

2. 安装包

   注意：安装包时由于镜像服务器位置的原因，可以选择国内镜像工具 cnpm 替代 npm 使用

   ```js
   npm install jquery@3.0.0 // 指定版本
   npm install jquery@lastst -g //安装最新版本
   npm install jquery // 默认安装最新版本
   npm install jqury -D // 默认安装jquery的最新版本至开发环境, -D表达--save-dev
   npm install npm@latest -g
   ```

   ps: 包会默认安装到根目录下的`node_modules`目录

3. 删除包

   ```js
   npm uninstall jquery
   ```

4. 更新包

   ```js
   npm update jquery // 更新jquery
   ```

5. 查询包

   ```js
   npm ls
   npm ls --depth 0 // 不输出包的依赖
   npm ls -g // 查看安装的所以全局包
   npm ls -g --depth 0  //	仅查看一级目录
   ```

6. 运行包

   我们可以在 scripts 中定义快捷命令，并且用`npm run <命令>`操作

   ```js
   npm run *<scripts>
   ```

7. 设置镜像源

   > 镜像源指的是我们的npm包从哪个镜像池下载。你可以把镜像池想作我们手机上的应用商店（手机自带的应用商店，应用宝...），这里即是规定包的来源（从哪儿下载）。

   ```js
   npm config set registry https://registry.npm.taobao.org/      //设置为淘宝镜像源
   npm config set registry https://registry.npmjs.org/           // 设置为默认镜像源(npm)
   ```

## 5. 创建并发布包

### 5.1 会用到的命令

```sh
npm adduser 注册
npm login 登录
npm whami 查看当前用户名
npm init 初始包的信息
npm publish 发布包/更新包
npm publish --acess=public 发布公共作用域包
npm unpublish xxx（包名） --force：强制删除包
npm unpublish xxx@1.1.1（包名@版本号）：删除指定版本包
npm deprecate xxx message（包名 信息）：代替删除操作，其他人下载我们的包时给出警告
npm deprecate xxx@1.2.1 message（包名@版本号 信息）：代替删除操作，其他人下载我们指定版本的包时给出警告
npm version patch/minor/major（补丁/小改/大改）xxx（版本号eg：v1.1.1）：自动更新版本
npm version patch
```

### 5.2 流程

1. 在 npm 上注册账号
2. 发布文件中使用`npm init`生成一个包管理文件
3. 如果第一次登陆，使用`npm adduser`添加账户信息，否则使用`npm login`即可。
4. 如果是更新包，那么要修改`package.json`中的版本号。
5. 使用`npm pulish`发布，发布后就可以在自己的 npm 包管理中看到了。
6. 删除包: `npm unpublish 包名@版本名`来删除（包发布 24 小时后才可以删除）
7. 包警告:`npm deprecate 包`表示包已经不再维护。
8. 忽略代码，写入`.gitignore`或者`.npmignore`就可以了。

### 5.3 自定义发布 package.json 信息说明

- package name(包名字)
- version(包版本)
- description(包描述)
- entry point(包里面主文件也就是入口地址)
- test command(包的测试命令是什么，可以先不指定)
- git repository(git 地址，这样就可以从 npm 官网直接点到 git 上，可以先不指定)
- keywords(关键字，别人搜东西时怎么搜到比较方便)
- author(作者)
- license: (ISC)(包遵循什么样的开源协议)

### 5.4 发布作用域包

> 作用域用于将相关包分组在一起，并为 npm 模块创建一个名称空间(类似于域)。这里有更详细的解释。
>
> 如果一个包的名称以@开头，那么它就是一个有作用域的包。范围是@和斜杠之间的所有内容。

#### 5.4.1 初始化作用域包

要创建有作用域的包，只需使用以作用域开头的包名。

```
{
  "name": "@username/project-name"
}
```

如果使用 npm init，可以将范围作为选项添加到该命令。

```
npm init --scope=username
```

如果一直使用相同的作用域，您可能希望在.npmrc 文件中设置此选项。

**npm config set scope username**

#### 5.4.2 如何发布作用域包

默认情况下，作用域包是私有的。要发布私有模块，您需要是付费的私有模块用户。

公共作用域模块是免费的，不需要付费订阅。若要发布公共作用域模块，请在发布时设置 access 选项。此选项将保留为所有后续发布设置。

```
npm publish --access=public
```

#### 5.4.3 使用作用域包

要使用有作用域的包，只需在使用包名的任何地方包含作用域。

在 package.json:

```
{
  "dependencies": {
    "@username/project-name": "^1.0.0"
  }
}
```

在命令行:

```
npm install @username/project-name --save
```

在 require 声明中:

```
var projectName = require("@username/project-name")
```

### 5.5 其他

#### 5.5.1 为包创建软链接

当我们的包被应用到应用程序中，比如vue程序，那么在配置运行脚本时，假设入口是`index.js`文件，我们会这样配置：

```js
"scripts":{
    "run":"node ./my-npm-package/index.js"
}
```

这种，路径过长，而且表意不明，软链接可以解决这个问题。

我们在包的入口`index.js`文件顶部加入如下：表示使用node运行该文件。

```bash
#!/usr/bin/env node
```

在包的`package.json`加入以下项（指定执行的入口）：

```bash
"bin": {
    "run-package": "./index.js"
},
```

那么，在vue应用中的执行脚本只需要如下配置，即可直接执行`./my-npm-package/index.js`文件：

```js
"scripts":{
    "run", "run-package [args]"
}
```

## 6. 其他

```js
npm search xxx 搜索包
npm init --scope=username：创建作用域包，将范围作为选项添加到命令
npm publish --access=public：发布作用域包，将默认的私有模块更改为公共模块
npm install @username/project-name（作用域包名） --save：使用作用域包
```

## 7. package.json

> 管理本地 npm 包的工具

### 7.1 创建

```sh
npm init  // 手动配置
npm init -y // 生成默认的文件
```

- `name`: 当前目录名称
- `version`: 版本``
- `description`: 说明
- `main`: 入口文件，总是 index.js
- dependencies：生产依赖
- devDependencies：开发依赖
- `scripts`:脚本，默认情况下创建一个空的测试脚本
- `keywords`:关键字
- `author`:作者
- `license`: 许可

## 参数传递

> 如果scripts脚本中是用node运行js脚本，那么可以直接在命令行中写入命令，通过process.argv获取

- process.argv获取的是跟node.js 启动进程相关的参数。

- 以下命令均在`index.js`文件中输出`process.argv`

1. 不传入
```bash
"start": "node index.js"
```
```bash
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\jingping.ye\\Desktop\\test\\index.js'
]
```

2. 传入一组
```bash
"start": "node index.js name=vine",
```
```bash
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\jingping.ye\\Desktop\\test\\index.js',
  'name=vine'
]
```

3. 传入多组
> 使用空格分隔即可

```bash
 "start": "node index.js name=vine age=18",
```

```bash
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\jingping.ye\\Desktop\\test\\index.js',
  'name=vine',
  'age=18'
]
```

4. 一组传入多个参数
> 不使用空格分隔，随便使用个空格分隔即可
```bash
 "start": "node index.js person=vine,18",
```

```bash
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\jingping.ye\\Desktop\\test\\index.js',
  'person=vine,18'
]
```




