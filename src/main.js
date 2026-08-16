import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useREM } from './utils/flexible'
import mLibs from './libs'
import store from './store'

import './styles/index.scss'
import 'virtual:svg-icons-register'

// 设置 rem
useREM()
createApp(App).use(router).use(mLibs).use(store).mount('#app')
