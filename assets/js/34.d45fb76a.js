(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{397:function(t,s,a){"use strict";a.r(s);var n=a(18),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基于webpack的编译es6的环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于webpack的编译es6的环境配置"}},[t._v("#")]),t._v(" 基于webpack的编译ES6的环境配置")]),t._v(" "),a("blockquote",[a("p",[t._v("目前现代浏览器对ES6语法的支持可以达到98%，但是还有部分浏览器不支持ES6，所以就需要将ES6编译为所以浏览器能支持的语法。这时就需要Babel了，作为编写下一代JavaScript的编译器，可以和很多工具配合使用来编译ES6。在这篇文章下记录一下使用webpack和babel-loader来编译ES6。")])]),t._v(" "),a("p",[t._v("一个简单的基于"),a("code",[t._v("webpack")]),t._v("的ES6编译环境。已经上传"),a("code",[t._v("github")]),t._v("仓库。"),a("a",{attrs:{href:"https://github.com/youngle316/ES6-webpack-Demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_1-安装node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装node-js"}},[t._v("#")]),t._v(" 1. 安装Node.js")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js官网"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_2-创建项目目录并安装webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建项目目录并安装webpack"}},[t._v("#")]),t._v(" 2. 创建项目目录并安装webpack")]),t._v(" "),a("p",[t._v("首先创建一个项目文件夹")]),t._v(" "),a("h3",{attrs:{id:"_2-1-初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-初始化"}},[t._v("#")]),t._v(" 2.1 初始化")]),t._v(" "),a("p",[t._v("根目录下在终端中输入：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init -y\n// y是yes的缩写，相当于输入 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init 一路回车\n")])])]),a("p",[t._v("根目录下会生成一个"),a("code",[t._v("package.json")]),t._v("文件，里面包含着项目的信息。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-安装webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-安装webpack"}},[t._v("#")]),t._v(" 2.2 安装webpack")]),t._v(" "),a("p",[t._v("别人写的再好，都不如自己看文档，文档写的更详细，"),a("a",{attrs:{href:"https://webpack.js.org/concepts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack官方文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("在终端中输入")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" webpack webpack-cli --save-dev\n// 表示在本地安装webpack\n")])])]),a("p",[t._v("会在根目录生成一个"),a("code",[t._v("node_modules")]),t._v("文件夹。")]),t._v(" "),a("p",[t._v("不推荐全局安装。如果你电脑有多个项目，使用的是不同版本的"),a("code",[t._v("webpack")]),t._v("，在运行的时候，是先去找全局的"),a("code",[t._v("webpack")]),t._v("，版本不一样的话会有问题出现。")]),t._v(" "),a("p",[a("strong",[t._v("推荐")]),t._v("：使用本地安装，使每个项目都有独立的包，不受全局包的影响，方便项目的移动，复制和打包。")]),t._v(" "),a("h3",{attrs:{id:"_2-3-使用webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-使用webpack"}},[t._v("#")]),t._v(" 2.3 使用webpack")]),t._v(" "),a("p",[t._v("项目目录")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("   ES6-Note\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- /node_modules\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- package.json\n+  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- webpack.config.js  // webpack配置文件\n+  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- /src  // 根目录\n+    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- /css  // 放CSS文件\n+  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- /js  // 放JS文件\n+    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- index.js  \n+    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- /view  // 放HTML文件\n+      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- index.html\n")])])]),a("p",[t._v("webpack.config.js")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模式，使用开发模式，")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果是要上线，使用'production'，会对代码进行压缩")]),t._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口文件")]),t._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/js/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 出口")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包后的文件名")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js/main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件目录")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("更多的configuration说明可以查看官方文档："),a("a",{attrs:{href:"https://webpack.js.org/configuration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("configuration docs"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("src/js/index.js")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加一段ES6语法的代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("src/view/index.html")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("zh-CN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Title"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("code",[t._v("package.json")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("// 在scripts中加入以下代码\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Error: no test specified"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(' && exit 1"')]),t._v(",\n+    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack --config webpack.config.js"')]),t._v(" // 添加这行代码，\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n// 注：json文件中不能有注释\n")])])]),a("p",[t._v("在终端中执行")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),a("p",[t._v("执行这个命令，可以将入口文件打包到出口目录下，就会生成一个dist文件夹，目录结构如下")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- /dist\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- /js\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- main.js\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- /src\n")])])]),a("p",[t._v("可以看到main.js文件中包含了index.js的内容")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2018/12/11/FY9Ard.png",alt:"webpack"}})]),t._v(" "),a("p",[t._v("但是仍然有有两个问题")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("index.html")]),t._v("文件并没有被打包到"),a("code",[t._v("dist")]),t._v("中，")]),t._v(" "),a("li",[t._v("打包后的"),a("code",[t._v("main.js")]),t._v("文件仍然是"),a("code",[t._v("let")]),t._v("并没有编译为所有浏览器支持的"),a("code",[t._v("var")])])]),t._v(" "),a("p",[t._v("接下来就来解决这两个问题。")]),t._v(" "),a("h2",{attrs:{id:"_3-babel-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-babel-loader"}},[t._v("#")]),t._v(" 3. babel-loader")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("babel-loader")]),t._v("可以对JavaScript ES6语法进行编译。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.js.org/loaders/babel-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-loader"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel官网"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_3-1-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-安装"}},[t._v("#")]),t._v(" 3.1 安装")]),t._v(" "),a("blockquote",[a("p",[t._v("webpack 4.x | babel-loader 8.x | babel 7.x")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D babel-loader @babel/core @babel/preset-env\n")])])]),a("blockquote",[a("p",[t._v("webpack 4.x | babel-loader 7.x | babel 6.x")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D babel-loader@7 babel-core babel-preset-env\n")])])]),a("h3",{attrs:{id:"_3-2-使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-使用方式"}},[t._v("#")]),t._v(" 3.2 使用方式")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("webpack.config.js")]),t._v("文件中添加")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.m?js$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(node_modules|bower_components)/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          presets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/preset-env'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("接着在终端中输入")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),a("p",[t._v("可以看到，在main.js中ES6的语法已经被编译为ES5的语法了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2018/12/11/FYVfr8.png",alt:"babel-loader"}})]),t._v(" "),a("p",[t._v("但是"),a("code",[t._v("index.html")]),t._v("仍然没有被打包到"),a("code",[t._v("dist")]),t._v("中，我们可以手动在"),a("code",[t._v("dist")]),t._v("下创建一个html文件，只有在一个文件的时候可以使用这种方式，但是如果项目很大，文件很多。手动创建的话，就会很繁琐。这时候就需要一个"),a("code",[t._v("webpack")]),t._v("的一个插件了。叫做"),a("code",[t._v("HtmlWebpackPlugin")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_4-htmlwebpackplugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-htmlwebpackplugin"}},[t._v("#")]),t._v(" 4. HtmlWebpackPlugin")]),t._v(" "),a("p",[t._v("这个插件可以将html文件进行打包，具体的使用方式可以看官方文档。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.js.org/plugins/html-webpack-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HtmlWebpackPlugin"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_4-1-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-安装"}},[t._v("#")]),t._v(" 4.1 安装")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev html-webpack-plugin\n")])])]),a("h3",{attrs:{id:"_4-2-使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-使用方式"}},[t._v("#")]),t._v(" 4.2 使用方式")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" HtmlWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/js/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js/main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//plugins: [new HtmlWebpackPlugin()]//这个是默认，也可以添加一些参数")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模板")]),t._v("\n            template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/view/index.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出的地址/dist/...")]),t._v("\n            filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"view/index.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标题")]),t._v("\n            title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ES6-Note"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            inject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在终端中输入")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),a("p",[t._v("会自动在这个目录下生成html文件，"),a("code",[t._v("dist/view/index.html")]),t._v("，而且会自动引入入口文件打包生成的js文件。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2018/12/11/FYeG11.png",alt:"HtmlWebapckPlugin"}})]),t._v(" "),a("p",[t._v("到此，使用"),a("code",[t._v("webpack")]),t._v("和"),a("code",[t._v("babel-loader")]),t._v("编译"),a("code",[t._v("ES6")]),t._v("已经成功了。")]),t._v(" "),a("p",[t._v("可是确有一点问题，就是不能自动编译，每次修改完原js文件需要再次打包。这是我们就需要一个"),a("code",[t._v("webpack")]),t._v("的一个服务了。"),a("code",[t._v("webpack-dev-server")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_5-webpack-dev-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-webpack-dev-server"}},[t._v("#")]),t._v(" 5. webpack-dev-server")]),t._v(" "),a("p",[a("code",[t._v("webpack-dev-server")]),t._v("提供一个简单的web服务，并且可以进行实时重新加载。")]),t._v(" "),a("h3",{attrs:{id:"_5-1-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-安装"}},[t._v("#")]),t._v(" 5.1 安装")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev webpack-dev-server\n")])])]),a("h3",{attrs:{id:"_5-2-使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-使用方式"}},[t._v("#")]),t._v(" 5.2 使用方式")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("webpack.config.js")]),t._v("中添加")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口")]),t._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/js/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 出口")]),t._v("\n    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js/main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件目录")]),t._v("\n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    model"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("    devServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("        contentBase"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dist'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在"),a("code",[t._v("package.json")]),t._v("中添加")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Error: no test specified"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(' && exit 1"')]),t._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack --config webpack.config.js"')]),t._v(",\n+ "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack-dev-server"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n")])])]),a("p",[t._v("在终端中输入")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run start\n")])])]),a("p",[t._v("然后再浏览器中输入"),a("code",[t._v("localhost:8080")]),t._v("，就可以创建的本地服务器。")]),t._v(" "),a("p",[t._v("比如将"),a("code",[t._v("src/js/index.js")]),t._v("改为"),a("code",[t._v("let a = 30")]),t._v("。服务器会自动打包并且浏览器会自动刷新，就可以在"),a("code",[t._v("console")]),t._v("中看到10变为了30。")]),t._v(" "),a("p",[a("code",[t._v("ctrl + c")]),t._v("可以关闭服务器。")]),t._v(" "),a("h2",{attrs:{id:"_6-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-总结"}},[t._v("#")]),t._v(" 6. 总结")]),t._v(" "),a("p",[t._v("综上，通过上面的一系列步骤就可以创建一个最基本的ES6的编译环境。还有很多的工具可以来编译ES6。在"),a("code",[t._v("babel")]),t._v("官网中列出了很多的工具。"),a("code",[t._v("webpack")]),t._v("只是其中一种。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2018/12/11/FYunnP.png",alt:"babel"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);