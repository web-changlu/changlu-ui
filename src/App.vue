<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import { getCurrentInstance } from 'vue';
    const THIS = getCurrentInstance()!.appContext.config.globalProperties;
    THIS.clNotice({text: '通知组件测试'})
</script>

<template>
  <cl-button name="你好 世界"></cl-button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
