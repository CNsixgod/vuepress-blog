import{_ as s,o as n,c as a,a as e}from"./app.57e79d87.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/git/git/archive/v2.29.0.tar.gz

<span class="token function">tar</span> -zxvf v2.29.0.tar.gz -C /usr/local/src
<span class="token builtin class-name">cd</span> /usr/local/src

<span class="token function">mv</span> git-2.29.0 <span class="token function">git</span>
<span class="token comment">#\u5B89\u88C5\u73AF\u5883\u4F9D\u8D56</span>
yum <span class="token function">install</span> curl-devel expat-devel gettext-devel openssl-devel zlib-devel gcc perl-ExtUtils-MakeMaker -y
<span class="token comment"># \u5378\u8F7D\u539F\u6709\u7248\u672C\u6216\u5B89\u88C5\u73AF\u5883\u4F9D\u8D56\u65F6\u5B89\u88C5\u7684\u7248\u672C</span>
yum remove <span class="token function">git</span> -y
<span class="token comment"># \u7F16\u8BD1\u5230\u6307\u5B9A\u8DEF\u5F84</span>
<span class="token function">make</span> <span class="token assign-left variable">prefix</span><span class="token operator">=</span>/usr/local/src/git all
<span class="token comment"># \u5B89\u88C5\u5230\u6307\u5B9A\u8DEF\u5F84</span>
<span class="token function">make</span> <span class="token assign-left variable">prefix</span><span class="token operator">=</span>/usr/local/src/git <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#.bashrc</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GIT_HOME</span><span class="token operator">=</span>/usr/local/src/git
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">\${GIT_HOME}</span>/bin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[i];function t(o,r){return n(),a("div",null,c)}var d=s(l,[["render",t],["__file","76ab7892.html.vue"]]);export{d as default};
