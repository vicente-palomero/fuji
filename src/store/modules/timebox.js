const state = () => ({
  ms: 0,
  current: 0,
  end: 0,
  initialMs: 0,
  timebox: 0,
  shortRest: 0,
  longRest: 0,
  cycle: 4,
  count: 0,
  isRunning: false,
  countRests: 0
})

const getters = {
  minutes: (state) => {
    return String(Math.floor(state.ms / 60000))
  },
  seconds: (state) => {
    return String((Math.floor(state.ms / 1000)) % 60).padStart(2, '0')
  }
}

const actions = {
  setTimebox({ commit }, minutes) {
    commit('setMinutes', {box: 'timebox', minutes})
  },
  setShortRest({ commit }, minutes) {
    commit('setMinutes', {box: 'shortRest', minutes})
  },
  setLongRest({ commit }, minutes) {
    commit('setMinutes', {box: 'longRest', minutes})
  },
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
    } else {
      const start = Date.now()
      state.end = start + state.initialMs
      state.current = start
    }
  },
  secondPassed(state) {
    state.current = Date.now()
    state.ms = state.end - state.current

    if (state.ms <= 0) {
      state.isRunning = false
      if (state.count == state.countRests || 0) {
        state.count++
        const rest = (state.count % state.cycle) ? state.shortRest : state.longRest
        state.initialMs = rest * 60 * 1000
        state.ms = state.initialMs
      } else {
        state.countRests++
        state.initialMs = state.timebox * 60 * 1000
        state.ms = state.initialMs
      }
    }
  },
  setMinutes(state, { box, minutes }) {
    state[box] = minutes
    if (box == 'timebox') {
      state.initialMs = state.timebox * 60 * 1000
      state.ms = state.initialMs
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
