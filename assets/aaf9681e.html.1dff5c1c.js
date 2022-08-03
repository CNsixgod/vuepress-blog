import{_ as e,r as p,o as t,c as o,b as n,d as c,e as s,a as l}from"./app.9a9cc1a2.js";const i={},r={id:"\u4E24\u6570\u76F8\u52A0",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#\u4E24\u6570\u76F8\u52A0","aria-hidden":"true"},"#",-1),d=s(),k={href:"https://leetcode.cn/problems/add-two-numbers/",target:"_blank",rel:"noopener noreferrer"},v=s("\u4E24\u6570\u76F8\u52A0"),m=l(`<p><img src="https://raw.githubusercontent.com/sixgodsama/tz/main/public/202207220012000.png" alt="image-20220722001246960"></p><h3 id="\u89E3\u9898\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u6B65\u9AA4" aria-hidden="true">#</a> \u89E3\u9898\u6B65\u9AA4</h3><ul><li>\u65B0\u5EFA\u4E00\u4E2A\u7A7A\u94FE\u8868</li><li>\u904D\u5386\u88AB\u76F8\u52A0\u7684\u4E24\u4E2A\u94FE\u8868\uFF0C \u6A21\u62DF\u76F8\u52A0\u7684\u64CD\u4F5C\uFF0C \u5C06\u4E2A\u4F4D\u6570\u8FFD\u52A0\u5230\u65B0\u94FE\u8868\u4E0A\uFF0C \u5C06\u5341\u4F4D\u6570\u7559\u5230\u4E0B\u4E00\u4F4D\u53BB\u76F8\u52A0</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addTwoNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> l3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> p1 <span class="token operator">=</span> l1
    <span class="token keyword">let</span> p2 <span class="token operator">=</span> l2
    <span class="token keyword">let</span> p3 <span class="token operator">=</span> l3

    <span class="token keyword">let</span> carry <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>p1 <span class="token operator">||</span> p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> v1 <span class="token operator">=</span> p1<span class="token operator">?.</span>val <span class="token operator">??</span> <span class="token number">0</span>
        <span class="token keyword">const</span> v2 <span class="token operator">=</span> p2<span class="token operator">?.</span>val <span class="token operator">??</span> <span class="token number">0</span>
        <span class="token keyword">const</span> val <span class="token operator">=</span> v1 <span class="token operator">+</span> v2 <span class="token operator">+</span> carry
        carry <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>val <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span>
        p3<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span> p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next
        <span class="token keyword">if</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span> p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next
        p3 <span class="token operator">=</span> p3<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>carry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        p3<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>carry<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> l3<span class="token punctuation">.</span>next

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function b(h,w){const a=p("ExternalLinkIcon");return t(),o("div",null,[n("h2",r,[u,d,n("a",k,[v,c(a)])]),m])}var _=e(i,[["render",b],["__file","aaf9681e.html.vue"]]);export{_ as default};
