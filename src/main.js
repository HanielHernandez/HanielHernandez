import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/scss/main.scss'
import globals from './components/globals'
import config from './config'

const app = createApp(App)
app.provide('config', config)

Object.keys(globals).forEach((componentName) => {
  app.component(componentName, globals[componentName])
})

app.config.globalProperties.$config = config
app.use(store)
app.use(router)
app.mount('#app')
