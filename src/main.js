import { createApp } from 'vue'
import App from './App.vue'

import Router from './router'

import './styles/normalize.css'
import './styles/common.css'

// 引入 vant 函数组件样式
import './styles/vantComponentStyles'



createApp(App)
    .use(Router)
    .mount('#app')
