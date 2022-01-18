import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
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
        additionalData: '@import "./src/assets/style/global.scss";' 
      }
    }
  },
  resolve:{
    alias:{
      '@': path.resolve(__dirname, 'src'),
      '@comp': path.resolve(__dirname, 'components')
    },
  },
  plugins: [vue()]
})
