var v=Object.defineProperty;var E=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var m=(s,e,a)=>e in s?v(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,h=(s,e)=>{for(var a in e||(e={}))C.call(e,a)&&m(s,a,e[a]);if(E)for(var a of E(e))x.call(e,a)&&m(s,a,e[a]);return s};import{V as g}from"./framework.cb16b295.js";import{_ as F,G as _,o as D,b as B,A as y,I as u,g as t,f as n,ah as f}from"./plugin-vue_export-helper.cbd61d17.js";import"./framework.6d89a8fa.js";const A={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:s,createVNode:e,openBlock:a,createElementBlock:l}=g;function c(o,i){const k=s("cl-selector");return a(),l("div",null,[e(k,{placeholder:"\u8BF7\u9009\u62E9","data-option":o.selectorData,onChange:o.setItem},null,8,["data-option","onChange"])])}const{defineComponent:p}=g;return h({render:c},p({setup(o,{expose:i}){i();const d={selectorData:[{id:"select1",value:1,label:"\u9009\u9879\u4E00"},{id:"select2",value:2,label:"\u9009\u9879\u4E8C"},{id:"select3",value:3,label:"\u9009\u9879\u4E09"}],setItem:b=>{console.log(b,"\u9009\u4E2D\u7684\u9009\u9879")}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}))}()}},G='{"title":"Selector \u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5&\u4EE3\u7801\u793A\u4F8B","slug":"\u57FA\u7840\u7528\u6CD5-\u4EE3\u7801\u793A\u4F8B"},{"level":3,"title":"Attributes","slug":"attributes"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"components/selector/index.md","lastUpdated":1705636116434}',I=t("h1",{id:"selector-\u9009\u62E9\u5668",tabindex:"-1"},[n("Selector \u9009\u62E9\u5668 "),t("a",{class:"header-anchor",href:"#selector-\u9009\u62E9\u5668","aria-hidden":"true"},"#")],-1),N=t("blockquote",null,[t("p",null,"\u9C7C\u4E0E\u718A\u638C\u4E0D\u53EF\u5F97\u517C\uFF0C\u820D\u9C7C\u800C\u53D6\u718A\u638C\u8005\u4E5F\u3002")],-1),M=t("h2",{id:"\u57FA\u7840\u7528\u6CD5-\u4EE3\u7801\u793A\u4F8B",tabindex:"-1"},[n("\u57FA\u7840\u7528\u6CD5&\u4EE3\u7801\u793A\u4F8B "),t("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5-\u4EE3\u7801\u793A\u4F8B","aria-hidden":"true"},"#")],-1),V=t("blockquote",null,[t("p",null,"\u5355\u9009 \u5E76\u4E14\u652F\u6301\u641C\u7D22")],-1),q=t("div",null,[n("\u4F7F\u7528"),t("code",null,"option"),n("\u6765\u4F20\u5165\u9009\u62E9\u5217\u8868")],-1),S=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("cl-selector")]),n(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u8BF7\u9009\u62E9"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":data-option"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("selectorData"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@change"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("setItem"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("cl-selector")]),t("span",{class:"token punctuation"},">")]),n(` 
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
    `),t("span",{class:"token keyword"},"const"),n(" selectorData "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(` 
            `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'select1'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u9009\u9879\u4E00'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(` 
            `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'select2'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(` 
            `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'select3'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u9009\u9879\u4E09'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"setItem"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token literal-property property"},"item"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token constant"},"MENUITEM")]),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("item"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'\u9009\u4E2D\u7684\u9009\u9879'"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),T=f(`<h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u662F\u5426\u5FC5\u8981</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">placeholder</td><td style="text-align:center;">\u672A\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u6587\u672C</td><td style="text-align:center;">String</td><td style="text-align:center;">false</td><td style="text-align:center;">\u8BF7\u9009\u62E9\u9009\u9879</td></tr><tr><td style="text-align:center;">dataOption</td><td style="text-align:center;">\u9009\u62E9\u5217\u8868</td><td style="text-align:center;">[]MENUITEM</td><td style="text-align:center;">true</td><td style="text-align:center;">[ { id: &#39;menu1&#39;, value: 1, label: &#39;\u9009\u9879\u4E00&#39; } ]</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">\u7C7B\u578B\u8BF4\u660E: MENUITEM</p><div class="language-typescript"><pre><code><span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name"><span class="token constant">MENUITEM</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u83DC\u5355\u9879\u7684id</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token comment">//   \u83DC\u5355\u9879\u7684\u503C</span>
  value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token comment">//   \u83DC\u5355\u9879\u663E\u793A\u7684\u503C</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div></div><hr><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D\u79F0</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">change</td><td style="text-align:center;">\u7528\u6237\u9009\u4E2D\u65F6\u89E6\u53D1</td><td style="text-align:center;">\u76EE\u524D\u9009\u4E2D\u7684\u503C</td></tr></tbody></table>`,6);function U(s,e,a,l,c,p){const r=_("render-demo-0"),o=_("demo");return D(),B("div",null,[I,N,M,V,y(o,{sourceCode:`<template>
    <cl-selector placeholder="\u8BF7\u9009\u62E9" :data-option="selectorData" @change="setItem"> </cl-selector> 
</template>
<script setup lang="ts">
    const selectorData = [
        { 
            id: 'select1',
            value: 1,
            label: '\u9009\u9879\u4E00'
        },
        { 
            id: 'select2',
            value: 2,
            label: '\u9009\u9879\u4E8C'
        },
        { 
            id: 'select3',
            value: 3,
            label: '\u9009\u9879\u4E09'
        },
    ]
    const setItem = (item: MENUITEM)=> {
      console.log(item, '\u9009\u4E2D\u7684\u9009\u9879')
    }
<\/script>
`},{description:u(()=>[q]),highlight:u(()=>[S]),default:u(()=>[y(r)]),_:1}),T])}var z=F(A,[["render",U]]);export{G as __pageData,z as default};
