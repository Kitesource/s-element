import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist/umd',
    // https://cn.vitejs.dev/guide/build.html#library-mode
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      // 暴露的全局变量名，在formats包含 umd 或 iife 是必需的
      name: 'SElement',
      // 输出的包文件名，默认是package.json 中的 name 字段
      fileName: 's-element',
      formats: ['umd']
    },
    // https://rollupjs.org/configration-options
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        exports: 'named',
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (chunk) => {
          if (chunk.name === 'style.css') {
            return 'index.css'
          } else {
            return chunk.name as string;
          }
        }
      },
    },
  }
})
