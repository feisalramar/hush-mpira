import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VueAxios from 'vue-axios'
import axios from 'axios'

import 'vuetify/dist/vuetify.min.css'

const apiFootballInstance = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v2/',
  headers: {
    'x-rapidapi-key': 'XR06dVBUOfmsht599ST8uWTL2b7Tp1FKaq1jsna9yeGqdFXAst',
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'useQueryString': true
  }
})

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueAxios, apiFootballInstance)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
