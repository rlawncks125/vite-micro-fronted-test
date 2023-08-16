import { fileURLToPath, URL } from 'node:url'
import federation from '@originjs/vite-plugin-federation'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    vue(),
    federation({
      name: 'host',
      remotes: {
        remote: 'http://localhost:5001/assets/remoteEntry.js',
        'remote-react': 'http://localhost:5003/assets/remoteEntry.js',
        'remote-nuxt': '/nuxt/_nuxt/remoteEntry.js'
      },
      shared: ['vue', 'pinia']
    })
  ],
  server: {
    port: 5000
  },
  preview: {
    port: 5000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '^/nuxt': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/nuxt/, '')
      }
    }
  },
  build: {
    minify: false,
    target: ['chrome89', 'edge89', 'firefox89', 'safari15']
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
