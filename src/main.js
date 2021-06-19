import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// 安裝 BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
