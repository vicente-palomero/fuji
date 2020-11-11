<template>
  <div class="countdown">
    <p class="remaining"
       v-bind:class="runningClass"
    >
      {{ mins }}:{{ secs }}
    </p>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Countdown',
  computed: {
    ...mapState({
      isRunning: state => state.timebox.isRunning,
      runType: state => state.timebox.runType
    }),
    ...mapGetters('timebox', {
      mins: 'minutes',
      secs: 'seconds',
      countdownType: 'countdownType'
    }),
    runningClass () {
      if (!this.isRunning) {
        return ''
      }
      if (this.countdownType === 'rest') {
        return 'rest'
      } else {
        return this.runType
      }
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
  display: flex;
  justify-content: center;
}
.column {
  padding: 0;
  margin: 0;
}
.button {
  margin: 5px 0;
  width: 90px;
  background-color: white;
  border-radius: 7px;
  border: 2px solid;
}

</style>
