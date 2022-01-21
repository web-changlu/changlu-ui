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
    
</script>

<template>
  <cl-selector placeholder="请选择选项" :data-menu="selectorData" @selectedItem="setItem"></cl-selector>
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
