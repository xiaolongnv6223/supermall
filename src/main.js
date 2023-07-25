import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



// vue.prototype.$bus =  new Vue

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')