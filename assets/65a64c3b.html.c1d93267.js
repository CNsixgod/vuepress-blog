import{_ as t,r as e,o as p,c as o,b as n,d as c,e as s,a as l}from"./app.bd40bae0.js";const i={},u={id:"\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32","aria-hidden":"true"},"#",-1),k=s(),d={href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters/",target:"_blank",rel:"noopener noreferrer"},m=s("\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32"),v=l(`<p><img src="https://raw.githubusercontent.com/sixgodsama/tz/main/public/202207232058180.png" alt="image-20220723205853147"></p><h3 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF</h3><blockquote><ul><li>\u5148\u627E\u51FA\u6240\u6709\u7684\u4E0D\u5305\u542B\u91CD\u590D\u5B57\u7B26\u7684\u5B50\u4E32</li><li>\u627E\u51FA\u957F\u5EA6\u6700\u5927\u7684\u90A3\u4E2A\u5B50\u4E32\uFF0C \u8FD4\u56DE\u5176\u957F\u5EA6\u5373\u53EF</li></ul></blockquote><h3 id="\u89E3\u9898\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u6B65\u9AA4" aria-hidden="true">#</a> \u89E3\u9898\u6B65\u9AA4</h3><ul><li>\u7528\u53CC\u6307\u9488\u7EF4\u62A4\u4E00\u4E2A\u6ED1\u52A8\u7A97\u53E3\uFF0C \u7528\u6765\u526A\u5207\u5B50\u4E32</li><li>\u4E0D\u65AD\u79FB\u52A8\u53F3\u6307\u9488\uFF0C\u9047\u5230\u91CD\u590D\u5B57\u7B26\uFF0C\u5C31\u628A\u5DE6\u6307\u9488\u79FB\u52A8\u5230\u91CD\u590D\u5B57\u7B26\u7684\u4E0B\u4E00\u4F4D</li><li>\u8FC7\u7A0B\u4E2D\uFF0C\u8BB0\u5F55\u6240\u6709\u7A97\u53E3\u7684\u957F\u5EA6\uFF0C\u5E76\u8FD4\u56DE\u6700\u5927\u503C</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lengthOfLongestSubstring</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> lp <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> rp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> rp <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> rp <span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>rp<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>rp<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> lp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            lp <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>rp<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>

        res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> rp <span class="token operator">-</span> lp <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>

        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>rp<span class="token punctuation">]</span><span class="token punctuation">,</span> rp<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function b(h,_){const a=e("ExternalLinkIcon");return p(),o("div",null,[n("h2",u,[r,k,n("a",d,[m,c(a)])]),v])}var g=t(i,[["render",b],["__file","65a64c3b.html.vue"]]);export{g as default};