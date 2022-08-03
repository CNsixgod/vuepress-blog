import{_ as n,o as s,c as a,a as e}from"./app.9a9cc1a2.js";const t={},i=e(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>// .github/workflows   \u81EA\u52A8\u5316\u6D4B\u8BD5
<span class="token key atrule">name</span><span class="token punctuation">:</span> test
<span class="token key atrule">on</span><span class="token punctuation">:</span>
    <span class="token key atrule">push</span><span class="token punctuation">:</span> // \u5F53git push
        <span class="token key atrule">branches</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> master
        <span class="token key atrule">paths</span><span class="token punctuation">:</span> // \u5F53\u8FD9\u4E9B\u8DEF\u5F84\u6587\u4EF6\u53D8\u5316
            <span class="token punctuation">-</span> <span class="token string">&#39;.github/workflows/**&#39;</span>
            <span class="token punctuation">-</span> <span class="token string">&#39;__test__/**&#39;</span>
            <span class="token punctuation">-</span> <span class="token string">&#39;src/**&#39;</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
    <span class="token key atrule">test</span><span class="token punctuation">:</span>
        <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

        <span class="token key atrule">steps</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2 //\u7B2C\u4E09\u65B9
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use Node.js
              <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1
              <span class="token key atrule">with</span><span class="token punctuation">:</span>
                  <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">14</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> lint and test
              <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
                  npm i
                  npm run lint
                  npm run test:remote</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u6D4B\u8BD5\u673A</p><p>\u521B\u5EFA\u4F4E\u6743\u9650\u8D26\u53F7\u3002 root\u6743\u9650\u592A\u9AD8\u4E0D\u5B89\u5168</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>adduser work
passwd work
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0work \u7684sudo\u6743\u9650</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">whereis</span> sudoers <span class="token comment"># \u627E\u5230\u6587\u4EF6\u4F4D\u7F6E /etc/sudoers</span>
<span class="token function">chmod</span> u+w /etc/sudoers <span class="token comment"># \u4FEE\u6539\u6743\u9650  u\u8868\u793A\u6240\u6709\u8005 w \u5199\u6743\u9650 + \u8868\u793A\u6DFB\u52A0</span>

<span class="token function">vim</span> /etc/sudoers
<span class="token comment"># \u627E\u5230 \`root    ALL=(ALL)   ALL\`</span>
<span class="token comment"># \u6DFB\u52A0 \`work    ALL=(ALL)   ALL\`</span>
chomd u-w /etc/sudoers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u4F7F\u7528work\u767B\u5F55\uFF0C \u8F93\u5165su \u518D\u8F93\u5165root\u8D26\u53F7\u7684\u5BC6\u7801 \u5C31\u62E5\u6709\u8D85\u7EA7\u6743\u9650</p><h4 id="\u514D\u5BC6\u7801\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u514D\u5BC6\u7801\u767B\u5F55" aria-hidden="true">#</a> \u514D\u5BC6\u7801\u767B\u5F55</h4><ol><li>\u767B\u5F55\u4E3B\u673A \u521B\u5EFA~/.ssh/authorized_keys</li><li>\u4FEE\u6539\u6587\u4EF6\u5939\u6743\u9650 <ul><li>chmod 700 ~/.ssh</li><li>chmod 600 ~/.ssh/authorized_keys</li></ul></li><li>\u5C06\u672C\u673A\u7684<code>id_rsa.pub</code> \u7C98\u8D34\u8FDB\u6765</li></ol><h4 id="\u8F6F\u4EF6\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u5B89\u88C5" aria-hidden="true">#</a> \u8F6F\u4EF6\u5B89\u88C5</h4><p>git</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker, docker-compose</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> deploy for dev

<span class="token key atrule">on</span><span class="token punctuation">:</span>
    <span class="token key atrule">push</span><span class="token punctuation">:</span>
        <span class="token key atrule">branches</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&#39;dev&#39;</span> <span class="token comment"># \u53EA\u9488\u5BF9 dev \u5206\u652F</span>
        <span class="token key atrule">paths</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&#39;.github/workflows/*&#39;</span>
            <span class="token comment"># - &#39;__test__/**&#39; # dev \u4E0D\u9700\u8981\u7ACB\u5373\u6D4B\u8BD5</span>
            <span class="token punctuation">-</span> <span class="token string">&#39;src/**&#39;</span>
            <span class="token punctuation">-</span> <span class="token string">&#39;Dockerfile&#39;</span>
            <span class="token punctuation">-</span> <span class="token string">&#39;docker-compose.yml&#39;</span>
            <span class="token punctuation">-</span> <span class="token string">&#39;bin/*&#39;</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
    <span class="token key atrule">deploy-dev</span><span class="token punctuation">:</span>
        <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

        <span class="token key atrule">steps</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2 <span class="token comment"># \u83B7\u53D6\u6700\u65B0\u4EE3\u7801</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> set ssh key <span class="token comment"># \u4E34\u65F6\u8BBE\u7F6E ssh key</span>
              <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
                  mkdir -p ~/.ssh/
                  echo &quot;\${{secrets.WFP_ID_RSA}}&quot; &gt; ~/.ssh/id_rsa # secret \u5728\u8FD9\u91CC\u914D\u7F6E https://github.com/imooc-lego/biz-editor-server/settings/secrets
                  chmod 600 ~/.ssh/id_rsa
                  ssh-keyscan &quot;182.92.xxx.xxx&quot; &gt;&gt; ~/.ssh/known_hosts</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> deploy <span class="token comment"># \u90E8\u7F72</span>
              <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
                  ssh work@182.92.xxx.xxx &quot;
                    # \u3010\u6CE8\u610F\u3011\u7528 work \u8D26\u53F7\u767B\u5F55\uFF0C\u624B\u52A8\u521B\u5EFA /home/work/imooc-lego \u76EE\u5F55
                    # \u7136\u540E git clone https://username:password@github.com/imooc-lego/biz-editor-server.git -b dev \uFF08\u79C1\u6709\u4ED3\u5E93\uFF0C\u4F7F\u7528 github \u7528\u6237\u540D\u548C\u5BC6\u7801\uFF09
                    # \u8BB0\u5F97\u5220\u9664 origin \uFF0C\u5426\u5219\u4F1A\u66B4\u9732 github \u5BC6\u7801</span>

                    cd /home/work/imooc<span class="token punctuation">-</span>lego/biz<span class="token punctuation">-</span>editor<span class="token punctuation">-</span>server;
                    git remote add origin https<span class="token punctuation">:</span>//wangfupeng1988<span class="token punctuation">:</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span>secrets.WFP_PASSWORD<span class="token punctuation">}</span><span class="token punctuation">}</span>@github.com/imooc<span class="token punctuation">-</span>lego/biz<span class="token punctuation">-</span>editor<span class="token punctuation">-</span>server.git;
                    git checkout dev;
                    git pull origin dev; <span class="token comment"># \u91CD\u65B0\u4E0B\u8F7D\u6700\u65B0\u4EE3\u7801</span>
                    git remote remove origin; <span class="token comment"># \u5220\u9664 origin \uFF0C\u5426\u5219\u4F1A\u66B4\u9732 github \u5BC6\u7801</span>
                    <span class="token comment"># \u542F\u52A8 docker</span>
                    docker<span class="token punctuation">-</span>compose build editor<span class="token punctuation">-</span>server; <span class="token comment"># \u548C docker-compose.yml service \u540D\u5B57\u4E00\u81F4</span>
                    docker<span class="token punctuation">-</span>compose up <span class="token punctuation">-</span>d;
                  &quot;
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> delete ssh key <span class="token comment"># \u5220\u9664 ssh key</span>
              <span class="token key atrule">run</span><span class="token punctuation">:</span> rm <span class="token punctuation">-</span>rf ~/.ssh/id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[i];function c(p,o){return s(),a("div",null,l)}var d=n(t,[["render",c],["__file","699317ca.html.vue"]]);export{d as default};
