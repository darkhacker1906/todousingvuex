import { registerPlugins } from '@/plugins'
import App from './App.vue'
import store from './vuex/store'
import {createApp}  from 'vue'
import router from './router'
const app = createApp(App)
app.use(store)
app.use(router)
registerPlugins(app)

app.mount('#app')

