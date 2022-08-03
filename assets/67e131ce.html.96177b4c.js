import{_ as n,o as s,c as t,a}from"./app.9a9cc1a2.js";const o={},p=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">///typescriptreact.code-snippets</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;React Function Component&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typescriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;rfc&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;import React from \\&quot;react\\&quot;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export interface \${1:MyComponent}Props {}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export const \${1} = (props: \${1}Props) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return null;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;A React function component with props&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;React Storybook Template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typescriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;story&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;import { Story } from \\&quot;@storybook/react\\&quot;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;import { withDesign } from \\&quot;storybook-addon-designs\\&quot;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;import React from \\&quot;react\\&quot;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;import { \${1:MyComponent}, \${1}Props } from \\&quot;.\\&quot;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export default {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  title: \\&quot;\${1}\\&quot;,&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  component: \${1},&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  decorators: [withDesign],&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  parameters: {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    design: {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      type: \\&quot;figma\\&quot;,&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      url: \\&quot;\\&quot;,&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  },&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export const Template: Story&lt;\${1}Props&gt; = (args) =&gt; (&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  &lt;\${1} {...args} /&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;);&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;A React Storybook CSF story with args&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[p];function i(u,c){return s(),t("div",null,e)}var l=n(o,[["render",i],["__file","67e131ce.html.vue"]]);export{l as default};
