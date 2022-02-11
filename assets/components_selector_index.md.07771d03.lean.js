var v=Object.defineProperty;var h=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var m=(s,n,a)=>n in s?v(s,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[n]=a,g=(s,n)=>{for(var a in n||(n={}))x.call(n,a)&&m(s,a,n[a]);if(h)for(var a of h(n))C.call(n,a)&&m(s,a,n[a]);return s};import{_ as D,c as F,a as _,w as u,V as y,b as t,d as e,e as f,r as E,o as B}from"./app.0ac3c014.js";const A={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:s,createVNode:n,openBlock:a,createElementBlock:l}=y;function c(o,i){const d=s("cl-selector");return a(),l("div",null,[n(d,{placeholder:"\u8BF7\u9009\u62E9","data-option":o.selectorData,onChange:o.setItem},null,8,["data-option","onChange"])])}const{defineComponent:p}=y;return g({render:c},p({setup(o,{expose:i}){i();const k={selectorData:[{id:1,value:1,label:"\u9009\u9879\u4E00"},{id:2,value:2,label:"\u9009\u9879\u4E8C"},{id:3,value:3,label:"\u9009\u9879\u4E09"}],setItem:b=>{console.log(b,"\u9009\u4E2D\u7684\u9009\u9879")}};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}}))}()}},T='{"title":"Selector \u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"Attributes","slug":"attributes"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"components/selector/index.md","lastUpdated":1644216070468}',I=t("h1",{id:"selector-\u9009\u62E9\u5668",tabindex:"-1"},[e("Selector \u9009\u62E9\u5668 "),t("a",{class:"header-anchor",href:"#selector-\u9009\u62E9\u5668","aria-hidden":"true"},"#")],-1),V=t("blockquote",null,[t("p",null,"\u9C7C\u4E0E\u718A\u638C\u4E0D\u53EF\u5F97\u517C\uFF0C\u820D\u9C7C\u800C\u53D6\u718A\u638C\u8005\u4E5F\u3002")],-1),q=t("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[e("\u57FA\u7840\u7528\u6CD5 "),t("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),N=t("blockquote",null,[t("p",null,"\u5355\u9009 \u5E76\u4E14\u652F\u6301\u641C\u7D22")],-1),S=t("div",null,[e("\u4F7F\u7528"),t("code",null,"option"),e("\u6765\u4F20\u5165\u9009\u62E9\u5217\u8868")],-1),w=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("cl-selector")]),e(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("\u8BF7\u9009\u62E9"),t("span",{class:"token punctuation"},'"')]),e(),t("span",{class:"token attr-name"},":data-option"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("selectorData"),t("span",{class:"token punctuation"},'"')]),e(),t("span",{class:"token attr-name"},"@change"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("setItem"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),e(),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("cl-selector")]),t("span",{class:"token punctuation"},">")]),e(` 
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("script")]),e(),t("span",{class:"token attr-name"},"setup"),e(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[e(`
    `),t("span",{class:"token keyword"},"const"),e(" selectorData "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),e(`
        `),t("span",{class:"token punctuation"},"{"),e(` 
            `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'\u9009\u9879\u4E00'"),e(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token punctuation"},"{"),e(` 
            `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),e(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token punctuation"},"{"),e(` 
            `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'\u9009\u9879\u4E09'"),e(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token punctuation"},"]"),e(`
    `),t("span",{class:"token keyword"},"const"),e(),t("span",{class:"token function-variable function"},"setItem"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token literal-property property"},"item"),t("span",{class:"token operator"},":"),e(" MenuItem")]),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},"=>"),e(),t("span",{class:"token punctuation"},"{"),e(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),e("item"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token string"},"'\u9009\u4E2D\u7684\u9009\u9879'"),t("span",{class:"token punctuation"},")"),e(`
    `),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("script")]),t("span",{class:"token punctuation"},">")]),e(`
`)])])],-1),$=f('<h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u662F\u5426\u5FC5\u8981</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">placeholder</td><td style="text-align:center;">\u672A\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u6587\u672C</td><td style="text-align:center;">String</td><td style="text-align:center;">false</td><td style="text-align:center;">\u8BF7\u9009\u62E9\u9009\u9879</td></tr><tr><td style="text-align:center;">dataOption</td><td style="text-align:center;">\u9009\u62E9\u5217\u8868</td><td style="text-align:center;">Array</td><td style="text-align:center;">true</td><td style="text-align:center;">[ ]</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D\u79F0</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">change</td><td style="text-align:center;">\u7528\u6237\u9009\u4E2D\u65F6\u89E6\u53D1</td><td style="text-align:center;">\u76EE\u524D\u9009\u4E2D\u7684\u503C</td></tr></tbody></table>',4);function j(s,n,a,l,c,p){const r=E("render-demo-0"),o=E("demo");return B(),F("div",null,[I,V,q,N,_(o,{sourceCode:`<template>
    <cl-selector placeholder="\u8BF7\u9009\u62E9" :data-option="selectorData" @change="setItem"> </cl-selector> 
</template>
<script setup lang="ts">
    const selectorData = [
        { 
            id: 1,
            value: 1,
            label: '\u9009\u9879\u4E00'
        },
        { 
            id: 2,
            value: 2,
            label: '\u9009\u9879\u4E8C'
        },
        { 
            id: 3,
            value: 3,
            label: '\u9009\u9879\u4E09'
        },
    ]
    const setItem = (item: MenuItem)=> {
      console.log(item, '\u9009\u4E2D\u7684\u9009\u9879')
    }
<\/script>
`},{description:u(()=>[S]),highlight:u(()=>[w]),default:u(()=>[_(r)]),_:1}),$])}var U=D(A,[["render",j]]);export{T as __pageData,U as default};
