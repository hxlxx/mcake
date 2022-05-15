import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import store from './store/index.js'
import * as request from './utils/request.js'

import uView from 'uview-ui'

for(let key in request) {
	Vue.prototype[key] = request[key]
}

Vue.use(uView)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
		store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif