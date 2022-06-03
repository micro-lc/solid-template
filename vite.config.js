import {defineConfig} from 'vite'
import solidPlugin from 'vite-plugin-solid'
import qiankun from 'vite-plugin-qiankun'
import solidSvg from 'vite-plugin-solid-svg'

const port = 8766

export default defineConfig(({mode}) => ({
  plugins: [
    qiankun('react-plugin', {useDevMode: true}),
    solidPlugin(),
    solidSvg()
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/solid-app/',
  server: {port},
  build: {
    target: 'esnext',
    polyfillDynamicImport: false
  },
  test: {
    environment: 'jsdom',
    transformMode: {
      web: [/.[jt]sx?/]
    },
    deps: {
      inline: [/solid-js/]
    },
    threads: false,
    isolate: false
  },
  resolve: {
    conditions: ['development', 'browser']
  }
}))
