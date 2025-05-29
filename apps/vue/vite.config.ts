/// <reference types='vitest' />
import path from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import unoCSS from 'unocss/vite'

import svgLoader from 'vite-svg-loader'

// const notBuildModule = () => {
//   return {
//     name: 'not-build-module',
//     transformIndexHtml(html: string) {
//       return html.replace(` type="module" crossorigin`, '')
//     }
//   }
// }

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/vue',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [vue(), svgLoader(), cssInjectedByJsPlugin(), unoCSS()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        entryFileNames: 'assets/@template-vue.min.js',
        chunkFileNames: 'assets/[name].js'
      }
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.json', '.svg']
  }
})
