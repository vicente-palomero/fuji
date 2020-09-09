import Vue from 'vue'
import Vuex from 'vuex'
import timebox from './modules/timebox'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    timebox
  },
  strict: debug
})
