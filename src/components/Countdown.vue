<template>
  <div class="countdown">
    <p class="remaining"
       v-bind:class="{ rest: countdownType === 'rest', work: countdownType === 'wip' }"
    >
      {{ mins }}:{{ secs }}
    </p>
    <div class="row">
      <div class="column">
        <Clean />
      </div>
      <div class="column">
        <Start v-bind:label="buttonLabel" />
      </div>
    </div>
  </div>
</template>

<script>
import Start from './buttons/Start'
import Clean from './buttons/Clean'

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Countdown',
  components: {
    Clean,
    Start
  },
  computed: {
    ...mapState({
      isRunning: state => state.timebox.isRunning
    }),
    ...mapGetters('timebox', {
      mins: 'minutes',
      secs: 'seconds',
      countdownType: 'countdownType'
    }),
    buttonLabel () {
      return this.isRunning ? "Reset" : "Start"
    }
  },
  mounted () {
    this.$nextTick(() => {
      setInterval(function () {
        if(!this.isRunning) {
          return
        }
        this.$store.dispatch('timebox/secondPassed')
      }.bind(this), 1000)
    })
  }
}
</script>

<style scoped>
.remaining {
  font-size: 20vw;
  margin: 0;
}
.row {
  justify-content: center;
  display: flex;
}
.column {
  padding: 0;
  margin: 0;
}
</style>
