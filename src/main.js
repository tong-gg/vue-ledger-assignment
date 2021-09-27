import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LedgerStore from './store/LedgerStore'
import '@/assets/tailwind.css'
import '@/plugins/apexcharts'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faSave, faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


new Vue({
  router,
  LedgerStore,
  render: h => h(App)
}).$mount('#app')
