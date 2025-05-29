import globals from 'globals'
import baseConfig from '../../eslint.config.mjs';
import tsParser from '@typescript-eslint/parser'
// import tsPlugin from '@typescript-eslint/eslint-plugin'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
  ...baseConfig,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        globals: globals.browser,
        parser: tsParser,
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest'
      }
    },
    plugins: { vue: vuePlugin },
    rules: {
      /*
       * 关闭 Vue 组件名必须是多个单词的组合
       */
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'public/**']
  }
]
