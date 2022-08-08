import{_ as e,r as t,o,c as p,b as n,d as l,e as s,a as c}from"./app.bd40bae0.js";const i={},u={id:"\u73AF\u5F62\u94FE\u8868",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#\u73AF\u5F62\u94FE\u8868","aria-hidden":"true"},"#",-1),d=s(),k={href:"https://leetcode.cn/problems/linked-list-cycle/",target:"_blank",rel:"noopener noreferrer"},v=s("\u73AF\u5F62\u94FE\u8868"),m=c(`<p><img src="https://raw.githubusercontent.com/sixgodsama/tz/main/public/202207220033708.png" alt="image-20220722003316664"></p><h3 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF</h3><blockquote><ul><li>\u4E24\u4E2A\u4EBA\u5728\u5706\u5F62\u64CD\u573A\u4E0A\u7684\u8D77\u70B9\u540C\u4E8B\u8D77\u8DD1\uFF0C \u901F\u5EA6\u5FEB\u7684\u4EBA\u4E00\u5B9A\u4F1A\u8D85\u8FC7\u901F\u5EA6\u6162\u7684\u4EBA\u4E00\u5708</li><li>\u7528\u4E00\u5FEB\u4E00\u6162\u4E24\u4E2A\u6307\u9488\u904D\u5386\u94FE\u8868\uFF0C\u5982\u679C\u6307\u9488\u80FD\u591F\u76F8\u9022\uFF0C \u90A3\u4E48\u94FE\u8868\u5C31\u6709\u73AF</li></ul></blockquote><h3 id="\u89E3\u9898\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u6B65\u9AA4" aria-hidden="true">#</a> \u89E3\u9898\u6B65\u9AA4</h3><ul><li>\u7528\u4E00\u5FEB\u4E00\u6162\u4E24\u4E2A\u6307\u9488\u904D\u5386\u94FE\u8868\uFF0C\u5982\u679C\u6307\u9488\u80FD\u591F\u76F8\u9022\uFF0C \u8FD4\u56DEtrue</li><li>\u904D\u5386\u7ED3\u675F\u540E\uFF0C\u8FD8\u6CA1\u6709\u8FD4\u56DEfalse</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.next = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">hasCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token keyword">let</span> fast <span class="token operator">=</span> head
    <span class="token keyword">let</span> slow <span class="token operator">=</span> head

    <span class="token keyword">while</span><span class="token punctuation">(</span>fast<span class="token operator">?.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
        <span class="token keyword">if</span><span class="token punctuation">(</span>fast <span class="token operator">===</span> slow<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// \u5B57\u5178</span>

<span class="token keyword">var</span> <span class="token function-variable function">hasCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function b(h,f){const a=t("ExternalLinkIcon");return o(),p("div",null,[n("h2",u,[r,d,n("a",k,[v,l(a)])]),m])}var _=e(i,[["render",b],["__file","c4115c1e.html.vue"]]);export{_ as default};
