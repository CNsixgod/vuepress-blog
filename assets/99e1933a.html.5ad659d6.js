import{_ as n,o as s,c as a,a as p}from"./app.bd40bae0.js";const t={},e=p(`<h2 id="\u4EC0\u4E48\u662F\u6DF1\u5EA6\u5E7F\u5EA6\u4F18\u5148\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u6DF1\u5EA6\u5E7F\u5EA6\u4F18\u5148\u904D\u5386" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u6DF1\u5EA6\u5E7F\u5EA6\u4F18\u5148\u904D\u5386</h2><ul><li>\u6DF1\u5EA6\u4F18\u5148\u904D\u5386: \u5C3D\u53EF\u80FD\u6DF1\u7684\u641C\u7D22\u6811\u7684\u5206\u652F</li><li>\u5E7F\u5EA6\u4F18\u5148\u904D\u5386: \u5148\u8BBF\u95EE\u79BB\u6839\u8282\u70B9\u6700\u8FD1\u7684\u904D\u5386</li></ul><img src="https://raw.githubusercontent.com/sixgodsama/tz/main/public202207252148866.png" alt="image-20220725214813027" style="zoom:150%;"><h2 id="\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u53E3\u8BC0" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u53E3\u8BC0" aria-hidden="true">#</a> \u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u53E3\u8BC0</h2><ul><li>\u8BBF\u95EE\u6839\u8282\u70B9</li><li>\u5BF9\u6839\u8282\u70B9\u7684children\u6328\u4E2A\u8FDB\u884C\u6DF1\u5EA6\u4F18\u5148\u904D\u5386</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">&quot;f&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">&quot;g&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>


<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
  root<span class="token punctuation">.</span>childrem<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>dfs<span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E7F\u5EA6\u4F18\u5148\u904D\u5386\u53E3\u8BC0" tabindex="-1"><a class="header-anchor" href="#\u5E7F\u5EA6\u4F18\u5148\u904D\u5386\u53E3\u8BC0" aria-hidden="true">#</a> \u5E7F\u5EA6\u4F18\u5148\u904D\u5386\u53E3\u8BC0</h2><ul><li>\u65B0\u5EFA\u4E00\u4E2A\u961F\u5217\uFF0C\u628A\u6839\u8282\u70B9\u5165\u961F\u3002</li><li>\u628A\u961F\u5934\u51FA\u961F\u5E76\u8BBF\u95EE\u3002</li><li>\u628A\u961F\u5934\u7684 children \u6328\u4E2A\u5165\u961F\u3002</li><li>\u91CD\u590D\u7B2C\u4E8C\u3001\u4E09\u6B65\uFF0C\u76F4\u5230\u961F\u5217\u4E3A\u7A7A\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">bfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
  
  <span class="token keyword">while</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    n<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function l(c,i){return s(),a("div",null,o)}var r=n(t,[["render",l],["__file","99e1933a.html.vue"]]);export{r as default};