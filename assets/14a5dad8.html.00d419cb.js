import{_ as n,o as s,c as a,a as t}from"./app.da9c2790.js";const p={},o=t(`<blockquote><p><code>getBoundingClientRect</code>\u7528\u4E8E\u83B7\u5F97\u9875\u9762\u4E2D\u67D0\u4E2A\u5143\u7D20\u7684\u5DE6\uFF0C\u4E0A\uFF0C\u53F3\u548C\u4E0B\u5206\u522B\u76F8\u5BF9\u6D4F\u89C8\u5668\u89C6\u7A97\u7684\u4F4D\u7F6E\u3002<code>getBoundingClientRect</code>\u662F<code>DOM</code>\u5143\u7D20\u5230\u6D4F\u89C8\u5668\u53EF\u89C6\u8303\u56F4\u7684\u8DDD\u79BB\uFF08\u4E0D\u5305\u542B\u6587\u6863\u5377\u8D77\u7684\u90E8\u5206\uFF09\u3002</p><ul><li>\u8BE5\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A<code>Object</code>\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u6709 6 \u4E2A\u5C5E\u6027\uFF1A<code>top,lef,right,bottom,width,height</code>\uFF1B</li><li>\u8FD9\u91CC\u7684 top\u3001left \u548C css \u4E2D\u7684\u7406\u89E3\u5F88\u76F8\u4F3C\uFF0Cwidth\u3001height \u662F\u5143\u7D20\u81EA\u8EAB\u7684\u5BBD\u9AD8;</li><li>\u4F46\u662F right\uFF0Cbottom \u548C css \u4E2D\u7684\u7406\u89E3\u6709\u70B9\u4E0D\u4E00\u6837\u3002right \u662F\u6307\u5143\u7D20\u53F3\u8FB9\u754C\u8DDD\u7A97\u53E3\u6700\u5DE6\u8FB9\u7684\u8DDD\u79BB\uFF0Cbottom \u662F\u6307\u5143\u7D20\u4E0B\u8FB9\u754C\u8DDD\u7A97\u53E3\u6700\u4E0A\u9762\u7684\u8DDD\u79BB</li></ul></blockquote><p><img src="https://raw.githubusercontent.com/sixgodsama/tz/main/public/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxNy85LzIwLzc1MTI3YzE5ZWQyZjlhZGZjMDI2YjE2ZjZmOTlkZDVl.png" alt="aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxNy85LzIwLzc1MTI3YzE5ZWQyZjlhZGZjMDI2YjE2ZjZmOTlkZDVl"></p><h3 id="\u83B7\u53D6\u9875\u9762\u5143\u7D20\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u9875\u9762\u5143\u7D20\u4F4D\u7F6E" aria-hidden="true">#</a> \u83B7\u53D6\u9875\u9762\u5143\u7D20\u4F4D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> x <span class="token operator">=</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left <span class="token operator">+</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollLeft<span class="token punctuation">;</span>

<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top <span class="token operator">+</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5224\u65AD\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u533A\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u533A\u57DF" aria-hidden="true">#</a> \u5224\u65AD\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u533A\u57DF</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isElementInViewport</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> rect <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    rect<span class="token punctuation">.</span>top <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
    rect<span class="token punctuation">.</span>left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
    rect<span class="token punctuation">.</span>bottom <span class="token operator">&lt;=</span>
      <span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span>
        document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span> <span class="token comment">/*or $(window).height() */</span> <span class="token operator">&amp;&amp;</span>
    rect<span class="token punctuation">.</span>right <span class="token operator">&lt;=</span>
      <span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth <span class="token operator">||</span>
        document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">)</span> <span class="token comment">/*or $(window).width() */</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="options-\u6846\u663E\u793A\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#options-\u6846\u663E\u793A\u4F4D\u7F6E" aria-hidden="true">#</a> options \u6846\u663E\u793A\u4F4D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> position <span class="token operator">=</span>
  window<span class="token punctuation">.</span>innerHeight <span class="token operator">-</span> <span class="token punctuation">(</span>ref<span class="token operator">?.</span>current<span class="token operator">?.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> openToTop <span class="token operator">=</span> position <span class="token operator">&lt;</span> <span class="token number">240</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5143\u7D20\u504F\u79FB\u533A\u57DF offsetWidth (border + padding+width) offsetHeight (border + padding + height) offsetLeft (\u5143\u7D20\u8DDD\u79BB\u5B9A\u4F4D\u7236\u7EA7\u5DE6\u5185\u8FB9\u7EBF\u7684\u6C34\u5E73\u8DDD\u79BB) offsetTop (\u5143\u7D20\u8DDD\u79BB\u5B9A\u4F4D\u7236\u7EA7\u4E0A\u5185\u8FB9\u7EBF\u7684\u5782\u76F4\u8DDD\u79BB) offsetParent (\u83B7\u53D6\u5143\u7D20\u5B9A\u4F4D\u7236\u7EA7\uFF0C\u7236\u7EA7\u52A0\u9664\u4E86 position:inherit|initial|static \u4E4B\u5916\u7684\u5B9A\u4F4D\u5C5E\u6027\u5219\u4F1A\u5F97\u5230\u8BE5\u7236\u7EA7\uFF0C\u5426\u5219\u4E00\u76F4\u5F80\u4E0A\u627E\uFF0C\u76F4\u5230\u627E\u5230\u6709\u5B9A\u4F4D\u7684\u7956\u5148\u7EA7\u6216 body \u4E3A\u6B62\uFF0C\u5982\u679C\u5176\u7236\u7EA7\u6709 position:inherit \u7EE7\u627F\u5E76\u4E14\u7EE7\u627F\u5230\u5B9A\u4F4D\u5C5E\u6027\uFF0C\u5219\u5B9A\u4F4D\u7236\u7EA7\u4E5F\u4E3A\u5176\u7236\u7EA7\u5143\u7D20) firefox \u5E76\u6CA1\u6709\u8003\u8651\u56FA\u5B9A\u5B9A\u4F4D\u7684\u95EE\u9898\uFF0C\u5728\u52A0\u4E86\u56FA\u5B9A\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u706B\u72D0\u8FD4\u56DE body\uFF0C\u5176\u4ED6\u6D4F\u89C8\u5668\u8FD4\u56DE null \u5728\u67E5\u627E\u5143\u7D20\u5B9A\u4F4D\u7236\u7EA7\u7684\u65F6\u5019\uFF0C\u5F53\u5143\u7D20\u7684\u7236\u7EA7\u6709\u9664\u4E86 static,initial,inherit(\u7279\u6B8A\u60C5\u51B5\u9664\u5916)\u5916\u7684\u5B9A\u4F4D\uFF0C\u5219\u8BE5\u5143\u7D20\u7684\u5B9A\u4F4D\u7236\u7EA7\uFF0C\u4E3A\u8BE5\u7236\u5143\u7D20\uFF0C\u5426\u5219\u4F1A\u4E00\u76F4\u5F80\u4E0A\u627E\uFF0C\u76F4\u5230\u627E\u5230\u6709\u9664\u4E86\u4EE5\u4E0A\u5B9A\u4F4D\u7684\u5143\u7D20\u6216\u8005\u627E\u5230 body \u505C\u6B62 \u53EF\u89C6\u533A\u57DF clientHeight (padding + height)\u4E0D\u5305\u542B\u6EDA\u52A8\u6761\u90E8\u5206,\u4E5F\u5C31\u662F\u8BF4\u4E0D\u5305\u542B\u9690\u85CF\u7684\u90E8\u5206 clientWidth (padding + width)\u4E0D\u5305\u542B\u6EDA\u52A8\u6761\u90E8\u5206,\u4E5F\u5C31\u662F\u8BF4\u4E0D\u5305\u542B\u9690\u85CF\u7684\u90E8\u5206 clientTop (\u4E0A\u8FB9\u6846\u7684 width) clientLeft (\u5DE6\u8FB9\u6846\u7684 width) \u6EDA\u52A8\u533A\u57DF scrollwidth (padding + width)\u5305\u542B\u6C34\u5E73\u6EDA\u52A8\u6761\u90E8\u5206\uFF0C\u4E5F\u5C31\u662F\u5185\u5BB9\u533A\u57DF\u7684\u5BBD\u5EA6\uFF0C\u5305\u542B\u88AB\u9690\u85CF\u7684\u90E8\u5206 scrollHeight (padding + height)\u5305\u542B\u5782\u76F4\u6EDA\u52A8\u6761\u90E8\u5206\uFF0C\u4E5F\u5C31\u662F\u5185\u5BB9\u533A\u57DF\u7684\u9AD8\u5EA6\uFF0C\u5305\u542B\u88AB\u9690\u85CF\u7684\u90E8\u5206 \u4EE5\u4E0A\u4E24\u4E2A\u5C5E\u6027\u5982\u679C\u5185\u90E8\u6709\u9690\u85CF\u90E8\u5206\uFF0C\u5219\u5B83\u4EEC\u7684\u503C\u4E3A\u5B50\u5143\u7D20\u7684 margin + padding + border + (width | height) scrollLeft (\u6EDA\u52A8\u6761\u6EDA\u52A8\u7684\u6C34\u5E73\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u4E3A 0) scrollTop (\u6EDA\u52A8\u6761\u6EDA\u52A8\u7684\u5782\u76F4\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u4E3A 0) \u6D4F\u89C8\u5668\u7A97\u53E3\u5927\u5C0F window.innerWidth (\u6D4F\u89C8\u5668\u7A97\u53E3\u5BBD\u5EA6\uFF0C\u4E0D\u5305\u542B\u5DE5\u5177\u680F\uFF0C\u83DC\u5355\u7B49\uFF0C\u4EC5\u4EC5\u662F\u53EF\u89C6\u533A\u57DF dom \u7684 width) window.innerHeight (\u6D4F\u89C8\u5668\u7A97\u53E3\u9AD8\u5EA6\uFF0C\u4E0D\u5305\u542B\u5DE5\u5177\u680F\uFF0C\u83DC\u5355\u7B49\uFF0C\u4EC5\u4EC5\u662F\u53EF\u89C6\u533A\u57DF dom \u7684 height) window.outerWidth (\u6D4F\u89C8\u5668\u7A97\u53E3\u5BBD\u5EA6\uFF0C\u5305\u542B\u5DE5\u5177\u680F\u3001\u83DC\u5355\u7B49\uFF0C\u6574\u4E2A\u6D4F\u89C8\u5668\u7684 width) window.outerHeight (\u6D4F\u89C8\u5668\u7A97\u53E3\u9AD8\u5EA6\uFF0C\u5305\u542B\u5DE5\u5177\u680F\u3001\u83DC\u5355\u7B49,\u6574\u4E2A\u6D4F\u89C8\u5668\u7684 height) IE \u6709\u517C\u5BB9\u95EE\u9898\uFF0C\u53EF\u7528 document.documentElement.clientWidth|clientHeight \u4EE3\u66FF</p><h3 id="\u56FE\u7247\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> \u56FE\u7247\u61D2\u52A0\u8F7D</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading.gif<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading.gif<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_1280.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading.gif<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.pixabay.com/photo/2014/12/15/17/16/pier-569314_1280.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading.gif<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.pixabay.com/photo/2010/12/13/10/09/abstract-2384_1280.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  &lt;img src=&quot;loading.gif&quot; data-src=&quot;https://cdn.pixabay.com/photo/2015/10/24/11/09/drop-of-water-1004250_1280.jpg&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//\u5B58\u50A8\u56FE\u7247\u52A0\u8F7D\u5230\u7684\u4F4D\u7F6E\uFF0C\u907F\u514D\u6BCF\u6B21\u90FD\u4ECE\u7B2C\u4E00\u5F20\u56FE\u7247\u5F00\u59CB\u904D\u5386</span>
<span class="token function">lazyload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u9875\u9762\u8F7D\u5165\u5B8C\u6BD5\u52A0\u8F7D\u53EF\u662F\u533A\u57DF\u5185\u7684\u56FE\u7247</span>
<span class="token comment">// \u8282\u6D41\u51FD\u6570\uFF0C\u4FDD\u8BC1\u6BCF200ms\u89E6\u53D1\u4E00\u6B21</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token function">event</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;scroll&quot;</span><span class="token punctuation">,</span> <span class="token function">throttle</span><span class="token punctuation">(</span>lazyload<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">lazyload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u76D1\u542C\u9875\u9762\u6EDA\u52A8\u4E8B\u4EF6</span>
  <span class="token keyword">var</span> seeHeight <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span> <span class="token comment">//\u53EF\u89C1\u533A\u57DF\u9AD8\u5EA6</span>
  <span class="token keyword">var</span> scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span> <span class="token comment">//\u6EDA\u52A8\u6761\u8DDD\u79BB\u9876\u90E8\u9AD8\u5EA6</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> n<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> img<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>img<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>offsetTop<span class="token punctuation">,</span> seeHeight<span class="token punctuation">,</span> scrollTop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>img<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>offsetTop <span class="token operator">-</span> scrollTop <span class="token operator">&lt;</span> seeHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>img<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;loading.gif&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        img<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>src <span class="token operator">=</span> img<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;data-src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      n <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="intersectionobserver" tabindex="-1"><a class="header-anchor" href="#intersectionobserver" aria-hidden="true">#</a> IntersectionObserver</h2><blockquote><p>IntersectionObserver \u63A5\u53E3 (\u4ECE\u5C5E\u4E8E Intersection Observer API) \u63D0\u4F9B\u4E86\u4E00\u79CD\u5F02\u6B65\u89C2\u5BDF\u76EE\u6807\u5143\u7D20\u4E0E\u5176\u7956\u5148\u5143\u7D20\u6216\u9876\u7EA7\u6587\u6863\u89C6\u7A97(viewport)\u4EA4\u53C9\u72B6\u6001\u7684\u65B9\u6CD5\u3002\u7956\u5148\u5143\u7D20\u4E0E\u89C6\u7A97(viewport)\u88AB\u79F0\u4E3A\u6839(root)\u3002</p></blockquote><p><code>Intersection Observer</code>\u53EF\u4EE5\u4E0D\u7528\u76D1\u542C<code>scroll</code>\u4E8B\u4EF6\uFF0C\u505A\u5230\u5143\u7D20\u4E00\u53EF\u89C1\u4FBF\u8C03\u7528\u56DE\u8C03\uFF0C\u5728\u56DE\u8C03\u91CC\u9762\u6211\u4EEC\u6765\u5224\u65AD\u5143\u7D20\u662F\u5426\u53EF\u89C1\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>IntersectionObserver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> lazyImageObserver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entry<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> lazyImage <span class="token operator">=</span> entry<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
      <span class="token comment">// \u5982\u679C\u5143\u7D20\u53EF\u89C1</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>intersectionRatio <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lazyImage<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;loading.gif&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          lazyImage<span class="token punctuation">.</span>src <span class="token operator">=</span> lazyImage<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;data-src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        lazyImageObserver<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>lazyImage<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> img<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    lazyImageObserver<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>img<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),e=[o];function c(i,l){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","14a5dad8.html.vue"]]);export{r as default};