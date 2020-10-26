import Vue from 'vue'
import Vuex from 'vuex'
import timebox from './modules/timebox'
import appState from './modules/appState'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const storageItem = 'fujit'

const store = new Vuex.Store({
  modules: {
    appState,
    timebox
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem(storageItem)) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem(storageItem)))
        )
      }
    },
  },
  strict: debug
})

store.subscribe((mutation, state) => {
  localStorage.setItem(storageItem, JSON.stringify(state))
})

export default store
