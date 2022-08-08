import{_ as n,o as s,c as a,a as e}from"./app.bd40bae0.js";const i={},l=e(`<p>\u67E5\u770B path</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u4E00\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/bin:<span class="token environment constant">$PATH</span>
<span class="token comment">#\u914D\u7F6E\u5B8C\u540E\u53EF\u4EE5\u901A\u8FC7 echo $PATH \u67E5\u770B\u914D\u7F6E\u7ED3\u679C\u3002</span>
<span class="token comment">#\u751F\u6548\u65B9\u6CD5\uFF1A\u7ACB\u5373\u751F\u6548</span>
<span class="token comment">#\u6709\u6548\u671F\u9650\uFF1A\u4E34\u65F6\u6539\u53D8\uFF0C\u53EA\u80FD\u5728\u5F53\u524D\u7684\u7EC8\u7AEF\u7A97\u53E3\u4E2D\u6709\u6548\uFF0C\u5F53\u524D\u7A97\u53E3\u5173\u95ED\u540E\u5C31\u4F1A\u6062</span>
<span class="token comment">#\u590D\u539F\u6709\u7684 path \u914D\u7F6E #\u7528\u6237\u5C40\u9650\uFF1A\u4EC5\u5BF9\u5F53\u524D\u7528\u6237</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u4E8C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u901A\u8FC7\u4FEE\u6539.bashrc \u6587\u4EF6:</span>
<span class="token function">vim</span> ~/.bashrc <span class="token comment">#\u5728\u6700\u540E\u4E00\u884C\u6DFB\u4E0A\uFF1A</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/bin:<span class="token environment constant">$PATH</span>
<span class="token comment">#\u751F\u6548\u65B9\u6CD5\uFF1A\uFF08\u6709\u4EE5\u4E0B\u4E24\u79CD\uFF09</span>
<span class="token comment">#1\u3001\u5173\u95ED\u5F53\u524D\u7EC8\u7AEF\u7A97\u53E3\uFF0C\u91CD\u65B0\u6253\u5F00\u4E00\u4E2A\u65B0\u7EC8\u7AEF\u7A97\u53E3\u5C31\u80FD\u751F\u6548</span>
<span class="token comment">#2\u3001\u8F93\u5165\u201Csource ~/.bashrc\u201D\u547D\u4EE4\uFF0C\u7ACB\u5373\u751F\u6548 #\u6709\u6548\u671F\u9650\uFF1A\u6C38\u4E45\u6709\u6548 #\u7528\u6237\u5C40\u9650\uFF1A\u4EC5\u5BF9\u5F53\u524D\u7528\u6237</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u4E09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u901A\u8FC7\u4FEE\u6539 profile \u6587\u4EF6:</span>
<span class="token function">vim</span> /etc/profile
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/bin:<span class="token environment constant">$PATH</span>
<span class="token comment">#\u751F\u6548\u65B9\u6CD5\uFF1A\u7CFB\u7EDF\u91CD\u542F</span>
<span class="token comment">#\u6709\u6548\u671F\u9650\uFF1A\u6C38\u4E45\u6709\u6548</span>
<span class="token comment">#\u7528\u6237\u5C40\u9650\uFF1A\u5BF9\u6240\u6709\u7528\u6237</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u56DB\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u901A\u8FC7\u4FEE\u6539 environment \u6587\u4EF6:</span>
<span class="token function">vim</span> /etc/environment
\u5728 <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/usr/local/sbin:/usr/sbin:/usr/bin:/sbin:/bin&quot;</span>\u4E2D\u52A0\u5165
<span class="token string">&quot;:/usr/local/bin&quot;</span>
<span class="token comment">#\u751F\u6548\u65B9\u6CD5\uFF1A\u7CFB\u7EDF\u91CD\u542F</span>
<span class="token comment">#\u6709\u6548\u671F\u9650\uFF1A\u6C38\u4E45\u6709\u6548</span>
<span class="token comment">#\u7528\u6237\u5C40\u9650\uFF1A\u5BF9\u6240\u6709\u7528\u6237</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[l];function t(o,p){return s(),a("div",null,c)}var d=n(i,[["render",t],["__file","1fcf987c.html.vue"]]);export{d as default};
