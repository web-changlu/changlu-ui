import baseConfig from './base.config';
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

export default defineConfig({
    ...baseConfig,
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
      plugins: [
        dts()
      ]
})