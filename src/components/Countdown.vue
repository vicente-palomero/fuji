<template>
  <div class="countdown">
    <p>{{ mins }}:{{ secs }}</p>
    <button class="run" v-on:click="run">{{ buttonLabel }}</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Countdown',
  computed: {
    ...mapState({
      isRunning: state => state.timebox.isRunning
    }),
    ...mapGetters('timebox', {
      mins: 'minutes',
      secs: 'seconds'
    }),
    buttonLabel () {
      return this.isRunning ? "Reset" : "Start"
    }
  },
  methods: {
    run () {
      this.$store.dispatch('timebox/run')
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

<style>
.countdown {
  font-size: 15vw;
}
button.run{
  padding: 15px 32px;
}
</style>
