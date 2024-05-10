// collapse
import { ElCollapseTransition } from 'element-plus'
// fade/zoom
import 'element-plus/theme-chalk/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'wow.js/css/libs/animate.css'

//百度地图
import baiduMap from 'vue3-baidu-map-gl'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component(ElCollapseTransition.name, ElCollapseTransition)
app.use(createPinia())
app.use(router)
app.use(baiduMap, {
  ak: 'Wm9zPZzjm5Euw29b4ENY42OTeSGNoBid',
  plugins: ['TrackAnimation']
})

app.mount('#app')
