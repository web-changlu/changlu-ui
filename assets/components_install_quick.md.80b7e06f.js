import{_ as n,o as s,b as a,ah as t}from"./plugin-vue_export-helper.cbd61d17.js";const m='{"title":"\u5F15\u5165\u7EC4\u4EF6\u5E93","description":"","frontmatter":{},"headers":[],"relativePath":"components/install/quick.md","lastUpdated":1705569260161}',p={},o=t(`<h1 id="\u5F15\u5165\u7EC4\u4EF6\u5E93" tabindex="-1">\u5F15\u5165\u7EC4\u4EF6\u5E93 <a class="header-anchor" href="#\u5F15\u5165\u7EC4\u4EF6\u5E93" aria-hidden="true">#</a></h1><blockquote><p>\u5728 main.js \u4E2D\u5F15\u7528\u7EC4\u4EF6\u5E93</p></blockquote><div class="language-javascript"><pre><code><span class="token comment">//\u5168\u90E8\u5F15\u5165</span>
<span class="token keyword">import</span> <span class="token string">&#39;changlu-ui/theme-default/index.css&#39;</span>
<span class="token keyword">import</span> <span class="token constant">CLUI</span> <span class="token keyword">from</span> <span class="token string">&#39;changlu-ui&#39;</span>

<span class="token comment">// \u6309\u9700\u5F15\u5165</span>
<span class="token keyword">import</span> <span class="token string">&#39;changlu-ui/theme-default/ClButton.css&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ClButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;changlu-ui&#39;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Hello CLUI!&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">CLUI</span><span class="token punctuation">)</span>
  <span class="token comment">//   .use(ClButton)</span>
  <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div>`,3),e=[o];function c(l,u,i,k,r,d){return s(),a("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
