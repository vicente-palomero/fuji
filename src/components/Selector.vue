<template>
  <div class="selector">
    <button v-on:click="setMinutes(25)">Run a pomodoro</button>
    <button v-on:click="setMinutes(5)">Run a short stop</button>
    <button v-on:click="setMinutes(15)">Run a long stop</button>
  </div>
</template>

<script>
export default {
  name: 'Selector',
  methods: {
    setMinutes (minutes) {
      this.$store.dispatch('timebox/setMinutes', minutes)
    }
  }
}
</script>

