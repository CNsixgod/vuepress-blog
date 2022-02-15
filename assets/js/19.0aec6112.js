(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{613:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("查看 path")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" path\n")])])]),a("p",[s._v("方法一：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置完后可以通过 echo $PATH 查看配置结果。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#生效方法：立即生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#有效期限：临时改变，只能在当前的终端窗口中有效，当前窗口关闭后就会恢")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#复原有的 path 配置 #用户局限：仅对当前用户")]),s._v("\n")])])]),a("p",[s._v("方法二：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#通过修改.bashrc 文件:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在最后一行添上：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#生效方法：（有以下两种）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1、关闭当前终端窗口，重新打开一个新终端窗口就能生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2、输入“source ~/.bashrc”命令，立即生效 #有效期限：永久有效 #用户局限：仅对当前用户")]),s._v("\n\n")])])]),a("p",[s._v("方法三：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#通过修改 profile 文件:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#生效方法：系统重启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#有效期限：永久有效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用户局限：对所有用户")]),s._v("\n\n")])])]),a("p",[s._v("方法四：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#通过修改 environment 文件:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/environment\n在 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/sbin:/usr/sbin:/usr/bin:/sbin:/bin"')]),s._v("中加入\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":/usr/local/bin"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#生效方法：系统重启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#有效期限：永久有效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用户局限：对所有用户")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);