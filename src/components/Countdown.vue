<template>
  <div class="countdown">
    <h1>I am a countdown</h1>
    <p>{{ remaining.minutes}}:{{ remaining.seconds }}</p>
    <button v-on:click="run">{{ buttonLabel }}</button>
  </div>
</template>

<script>

export default {
  name: 'Countdown',
  data: function () {
    return {
      timebox: {
        seconds: 25 * 60 * 1000
      },
      isRunning: false
    }
  },
  computed: {
    buttonLabel () {
      return this.isRunning ? "Reset" : "Start"
    },
    remaining () {
      return {
        minutes: Math.floor(this.timebox.seconds / 60000),
        seconds: String((this.timebox.seconds / 1000) % 60).padStart(2, '0')

      }
    }
  },
  methods: {
    run () {
      this.isRunning = !this.isRunning
      if (!this.isRunning) {
        this.timebox.seconds = 25 * 60 * 1000
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      setInterval(function () {
        if(!this.isRunning) {
          return
        }
        this.timebox.seconds = this.timebox.seconds - 1000
      }.bind(this), 1000)
    })
  }
}
</script>

<style>

</style>
