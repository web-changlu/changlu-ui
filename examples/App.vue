<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { getCurrentInstance } from "vue";
const THIS = getCurrentInstance()!.appContext.config.globalProperties;
// THIS.clNotice({text: '通知组件测试'});
const selectorData : MENUITEM[] = [
  {
    id: 'select1',
    value: 1,
    label: "选项一",
  },
  {
    id: 'select2',
    value: 2,
    label: "选项二",
  },
  {
    id: 'select3',
    value: 3,
    label: "选项三",
  },
];

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
const setItem = (item: MENUITEM) => {
  console.log(item, "app");
};

const buttonClick = (e: Event) => {
  console.log(e, "button clicked");
};
const compkWidth: number = 400;
const wordList = <string[]>['Grid','Helix','Chaotic','Sphere','Three','Geome','Curve','Random'];
</script>

<template>
<div class="body-container"></div>
  <div class="container">
    <!-- <cl-clock :clock-width="compkWidth"></cl-clock> -->
    <!-- <cl-nebula ></cl-nebula> -->
    <!-- <cl-navigationBar type="mobile" :navData="navList"></cl-navigationBar> -->
    <!-- <cl-wordCloud :width="800" :height="800" :wordData="wordList" :backgroundColor="'ssd545454'"></cl-wordCloud> -->
  </div>

  <!-- <cl-selector placeholder="请选择选项" :data-option="selectorData" @change="setItem"></cl-selector> -->
  <cl-button @click="buttonClick" :loading="true">默认按钮</cl-button>
  --------------------------------------------------------
  <!-- <cl-button @click="buttonClick" type="dualFlow" :disabled="true" :loading="true">按钮（幻界双流）</cl-button> -->
  --------------------------------------------------------
  <cl-button @click="buttonClick" type="streamer" :disabled="true" :loading="true">按钮（流光）</cl-button>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  height: 100vh;
  /* height: 2800px; */
  width: 100vw;
  align-items: center;
  justify-content: center;
}
/* .body-container{
  position: relative;
  height: 100%;
  width: 100%;
  background-color: cadetblue;
} */
.container{
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
