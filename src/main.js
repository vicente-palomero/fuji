import App from './App.vue'
import Vue from 'vue'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  store,
  beforeCreate() {
    this.$store.commit('initializeStore')
  },
  render: h => h(App),
}).$mount('#app')
