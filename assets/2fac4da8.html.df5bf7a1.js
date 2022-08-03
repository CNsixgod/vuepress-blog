import{_ as n,o as s,c as a,a as e}from"./app.9a9cc1a2.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/src/
<span class="token function">wget</span> https://npm.taobao.org/mirrors/node/v14.15.5/node-v14.15.5-linux-x64.tar.xz
<span class="token function">tar</span> -xvf node-v14.15.5-linux-x64.tar.xz
<span class="token function">mv</span> node-v14.15.5-linux-x64 nodejs

<span class="token function">ln</span> -s /usr/local/src/nodejs/bin/npm /usr/local/bin/
<span class="token function">ln</span> -s /usr/local/src/nodejs/bin/node /usr/local/bin/

<span class="token comment"># .bashrc</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/src/nodejs/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[i];function o(t,r){return s(),a("div",null,c)}var u=n(l,[["render",o],["__file","2fac4da8.html.vue"]]);export{u as default};
