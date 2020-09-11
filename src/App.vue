<template>
  <div id="app">
    <Selector />
    <Countdown />
    <p>{{ timeboxes }} Pomodoros</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Countdown from './components/Countdown.vue'
import Selector from './components/Selector.vue'

export default {
  name: 'App',
  components: {
    Countdown,
    Selector
  },
  computed: mapState({
    timeboxes: state => state.timebox.count
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
