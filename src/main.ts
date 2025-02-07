import App from './App.vue'
import router from './router'
import { registerSharedComponents } from '@/plugins/register'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import '@/plugins/toast'
import '@/main.scss'
import { createApp } from 'vue'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia)

registerSharedComponents(app)
app.use(router)

app.mount('#app')
