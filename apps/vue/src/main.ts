import '@/styles/index.scss'
import 'virtual:uno.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import directives from '@/directives'
import router from '@/router'

import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(router)
directives.map((item) => app.directive(item.name, item.path))
app.mount('#app')