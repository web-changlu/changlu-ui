import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path');

export default defineConfig({
  css: {
    // loaderOptions: {
    //   scss: {
    //     prependData: `
    //     @import "./src/assets/style/global.scss";
    //     `
    //   }
    // },
    // scss预处理 变量定义 重置样式
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./components/css/global.scss";' 
      }
    }
  },
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src'),
      '@comp': path.resolve(__dirname, './components')
    },
  },
  plugins: [
    vue(),
  ]
})
