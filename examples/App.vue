<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import { getCurrentInstance } from 'vue';
    const THIS = getCurrentInstance()!.appContext.config.globalProperties;
    // THIS.clNotice({text: '通知组件测试'});
    const selectorData = [
        { 
            id: 1,
            value: 1,
            label: '选项一'
        },
        { 
            id: 2,
            value: 2,
            label: '选项二'
        },
        { 
            id: 3,
            value: 3,
            label: '选项三'
        },
    ]
    const setItem = (item: MenuItem)=> {
      console.log(item, 'app')
    }

    const buttonClick = (e: Event)=> {
      console.log(e, 'button clicked')
    }
    
</script>

<template>
  <cl-selector placeholder="请选择选项" :data-option="selectorData" @change="setItem"></cl-selector>
  <!-- <cl-button @click="buttonClick" :loading="true">默认按钮</cl-button>
  --------------------------------------------------------
  <cl-button @click="buttonClick" type="streamer" :disabled="true" :loading="true">流光按钮</cl-button> -->
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
