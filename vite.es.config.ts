import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      tsconfigPath: './tsconfig.build.json',
      outDir: 'dist/types'
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist/es',
    // https://cn.vitejs.dev/guide/build.html#library-mode
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      // 暴露的全局变量名，在formats包含 umd 或 iife 是必需的
      name: 'SElement',
      // 输出的包文件名，默认是package.json 中的 name 字段
      fileName: 's-element',
      formats: ['es']
    },
    // https://rollupjs.org/configration-options
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-brands-svg-icons',
        'async-validator',
        'axios',
        '@popperjs/core'
      ],
      output: {
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
