import App from '@/App.vue'
import i18n from '@/plugins/i18n'
import router from '@/router'
import 'index.css'
import '@/assets/css/main.scss'
import '@/assets/css/variables.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import VueElementLoading from 'vue-element-loading'
import { createMetaManager, plugin as metaPlugin } from 'vue-meta'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)
library.add(fas)
const metaManager = createMetaManager()

app.use(i18n)
app.use(router)
app.use(metaManager)
app.use(metaPlugin)
app.use(MotionPlugin)
app.component('VueElementLoading', VueElementLoading)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
