import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Install Axios
Vue.use(VueAxios, axios)

// Install Bootstrap
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Install Fontawesome
library.add(fas)
Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
