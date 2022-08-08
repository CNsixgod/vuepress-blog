import{_ as e,r as t,o as i,c as l,b as n,d as o,e as s,a as c}from"./app.bd40bae0.js";const p={},r={id:"\u53CD\u8F6C\u94FE\u8868",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#\u53CD\u8F6C\u94FE\u8868","aria-hidden":"true"},"#",-1),u=s(),v={href:"https://leetcode.cn/problems/reverse-linked-list/",target:"_blank",rel:"noopener noreferrer"},k=s("\u53CD\u8F6C\u94FE\u8868"),m=c(`<p><img src="https://raw.githubusercontent.com/sixgodsama/tz/main/public/202207212352022.png" alt="image-20220721235237962"></p><h3 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF</h3><blockquote><ul><li>\u53CD\u8F6C\u4E24\u4E2A\u8282\u70B9\uFF1A \u5C06 n+1\u7684next\u6307\u5411n</li><li>\u53CD\u8F6C\u591A\u4E2A\u8282\u70B9\uFF1A\u53CC\u6307\u9488\u904D\u5386\u94FE\u8868\uFF0C\u91CD\u590D\u4E0A\u8FF0\u64CD\u4F5C</li></ul></blockquote><h3 id="\u89E3\u9898\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u6B65\u9AA4" aria-hidden="true">#</a> \u89E3\u9898\u6B65\u9AA4</h3><ul><li>\u53CC\u6307\u9488\u4E00\u524D\u4E00\u540E \u904D\u5386\u94FE\u8868</li><li>\u53CD\u8F6C\u6307\u9488</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> p1 <span class="token operator">=</span> head
    <span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> temp <span class="token operator">=</span> p1<span class="token punctuation">.</span>next
        p1<span class="token punctuation">.</span>next <span class="token operator">=</span> p2
        p2 <span class="token operator">=</span> p1
        p1 <span class="token operator">=</span> temp
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> p2
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function b(h,_){const a=t("ExternalLinkIcon");return i(),l("div",null,[n("h2",r,[d,u,n("a",v,[k,o(a)])]),m])}var x=e(p,[["render",b],["__file","2a6f2b34.html.vue"]]);export{x as default};
