const state = () => ({
  ms: 25 * 60 * 1000,
  initialMs: 25 * 60 * 1000,
  count: 0,
  isRunning: false
})

const getters = {
  minutes: (state) => {
    return String(Math.floor(state.ms / 60000))
  },
  seconds: (state) => {
    return String((state.ms / 1000) % 60).padStart(2, '0')
  }
}

const actions = {
  run({ commit }) {
    commit('run')
  },
  secondPassed({ commit }) {
    commit('secondPassed')
  }
}

const mutations = {
  run(state) {
    state.isRunning = !state.isRunning
    if (!state.isRunning) {
      state.ms = state.initialMs
    }
  },
  secondPassed(state) {
    state.ms = state.ms - 1000
    if (state.ms <= 0) {
      state.ms = state.initialMs,
      state.count++
      state.isRunning = false
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
