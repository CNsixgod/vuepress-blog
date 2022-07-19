import{_ as e,o as n,c as i,a as s}from"./app.57e79d87.js";const r={},l=s(`<p><strong>\u5E38\u89C1JS\u6267\u884C\u9519\u8BEF</strong></p><ol><li>SyntaxError</li></ol><blockquote><p>\u89E3\u6790\u65F6\u53D1\u751F\u8BED\u6CD5\u9519\u8BEF</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u63A7\u5236\u53F0\u8FD0\u884C
const xx,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>window.onerror\u6355\u83B7\u4E0D\u5230SyntxError\uFF0C\u4E00\u822CSyntaxError\u5728\u6784\u5EFA\u9636\u6BB5\uFF0C\u751A\u81F3\u672C\u5730\u5F00\u53D1\u9636\u6BB5\u5C31\u4F1A\u88AB\u53D1\u73B0\u3002</p><ol><li>TypeError</li></ol><blockquote><p>\u503C\u4E0D\u662F\u6240\u671F\u5F85\u7684\u7C7B\u578B</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u63A7\u5236\u53F0\u8FD0\u884C
const person = void 0
person.name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>ReferenceError</li></ol><blockquote><p>\u5F15\u7528\u672A\u58F0\u660E\u7684\u53D8\u91CF</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u63A7\u5236\u53F0\u8FD0\u884C
nodefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>RangeError</li></ol><blockquote><p>\u5F53\u4E00\u4E2A\u503C\u4E0D\u5728\u5176\u6240\u5141\u8BB8\u7684\u8303\u56F4\u6216\u8005\u96C6\u5408\u4E2D</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(function fn ( ) { fn() })()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u7F51\u7EDC\u9519\u8BEF</strong></p><ol><li>ResourceError</li></ol><blockquote><p>\u8D44\u6E90\u52A0\u8F7D\u9519\u8BEF</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Image().src = &#39;/remote/image/notdeinfed.png&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>HttpError</li></ol><blockquote><p>Http\u8BF7\u6C42\u9519\u8BEF</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u63A7\u5236\u53F0\u8FD0\u884C
fetch(&#39;/remote/notdefined&#39;, {})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>try/catch</strong></p><blockquote><p>\u80FD\u6355\u83B7\u5E38\u89C4\u8FD0\u884C\u65F6\u9519\u8BEF\uFF0C\u8BED\u6CD5\u9519\u8BEF\u548C\u5F02\u6B65\u9519\u8BEF\u4E0D\u884C</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5E38\u89C4\u8FD0\u884C\u65F6\u9519\u8BEF\uFF0C\u53EF\u4EE5\u6355\u83B7 \u2705
try {
  console.log(notdefined);
} catch(e) {
  console.log(&#39;\u6355\u83B7\u5230\u5F02\u5E38\uFF1A&#39;, e);
}

// \u8BED\u6CD5\u9519\u8BEF\uFF0C\u4E0D\u80FD\u6355\u83B7 \u274C
try {
  const notdefined,
} catch(e) {
  console.log(&#39;\u6355\u83B7\u5230\u5F02\u5E38\uFF1A&#39;, e);
}

// \u5F02\u6B65\u9519\u8BEF\uFF0C\u4E0D\u80FD\u6355\u83B7 \u274C
try {
  setTimeout(() =&gt; {
    console.log(notdefined);
  }, 0)
} catch(e) {
  console.log(&#39;\u6355\u83B7\u5230\u5F02\u5E38\uFF1A&#39;,e);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>try/catch\u6709\u5B83\u7EC6\u81F4\u5904\u7406\u7684\u4F18\u52BF\uFF0C\u4F46\u7F3A\u70B9\u4E5F\u6BD4\u8F83\u660E\u663E\u3002</p><p><strong>window.onerror</strong></p><blockquote><p>pure js\u9519\u8BEF\u6536\u96C6\uFF0Cwindow.onerror\uFF0C\u5F53 JS \u8FD0\u884C\u65F6\u9519\u8BEF\u53D1\u751F\u65F6\uFF0Cwindow \u4F1A\u89E6\u53D1\u4E00\u4E2A ErrorEvent \u63A5\u53E3\u7684 error \u4E8B\u4EF6\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
* @param {String} message    \u9519\u8BEF\u4FE1\u606F
* @param {String} source    \u51FA\u9519\u6587\u4EF6
* @param {Number} lineno    \u884C\u53F7
* @param {Number} colno    \u5217\u53F7
* @param {Object} error  Error\u5BF9\u8C61
*/

window.onerror = function(message, source, lineno, colno, error) {
   console.log(&#39;\u6355\u83B7\u5230\u5F02\u5E38\uFF1A&#39;, {message, source, lineno, colno, error});
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5148\u9A8C\u8BC1\u4E0B\u51E0\u4E2A\u9519\u8BEF\u662F\u5426\u53EF\u4EE5\u6355\u83B7\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5E38\u89C4\u8FD0\u884C\u65F6\u9519\u8BEF\uFF0C\u53EF\u4EE5\u6355\u83B7 \u2705

window.onerror = function(message, source, lineno, colno, error) {
  console.log(&#39;\u6355\u83B7\u5230\u5F02\u5E38\uFF1A&#39;,{message, source, lineno, colno, error});
}
console.log(notdefined);

// \u8BED\u6CD5\u9519\u8BEF\uFF0C\u4E0D\u80FD\u6355\u83B7 \u274C
window.onerror = function(message, source, lineno, colno, error) {
  console.log(&#39;\u6355\u83B7\u5230\u5F02\u5E38\uFF1A&#39;,{message, source, lineno, colno, error});
}
const notdefined,

// \u5F02\u6B65\u9519\u8BEF\uFF0C\u53EF\u4EE5\u6355\u83B7 \u2705
window.onerror = function(message, source, lineno, colno, error) {
  console.log(&#39;\u6355\u83B7\u5230\u5F02\u5E38\uFF1A&#39;,{message, source, lineno, colno, error});
}
setTimeout(() =&gt; {
  console.log(notdefined);
}, 0)

// \u8D44\u6E90\u9519\u8BEF\uFF0C\u4E0D\u80FD\u6355\u83B7 \u274C
&lt;script&gt;
  window.onerror = function(message, source, lineno, colno, error) {
  console.log(&#39;\u6355\u83B7\u5230\u5F02\u5E38\uFF1A&#39;,{message, source, lineno, colno, error});
  return true;
}
&lt;/script&gt;
&lt;img src=&quot;https://yun.tuia.cn/image/kkk.png&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>window.onerror \u4E0D\u80FD\u6355\u83B7\u8D44\u6E90\u9519\u8BEF\u600E\u4E48\u529E\uFF1F</p><p><strong>window.addEventListener</strong></p><blockquote><p>\u5F53\u4E00\u9879\u8D44\u6E90\uFF08\u5982\u56FE\u7247\u6216\u811A\u672C\uFF09\u52A0\u8F7D\u5931\u8D25\uFF0C\u52A0\u8F7D\u8D44\u6E90\u7684\u5143\u7D20\u4F1A\u89E6\u53D1\u4E00\u4E2A Event \u63A5\u53E3\u7684 error \u4E8B\u4EF6\uFF0C\u8FD9\u4E9B error \u4E8B\u4EF6\u4E0D\u4F1A\u5411\u4E0A\u5192\u6CE1\u5230 window\uFF0C\u4F46\u80FD\u88AB\u6355\u83B7\u3002\u800Cwindow.onerror\u4E0D\u80FD\u76D1\u6D4B\u6355\u83B7\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u56FE\u7247\u3001script\u3001css\u52A0\u8F7D\u9519\u8BEF\uFF0C\u90FD\u80FD\u88AB\u6355\u83B7 \u2705
&lt;script&gt; window.addEventListener(&#39;error&#39;, (error) =&gt; {
   console.log(&#39;\u6355\u83B7\u5230\u5F02\u5E38\uFF1A&#39;, error);
 }, true) &lt;/script&gt;
&lt;img src=&quot;https://yun.tuia.cn/image/kkk.png&quot;&gt;
&lt;script src=&quot;https://yun.tuia.cn/foundnull.js&quot;&gt;&lt;/script&gt;
&lt;link href=&quot;https://yun.tuia.cn/foundnull.css&quot; rel=&quot;stylesheet&quot;/&gt;

// new Image\u9519\u8BEF\uFF0C\u4E0D\u80FD\u6355\u83B7 \u274C
&lt;script&gt; window.addEventListener(&#39;error&#39;, (error) =&gt; {
    console.log(&#39;\u6355\u83B7\u5230\u5F02\u5E38\uFF1A&#39;, error);
  }, true) &lt;/script&gt;
&lt;script&gt; new Image().src = &#39;https://yun.tuia.cn/image/lll.png&#39; &lt;/script&gt;

// fetch\u9519\u8BEF\uFF0C\u4E0D\u80FD\u6355\u83B7 \u274C
&lt;script&gt; window.addEventListener(&#39;error&#39;, (error) =&gt; {
    console.log(&#39;\u6355\u83B7\u5230\u5F02\u5E38\uFF1A&#39;, error);
  }, true) &lt;/script&gt;
&lt;script&gt; fetch(&#39;https://tuia.cn/test&#39;) &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>new Image\u8FD0\u7528\u7684\u6BD4\u8F83\u5C11\uFF0C\u53EF\u4EE5\u5355\u72EC\u81EA\u5DF1\u5904\u7406\u81EA\u5DF1\u7684\u9519\u8BEF\u3002</p><p>\u4F46\u901A\u7528\u7684fetch\u600E\u4E48\u529E\u5462\uFF0Cfetch\u8FD4\u56DEPromise\uFF0C\u4F46Promise\u7684\u9519\u8BEF\u4E0D\u80FD\u88AB\u6355\u83B7\uFF0C\u600E\u4E48\u529E\u5462\uFF1F</p><p><strong>Promise\u9519\u8BEF</strong></p><ol><li>\u666E\u901APromise\u9519\u8BEF</li></ol><blockquote><p>try/catch\u4E0D\u80FD\u6355\u83B7Promise\u4E2D\u7684\u9519\u8BEF</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// try/catch \u4E0D\u80FD\u5904\u7406 JSON.parse \u7684\u9519\u8BEF\uFF0C\u56E0\u4E3A\u5B83\u5728 Promise \u4E2D
try {
  new Promise((resolve,reject) =&gt; {
    JSON.parse(&#39;&#39;)
    resolve();
  })
} catch(err) {
  console.error(&#39;in try catch&#39;, err)
}

// \u9700\u8981\u4F7F\u7528catch\u65B9\u6CD5
new Promise((resolve,reject) =&gt; {
  JSON.parse(&#39;&#39;)
  resolve();
}).catch(err =&gt; {
  console.log(&#39;in catch fn&#39;, err)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>async\u9519\u8BEF</li></ol><blockquote><p>try/catch\u4E0D\u80FD\u6355\u83B7async\u5305\u88F9\u7684\u9519\u8BEF</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const getJSON = async () =&gt; {
  throw new Error(&#39;inner error&#39;)
}

// \u901A\u8FC7try/catch\u5904\u7406
const makeRequest = async () =&gt; {
    try {
        // \u6355\u83B7\u4E0D\u5230
        JSON.parse(getJSON());
    } catch (err) {
        console.log(&#39;outer&#39;, err);
    }
};

try {
    // try/catch\u4E0D\u5230
    makeRequest()
} catch(err) {
    console.error(&#39;in try catch&#39;, err)
}

try {
    // \u9700\u8981await\uFF0C\u624D\u80FD\u6355\u83B7\u5230
    await makeRequest()
} catch(err) {
    console.error(&#39;in try catch&#39;, err)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>import chunk\u9519\u8BEF</li></ol><blockquote><p>import\u5176\u5B9E\u8FD4\u56DE\u7684\u4E5F\u662F\u4E00\u4E2Apromise\uFF0C\u56E0\u6B64\u4F7F\u7528\u5982\u4E0B\u4E24\u79CD\u65B9\u5F0F\u6355\u83B7\u9519\u8BEF</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Promise catch\u65B9\u6CD5
import(/* webpackChunkName: &quot;incentive&quot; */&#39;./index&#39;).then(module =&gt; {
    module.default()
}).catch((err) =&gt; {
    console.error(&#39;in catch fn&#39;, err)
})

// await \u65B9\u6CD5\uFF0Ctry catch
try {
    const module = await import(/* webpackChunkName: &quot;incentive&quot; */&#39;./index&#39;);
    module.default()
} catch(err) {
    console.error(&#39;in try catch&#39;, err)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C0F\u7ED3\uFF1A\u5168\u5C40\u6355\u83B7Promise\u4E2D\u7684\u9519\u8BEF</p><p>\u4EE5\u4E0A\u4E09\u79CD\u5176\u5B9E\u5F52\u7ED3\u4E3APromise\u7C7B\u578B\u9519\u8BEF\uFF0C\u53EF\u4EE5\u901A\u8FC7unhandledrejection\u6355\u83B7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5168\u5C40\u7EDF\u4E00\u5904\u7406Promise
window.addEventListener(&quot;unhandledrejection&quot;, function(e){
  console.log(&#39;\u6355\u83B7\u5230\u5F02\u5E38\uFF1A&#39;, e);
});
fetch(&#39;https://tuia.cn/test&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u9632\u6B62\u6709\u6F0F\u6389\u7684 Promise \u5F02\u5E38\uFF0C\u53EF\u901A\u8FC7unhandledrejection\u7528\u6765\u5168\u5C40\u76D1\u542CUncaught Promise Error\u3002</p><p><strong>React\u9519\u8BEF</strong></p><blockquote><p>react \u901A\u8FC7componentDidCatch\uFF0C\u58F0\u660E\u4E00\u4E2A\u9519\u8BEF\u8FB9\u754C\u7684\u7EC4\u4EF6</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // \u66F4\u65B0 state \u4F7F\u4E0B\u4E00\u6B21\u6E32\u67D3\u80FD\u591F\u663E\u793A\u964D\u7EA7\u540E\u7684 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // \u4F60\u540C\u6837\u53EF\u4EE5\u5C06\u9519\u8BEF\u65E5\u5FD7\u4E0A\u62A5\u7ED9\u670D\u52A1\u5668
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // \u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49\u964D\u7EA7\u540E\u7684 UI \u5E76\u6E32\u67D3
      return &lt;h1&gt;Something went wrong.&lt;/h1&gt;;
    }

    return this.props.children;
  }
}

class App extends React.Component {

  render() {
    return (
    &lt;ErrorBoundary&gt;
      &lt;MyWidget /&gt;
    &lt;/ErrorBoundary&gt;
    )
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46error boundaries\u5E76\u4E0D\u4F1A\u6355\u6349\u4EE5\u4E0B\u9519\u8BEF\uFF1AReact\u4E8B\u4EF6\u5904\u7406\uFF0C\u5F02\u6B65\u4EE3\u7801\uFF0Cerror boundaries\u81EA\u5DF1\u629B\u51FA\u7684\u9519\u8BEF</p>`,54),d=[l];function c(t,a){return n(),i("div",null,d)}var o=e(r,[["render",c],["__file","5418e5b0.html.vue"]]);export{o as default};
