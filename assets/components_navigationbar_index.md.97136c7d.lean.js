var b=Object.defineProperty;var y=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var v=(e,s,a)=>s in e?b(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,m=(e,s)=>{for(var a in s||(s={}))_.call(s,a)&&v(e,a,s[a]);if(y)for(var a of y(s))B.call(s,a)&&v(e,a,s[a]);return e};import{V as h}from"./framework.cb16b295.js";import{_ as D,G as C,o as A,b as N,A as E,I as u,ah as f,g as n,f as t}from"./plugin-vue_export-helper.cbd61d17.js";import"./framework.6d89a8fa.js";const q={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:s,createElementVNode:a,openBlock:l,createElementBlock:r}=h,i={class:"body-container"},o={class:"nav-container"};function p(c,k){const d=e("cl-navigationBar");return l(),r("div",null,[a("div",i,[a("div",o,[s(d,{type:"mobile",navData:c.navList,onNavItemClick:c.clickHandle},null,8,["navData","onNavItemClick"])])])])}const{defineComponent:F}=h;return m({render:p},F({setup(c,{expose:k}){k();const g={navList:[{id:"nav01",icon:"icon-home",text:"Home",href:"#",isCurrent:!0},{id:"nav02",icon:"icon-User",text:"Profile",href:"#",isCurrent:!1},{id:"nav03",icon:"icon-message",text:"Message",href:"#",isCurrent:!1},{id:"nav04",icon:"icon-Camera",text:"Photos",href:"#",isCurrent:!1},{id:"nav05",icon:"icon-setting",text:"Settings",href:"#",isCurrent:!1}],clickHandle:x=>{console.log(x,"\u9009\u4E2D\u7684\u83DC\u5355")}};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}))}()}},$='{"title":"NavigationBar \u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5&\u4EE3\u7801\u793A\u4F8B","slug":"\u57FA\u7840\u7528\u6CD5-\u4EE3\u7801\u793A\u4F8B"},{"level":3,"title":"Attributes","slug":"attributes"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"components/navigationbar/index.md","lastUpdated":1672887061901}',V=f('<h1 id="navigationbar-\u7EC4\u4EF6" tabindex="-1">NavigationBar \u7EC4\u4EF6 <a class="header-anchor" href="#navigationbar-\u7EC4\u4EF6" aria-hidden="true">#</a></h1><blockquote><p>\u4E3A\u7528\u6237\u63D0\u4F9B\u5BFC\u822A</p></blockquote><h2 id="\u57FA\u7840\u7528\u6CD5-\u4EE3\u7801\u793A\u4F8B" tabindex="-1">\u57FA\u7840\u7528\u6CD5&amp;\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5-\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u76EE\u524D\u5BFC\u822A\u680F\u4EC5\u6709<code>type</code>\u4E3A<code>mobile</code>\u7684\u9009\u62E9,\u684C\u9762\u7AEF\u7684\u5BFC\u822A\u680F\u6B63\u5728\u5BFB\u627E\u521B\u610F...</p></div>',4),I=n("div",null,[t("\u4F7F\u7528"),n("code",null,"type"),t("\u6765\u9009\u62E9\u4E0D\u540C\u5BFC\u822A\u680F, \u4F7F\u7528"),n("code",null,"navData"),t("\u4F20\u5165\u5BFC\u822A\u83DC\u5355\u5217\u8868")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("body-container"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("nav-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("cl-navigationBar")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mobile"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":navData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("navList"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@navItemClick"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("clickHandle"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("cl-navigationBar")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"navList"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token constant"},"NAVITEM"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'nav01'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'icon-home'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Home'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"href"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'#'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"isCurrent"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'nav02'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'icon-User'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Profile'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"href"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'#'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"isCurrent"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'nav03'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'icon-message'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Message'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"href"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'#'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"isCurrent"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'nav04'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'icon-Camera'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Photos'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"href"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'#'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"isCurrent"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'nav05'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'icon-setting'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Settings'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"href"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'#'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"isCurrent"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"clickHandle"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"item"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token constant"},"NAVITEM")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u9009\u4E2D\u7684\u83DC\u5355'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("sass"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".body-container"),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 400px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),t(" cadetblue"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" hidden"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".nav-container"),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 80%"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),M=f(`<h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u662F\u5426\u5FC5\u8981</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">type</td><td style="text-align:center;">\u5BFC\u822A\u680F\u83DC\u5355\u7684\u7C7B\u578B</td><td style="text-align:center;">string</td><td style="text-align:center;">false</td><td style="text-align:center;">&#39;mobile&#39;</td></tr><tr><td style="text-align:center;">navData</td><td style="text-align:center;">\u5BFC\u822A\u680F\u83DC\u5355\u6570\u636E</td><td style="text-align:center;">NAVITEM[ ]</td><td style="text-align:center;">true</td><td style="text-align:center;">[{id: &quot;nav1&quot;,icon: &quot;&quot;,text: &quot;\u9ED8\u8BA4\u5BFC\u822A\u680F&quot;,href: &quot;#&quot;,isCurrent: false,}]</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">\u7C7B\u578B\u8BF4\u660E: NAVITEM</p><div class="language-typescript"><pre><code><span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name"><span class="token constant">NAVITEM</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u83DC\u5355\u9879\u7684id</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token comment">// \u83DC\u5355\u9879\u7684\u56FE\u6807 \u76EE\u524D\u4EC5\u5F15\u7528\u90E8\u5206\u963F\u91CC\u56FE\u6807\u5E93 \u540E\u7EED\u4F1A\u52A0\u5165\u5176\u4ED6\u5E38\u7528\u56FE\u6807\u5E93</span>
  icon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token comment">// \u83DC\u5355\u9879\u6587\u672C</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token comment">// \u83DC\u5355\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u94FE\u63A5</span>
  href<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u4E3A\u5F53\u524D\u83DC\u5355\u7684\u6807\u5FD7\u4F4D</span>
  isCurrent<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre></div></div><hr><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D\u79F0</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">navItemClick</td><td style="text-align:center;">\u7528\u6237\u70B9\u51FB\u67D0\u4E2A\u83DC\u5355\u9879\u65F6\u89E6\u53D1</td><td style="text-align:center;">\u76EE\u524D\u9009\u4E2D\u7684\u83DC\u5355\u9879</td></tr></tbody></table>`,6);function w(e,s,a,l,r,i){const o=C("render-demo-0"),p=C("demo");return A(),N("div",null,[V,E(p,{sourceCode:`<template>
    <div class='body-container'>
        <div class="nav-container">
            <cl-navigationBar type="mobile" :navData="navList" @navItemClick='clickHandle'></cl-navigationBar>
        </div>
    </div>
</template>
<script setup lang="ts">
    const navList: NAVITEM[] = [
  {
    id: 'nav01',
    icon: 'icon-home',
    text: 'Home',
    href: '#',
    isCurrent: true
  },
  {
    id: 'nav02',
    icon: 'icon-User',
    text: 'Profile',
    href: '#',
    isCurrent: false
  },
  {
    id: 'nav03',
    icon: 'icon-message',
    text: 'Message',
    href: '#',
    isCurrent: false
  },
  {
    id: 'nav04',
    icon: 'icon-Camera',
    text: 'Photos',
    href: '#',
    isCurrent: false
  },
  {
    id: 'nav05',
    icon: 'icon-setting',
    text: 'Settings',
    href: '#',
    isCurrent: false
  },
]
    const clickHandle = (item: NAVITEM)=> {
      console.log(item, '\u9009\u4E2D\u7684\u83DC\u5355')
    }
<\/script>
<style lang='sass'>
.body-container{
    display: flex;
    height: 400px;
    background-color: cadetblue;
    overflow: hidden;
    justify-content: center;
    align-items: center;
}
.nav-container{
    width: 80%;
}
</style>
`},{description:u(()=>[I]),highlight:u(()=>[H]),default:u(()=>[E(o)]),_:1}),M])}var G=D(q,[["render",w]]);export{$ as __pageData,G as default};
