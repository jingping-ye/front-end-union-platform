(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{1184:function(s,a,t){"use strict";t.r(a);var e=t(112),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[s._v("#")]),s._v(" npm")]),s._v(" "),t("h2",{attrs:{id:"_1-注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-注意"}},[s._v("#")]),s._v(" 1. 注意")]),s._v(" "),t("p",[s._v("当下载 Node.js 时，npm 也随之下载了。下载完毕后，检查npm包和下载的"),t("code",[s._v("Node.js")]),s._v("版本是否对应。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://nodejs.org/en/download/releases/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js版本及对应的npm包"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"_2-什么是包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是包"}},[s._v("#")]),s._v(" 2. 什么是包")]),s._v(" "),t("p",[s._v("包就一堆封装起来的代码，目的是抽象或总结解决问题的方法，避免重复解决问题。包可以是一个文件，也可以是多个文件。")]),s._v(" "),t("h2",{attrs:{id:"_3-npm-的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-npm-的作用"}},[s._v("#")]),s._v(" 3. npm 的作用")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("引入包")]),s._v(" "),t("p",[s._v("把所有的包汇集在一个库中，使用同一的命令管理")])]),s._v(" "),t("li",[t("p",[s._v("管理包之间的关系")]),s._v(" "),t("p",[s._v("通过 cdn 引入代码库的形式，容易造成代码包之间版本兼容等问题。npm 可以管理包和包之间的关系和包的版本。")])])]),s._v(" "),t("h2",{attrs:{id:"_4-npm-操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-npm-操作"}},[s._v("#")]),s._v(" 4. npm 操作")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("生成一个管理文件 package.json")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm init "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("yes "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -yes表示采用默认配置，也可以简写为-y")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("安装包")]),s._v(" "),t("p",[s._v("注意：安装包时由于镜像服务器位置的原因，可以选择国内镜像工具 cnpm 替代 npm 使用")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm install jquery@"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定版本")]),s._v("\nnpm install jquery@lastst "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//安装最新版本")]),s._v("\nnpm install jquery "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认安装最新版本")]),s._v("\nnpm install jqury "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认安装jquery的最新版本至开发环境, -D表达--save-dev")]),s._v("\nnpm install npm@latest "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\n")])])]),t("p",[s._v("ps: 包会默认安装到根目录下的"),t("code",[s._v("node_modules")]),s._v("目录")])]),s._v(" "),t("li",[t("p",[s._v("删除包")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm uninstall jquery\n")])])])]),s._v(" "),t("li",[t("p",[s._v("更新包")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm update jquery "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更新jquery")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查询包")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm ls\nnpm ls "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("depth "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不输出包的依赖")]),s._v("\nnpm ls "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看安装的所以全局包")]),s._v("\nnpm ls "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("depth "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//\t仅查看一级目录")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("运行包")]),s._v(" "),t("p",[s._v("我们可以在 scripts 中定义快捷命令，并且用"),t("code",[s._v("npm run <命令>")]),s._v("操作")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm run "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("scripts"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("设置镜像源")]),s._v(" "),t("blockquote",[t("p",[s._v("镜像源指的是我们的npm包从哪个镜像池下载。你可以把镜像池想作我们手机上的应用商店（手机自带的应用商店，应用宝...），这里即是规定包的来源（从哪儿下载）。")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm config "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" registry https"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/registry.npm.taobao.org/")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置为淘宝镜像源")]),s._v("\nnpm config "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" registry https"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/registry.npmjs.org/")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置为默认镜像源(npm)")]),s._v("\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"_5-创建并发布包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-创建并发布包"}},[s._v("#")]),s._v(" 5. 创建并发布包")]),s._v(" "),t("h3",{attrs:{id:"_5-1-会用到的命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-会用到的命令"}},[s._v("#")]),s._v(" 5.1 会用到的命令")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" adduser 注册\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" login 登录\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" whami 查看当前用户名\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init 初始包的信息\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish 发布包/更新包\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish --acess"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public 发布公共作用域包\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" unpublish xxx（包名） --force：强制删除包\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" unpublish xxx@1.1.1（包名@版本号）：删除指定版本包\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" deprecate xxx message（包名 信息）：代替删除操作，其他人下载我们的包时给出警告\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" deprecate xxx@1.2.1 message（包名@版本号 信息）：代替删除操作，其他人下载我们指定版本的包时给出警告\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version patch/minor/major（补丁/小改/大改）xxx（版本号eg：v1.1.1）：自动更新版本\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version patch\n")])])]),t("h3",{attrs:{id:"_5-2-流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-流程"}},[s._v("#")]),s._v(" 5.2 流程")]),s._v(" "),t("ol",[t("li",[s._v("在 npm 上注册账号")]),s._v(" "),t("li",[s._v("发布文件中使用"),t("code",[s._v("npm init")]),s._v("生成一个包管理文件")]),s._v(" "),t("li",[s._v("如果第一次登陆，使用"),t("code",[s._v("npm adduser")]),s._v("添加账户信息，否则使用"),t("code",[s._v("npm login")]),s._v("即可。")]),s._v(" "),t("li",[s._v("如果是更新包，那么要修改"),t("code",[s._v("package.json")]),s._v("中的版本号。")]),s._v(" "),t("li",[s._v("使用"),t("code",[s._v("npm pulish")]),s._v("发布，发布后就可以在自己的 npm 包管理中看到了。")]),s._v(" "),t("li",[s._v("删除包: "),t("code",[s._v("npm unpublish 包名@版本名")]),s._v("来删除（包发布 24 小时后才可以删除）")]),s._v(" "),t("li",[s._v("包警告:"),t("code",[s._v("npm deprecate 包")]),s._v("表示包已经不再维护。")]),s._v(" "),t("li",[s._v("忽略代码，写入"),t("code",[s._v(".gitignore")]),s._v("或者"),t("code",[s._v(".npmignore")]),s._v("就可以了。")])]),s._v(" "),t("h3",{attrs:{id:"_5-3-自定义发布-package-json-信息说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-自定义发布-package-json-信息说明"}},[s._v("#")]),s._v(" 5.3 自定义发布 package.json 信息说明")]),s._v(" "),t("ul",[t("li",[s._v("package name(包名字)")]),s._v(" "),t("li",[s._v("version(包版本)")]),s._v(" "),t("li",[s._v("description(包描述)")]),s._v(" "),t("li",[s._v("entry point(包里面主文件也就是入口地址)")]),s._v(" "),t("li",[s._v("test command(包的测试命令是什么，可以先不指定)")]),s._v(" "),t("li",[s._v("git repository(git 地址，这样就可以从 npm 官网直接点到 git 上，可以先不指定)")]),s._v(" "),t("li",[s._v("keywords(关键字，别人搜东西时怎么搜到比较方便)")]),s._v(" "),t("li",[s._v("author(作者)")]),s._v(" "),t("li",[s._v("license: (ISC)(包遵循什么样的开源协议)")])]),s._v(" "),t("h3",{attrs:{id:"_5-4-发布作用域包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-发布作用域包"}},[s._v("#")]),s._v(" 5.4 发布作用域包")]),s._v(" "),t("blockquote",[t("p",[s._v("作用域用于将相关包分组在一起，并为 npm 模块创建一个名称空间(类似于域)。这里有更详细的解释。")]),s._v(" "),t("p",[s._v("如果一个包的名称以@开头，那么它就是一个有作用域的包。范围是@和斜杠之间的所有内容。")])]),s._v(" "),t("h4",{attrs:{id:"_5-4-1-初始化作用域包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-1-初始化作用域包"}},[s._v("#")]),s._v(" 5.4.1 初始化作用域包")]),s._v(" "),t("p",[s._v("要创建有作用域的包，只需使用以作用域开头的包名。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n  "name": "@username/project-name"\n}\n')])])]),t("p",[s._v("如果使用 npm init，可以将范围作为选项添加到该命令。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm init --scope=username\n")])])]),t("p",[s._v("如果一直使用相同的作用域，您可能希望在.npmrc 文件中设置此选项。")]),s._v(" "),t("p",[t("strong",[s._v("npm config set scope username")])]),s._v(" "),t("h4",{attrs:{id:"_5-4-2-如何发布作用域包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-2-如何发布作用域包"}},[s._v("#")]),s._v(" 5.4.2 如何发布作用域包")]),s._v(" "),t("p",[s._v("默认情况下，作用域包是私有的。要发布私有模块，您需要是付费的私有模块用户。")]),s._v(" "),t("p",[s._v("公共作用域模块是免费的，不需要付费订阅。若要发布公共作用域模块，请在发布时设置 access 选项。此选项将保留为所有后续发布设置。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm publish --access=public\n")])])]),t("h4",{attrs:{id:"_5-4-3-使用作用域包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-3-使用作用域包"}},[s._v("#")]),s._v(" 5.4.3 使用作用域包")]),s._v(" "),t("p",[s._v("要使用有作用域的包，只需在使用包名的任何地方包含作用域。")]),s._v(" "),t("p",[s._v("在 package.json:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n  "dependencies": {\n    "@username/project-name": "^1.0.0"\n  }\n}\n')])])]),t("p",[s._v("在命令行:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm install @username/project-name --save\n")])])]),t("p",[s._v("在 require 声明中:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('var projectName = require("@username/project-name")\n')])])]),t("h3",{attrs:{id:"_5-5-其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-其他"}},[s._v("#")]),s._v(" 5.5 其他")]),s._v(" "),t("h4",{attrs:{id:"_5-5-1-为包创建软链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-1-为包创建软链接"}},[s._v("#")]),s._v(" 5.5.1 为包创建软链接")]),s._v(" "),t("p",[s._v("当我们的包被应用到应用程序中，比如vue程序，那么在配置运行脚本时，假设入口是"),t("code",[s._v("index.js")]),s._v("文件，我们会这样配置：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"run"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node ./my-npm-package/index.js"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("这种，路径过长，而且表意不明，软链接可以解决这个问题。")]),s._v(" "),t("p",[s._v("我们在包的入口"),t("code",[s._v("index.js")]),s._v("文件顶部加入如下：表示使用node运行该文件。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env node")]),s._v("\n")])])]),t("p",[s._v("在包的"),t("code",[s._v("package.json")]),s._v("加入以下项（指定执行的入口）：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"run-package"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./index.js"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n")])])]),t("p",[s._v("那么，在vue应用中的执行脚本只需要如下配置，即可直接执行"),t("code",[s._v("./my-npm-package/index.js")]),s._v("文件：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"run"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"run-package [args]"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"_6-其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-其他"}},[s._v("#")]),s._v(" 6. 其他")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm search xxx 搜索包\nnpm init "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("username：创建作用域包，将范围作为选项添加到命令\nnpm publish "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("access"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v("：发布作用域包，将默认的私有模块更改为公共模块\nnpm install @username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("project"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("name（作用域包名） "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save：使用作用域包\n")])])]),t("h2",{attrs:{id:"_7-package-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-package-json"}},[s._v("#")]),s._v(" 7. package.json")]),s._v(" "),t("blockquote",[t("p",[s._v("管理本地 npm 包的工具")])]),s._v(" "),t("h3",{attrs:{id:"_7-1-创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-创建"}},[s._v("#")]),s._v(" 7.1 创建")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init  // 手动配置\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init -y // 生成默认的文件\n")])])]),t("ul",[t("li",[t("code",[s._v("name")]),s._v(": 当前目录名称")]),s._v(" "),t("li",[t("code",[s._v("version")]),s._v(": 版本``")]),s._v(" "),t("li",[t("code",[s._v("description")]),s._v(": 说明")]),s._v(" "),t("li",[t("code",[s._v("main")]),s._v(": 入口文件，总是 index.js")]),s._v(" "),t("li",[s._v("dependencies：生产依赖")]),s._v(" "),t("li",[s._v("devDependencies：开发依赖")]),s._v(" "),t("li",[t("code",[s._v("scripts")]),s._v(":脚本，默认情况下创建一个空的测试脚本")]),s._v(" "),t("li",[t("code",[s._v("keywords")]),s._v(":关键字")]),s._v(" "),t("li",[t("code",[s._v("author")]),s._v(":作者")]),s._v(" "),t("li",[t("code",[s._v("license")]),s._v(": 许可")])])])}),[],!1,null,null,null);a.default=n.exports}}]);