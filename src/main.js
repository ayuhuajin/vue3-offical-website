import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import * as echarts from 'echarts' //引入echarts

const app = createApp(App)
app.config.globalProperties.$echarts = echarts //全局引用
app.config.globalProperties.$router = router //全局引用

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
