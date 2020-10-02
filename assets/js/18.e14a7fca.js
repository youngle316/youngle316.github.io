(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{380:function(t,s,a){"use strict";a.r(s);var e=a(18),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"用vs-code为create-react-app添加eslint和prettier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用vs-code为create-react-app添加eslint和prettier"}},[t._v("#")]),t._v(" 用VS Code为Create React App添加ESLint和Prettier")]),t._v(" "),a("blockquote",[a("p",[t._v("使用"),a("code",[t._v("ESLint")]),t._v("和"),a("code",[t._v("Prettier")]),t._v("可以使代码更加规范，整洁同时也便于他人阅读，团队开发更加方便。Create React App是自带"),a("code",[t._v("ESLint")]),t._v("的，但是并没有将文件暴露出来。这篇文章就记录一下如何添加"),a("code",[t._v("ESLint")]),t._v("和"),a("code",[t._v("Prettier")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"_1-添加eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加eslint"}},[t._v("#")]),t._v(" 1. 添加"),a("code",[t._v("ESLint")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在"),a("code",[t._v("VS Code")]),t._v("中下载"),a("code",[t._v("ESLint")]),t._v("插件")])]),t._v(" "),a("li",[a("p",[t._v("在"),a("code",[t._v("Create React App")]),t._v("根目录下创建文件"),a("code",[t._v(".eslintrc")])])]),t._v(" "),a("li",[a("p",[t._v("向文件中添加以下代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-app"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在任意一个"),a("code",[t._v(".js")]),t._v("文件下测试。如下：这时鼠标放在变量"),a("code",[t._v("x")]),t._v("上就会有"),a("code",[t._v("ESLint")]),t._v("提示")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [ESLint] 'x' is assigned a value but never used.[no-unused-vars]")]),t._v("\n")])])]),a("p",[t._v("表示这个变量已经定义但是从未使用过。")])])]),t._v(" "),a("p",[a("code",[t._v("Create React App")]),t._v("默认已经配置好了一些规范，直接按照这些规范书写代码即可。如果想自己修改一些配置，可以在终端输入"),a("code",[t._v("npm run eject")]),t._v("来显示所有的文件和配置信息。注意这个过程是不可逆的。更多关于自定义规则可以通过"),a("a",{attrs:{href:"https://facebook.github.io/create-react-app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create React App官方文档"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint官方文档"),a("OutboundLink")],1),t._v("来进行查看。")]),t._v(" "),a("h2",{attrs:{id:"_2-添加prettier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加prettier"}},[t._v("#")]),t._v(" 2. 添加"),a("code",[t._v("Prettier")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在"),a("code",[t._v("VS Code")]),t._v("中下载"),a("code",[t._v("Prettier")]),t._v("插件")])]),t._v(" "),a("li",[a("p",[t._v("通过"),a("code",[t._v("npm")]),t._v("下载依赖")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm i prettier eslint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("prettier eslint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("prettier "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("将"),a("code",[t._v(".eslintrc")]),t._v("文件修改如下所示")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:prettier/recommended"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在用户设置的"),a("code",[t._v("setting json")]),t._v("中添加如下代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"editor.formatOnSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[javascript]"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"editor.formatOnSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存时自动修复")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint.autoFixOnSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint.alwaysShowStatus"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier.disableLanguages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自动保存：在焦点改变时")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"files.autoSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onFocusChange"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("这样设置以后，比如默认的字符串需要使用双引号，如果使用单引号就会报错。这时只需要"),a("code",[t._v("ctrl+s")]),t._v("保存或者页面失去焦点。就会自动修复，将单引号改为双引号。")]),t._v(" "),a("p",[a("code",[t._v("Html")]),t._v(","),a("code",[t._v("js")]),t._v(","),a("code",[t._v("css")]),t._v(","),a("code",[t._v("md")]),t._v("文件都会进行代码格式的检查，一旦出错，都可以通过保存或页面失去焦点进行代码的格式化。")]),t._v(" "),a("h2",{attrs:{id:"_3-其他项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-其他项目"}},[t._v("#")]),t._v(" 3. 其他项目")]),t._v(" "),a("p",[t._v("如果不是"),a("code",[t._v("Create React App")]),t._v("，也可以通过"),a("code",[t._v("ESLint --init")]),t._v("进行初始化，使用大厂配好的规范，或者自定义都可以。具体的设置内容可以自己查询。")])])}),[],!1,null,null,null);s.default=r.exports}}]);