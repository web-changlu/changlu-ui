import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// const glob = require('glob');
const path = require('path');
// const filelist = {};
import dts from 'vite-plugin-dts';
// const makeList = async (dirPath, list)=> {
//   const files = glob.sync(`${dirPath}/**/index.ts`);
//   for(let file of files){
//     const componentName = file.split(/[/.]/)[2];
//     filelist[componentName] = `./${file}`;
//   }
// }
// makeList('components/lib', filelist);
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
        additionalData: '@import "./components/css/global.scss";' 
      }
    }
  },
  build:{
    outDir: 'dist',
    lib:{
      entry: path.resolve(__dirname, 'components/lib/index.ts'),
      name: 'ChangLuUI',
      // formats: ['umd'],
      fileName: (format) => `changlu-ui.${format}.js`
    },
    sourcemap: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
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
    dts()
  ]
})
