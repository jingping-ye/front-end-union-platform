(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1091:function(t,a,s){"use strict";s.r(a);var n=s(112),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"定义路由信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义路由信息"}},[t._v("#")]),t._v(" 定义路由信息")]),t._v(" "),s("p",[t._v("一条路由信息可以由以下信息组成：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("含义")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("path")]),t._v(" "),s("td",[t._v("路径")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("alias")]),t._v(" "),s("td",[t._v("别名")]),t._v(" "),s("td",[t._v("string | Array<string>")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("redirect")]),t._v(" "),s("td",[t._v("重定向")]),t._v(" "),s("td",[t._v("string | Location | Function")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("路由名称")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("component")]),t._v(" "),s("td",[t._v("普通情况下路由映射的组件")]),t._v(" "),s("td",[t._v("Component")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("components")]),t._v(" "),s("td",[t._v("命名情况下路由映射的组件")]),t._v(" "),s("td",[t._v("{ [name: string]: Component }")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("props")]),t._v(" "),s("td",[t._v("props 传参")]),t._v(" "),s("td",[t._v("boolean | Object | Function")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("children")]),t._v(" "),s("td",[t._v("嵌套路由")]),t._v(" "),s("td",[t._v("Array<Object>")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("meta")]),t._v(" "),s("td",[t._v("元信息")]),t._v(" "),s("td",[t._v("any")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("caseSensitive")]),t._v(" "),s("td",[t._v("配规则是否大小写敏感")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("pathToRegexpOptions")]),t._v(" "),s("td",[t._v("编译正则的选项")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("beforeEnter")]),t._v(" "),s("td",[t._v("路由钩子")]),t._v(" "),s("td",[t._v("(to: Route, from: Route, next: Function) => void")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"属性讲解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性讲解"}},[t._v("#")]),t._v(" 属性讲解")]),t._v(" "),s("h3",{attrs:{id:"一-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-path"}},[t._v("#")]),t._v(" 一. path")]),t._v(" "),s("p",[t._v("定义了访问路径，可以是以下几种形式：")]),t._v(" "),s("ul",[s("li",[t._v("普通字符串")]),t._v(" "),s("li",[t._v("动态路由参数")]),t._v(" "),s("li",[t._v("正则")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  普通字符串")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/page2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Page2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../views/Page2.vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t动态路由参数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/page1/:id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Page1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../views/Page1.vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t正则")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t匹配所有")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NotFound"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../views/404.vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"二-alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-alias"}},[t._v("#")]),t._v(" 二. alias")]),t._v(" "),s("p",[t._v("路径别名，通过"),s("code",[t._v("alias")]),t._v("也能访问。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t/page2和/test-page同样可以访问到Page2.vue")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/page2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    alias"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test-page"')]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Page2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../views/Page2.vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])]),s("ul",[s("li",[t._v("注意，如果我们使用了"),s("code",[t._v('this.$router.push({name:"Page2"})')]),t._v(",那么会显示的路径为"),s("code",[t._v("/page2")]),t._v(",也就是优先使用"),s("code",[t._v("path")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"三-redirect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-redirect"}},[t._v("#")]),t._v(" 三. redirect")]),t._v(" "),s("p",[t._v("重定向。 在"),s("code",[t._v("redirect")]),t._v("中声明路径，当我们声明了"),s("code",[t._v("redirect")]),t._v("属性时，路由跳转将不会跳转到"),s("code",[t._v("path")]),t._v("、"),s("code",[t._v("alias")]),t._v("或者"),s("code",[t._v("name")]),t._v(",而是"),s("code",[t._v("redirct")]),t._v("路径。")]),t._v(" "),s("h3",{attrs:{id:"四-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-name"}},[t._v("#")]),t._v(" 四 . name")]),t._v(" "),s("p",[t._v("路由名称，帮助路由跳转。")]),t._v(" "),s("h3",{attrs:{id:"五-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五-component"}},[t._v("#")]),t._v(" 五. component")]),t._v(" "),s("p",[t._v("路由映射的组件。")]),t._v(" "),s("h3",{attrs:{id:"六-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六-components"}},[t._v("#")]),t._v(" 六. components")]),t._v(" "),s("p",[t._v("命名视图下路由映射的多个组件。")]),t._v(" "),s("h3",{attrs:{id:"七-props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七-props"}},[t._v("#")]),t._v(" 七. props")]),t._v(" "),s("p",[t._v("参见路由传参。")]),t._v(" "),s("h3",{attrs:{id:"八-children"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八-children"}},[t._v("#")]),t._v(" 八.children")]),t._v(" "),s("p",[t._v("子路由，具体查看嵌套路由。")]),t._v(" "),s("h3",{attrs:{id:"九-meta"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#九-meta"}},[t._v("#")]),t._v(" 九.meta")]),t._v(" "),s("p",[t._v("meta 中定义中关于路由的元信息。元信息参考如下：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("元信息是关于信息的信息，用于描述信息的结构、语义、用途和用法等。那么路由中的最初始的信息是指路由，meta指的是描述路由的信息，这里是一个泛指的概念，因为路由视图的存在，将路由和组件关联起来了。\n")])])]),s("p",[t._v("在 meta 中我们可以自定义关于路由的属性，比如"),s("code",[t._v("title")]),t._v("和"),s("code",[t._v("icon")]),t._v("等")])])}),[],!1,null,null,null);a.default=e.exports}}]);