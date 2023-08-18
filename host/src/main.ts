import './assets/main.css'

import { createApp, defineAsyncComponent, h } from 'vue'
import { createPinia } from 'pinia'
import ReactDOMServer from 'react-dom/server'

import App from './App.vue'
import router from './router'
import '@/assets/tailwind.css'

import swAlert from 'remote/swAlert'

const app = createApp(App)

const RemoteButton = defineAsyncComponent(() => import('remote/Button'))
// const RemoteNuxtButton = defineAsyncComponent(() => import('remote-nuxt/Button'))
const RemoteReactButton = defineAsyncComponent(() => reactImport(import('remote-react/Button')))

app.component('RemoteButton', RemoteButton)
// app.component('RemoteNuxtButton', RemoteNuxtButton)
app.component('RemoteReactButton', RemoteReactButton)
app.use(createPinia())
app.use(swAlert)
app.use(router)

app.mount('#app')

async function reactImport(ReactImportCompoent) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = (await ReactImportCompoent).default
      const data = ReactDOMServer.renderToString(
        res({
          caption: 'React Button in vue'
        })
      )
      // const div = h('div', { innerHTML: data })
      // console.log(data)

      resolve(h('div', { innerHTML: data }))
    } catch (err) {
      reject(err)
    }
  })
}
