import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSyncAlt, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSyncAlt, faDownload)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  render: h => h(App)
}).$mount('#app')
