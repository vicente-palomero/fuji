<template>
  <div id="app">
    <div class="content">
      <Countdown />
    </div>
    <footer class="footer">
      <p>Counter: {{ timeboxes }}</p>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Countdown from './components/Countdown.vue'

export default {
  name: 'App',
  components: {
    Countdown
  },
  computed: mapState({
    timeboxes: state => state.timebox.count
  }),
  mounted () {
    this.$store.dispatch('timebox/setTimebox', 25)
    this.$store.dispatch('timebox/setShortRest', 5)
    this.$store.dispatch('timebox/setLongRest', 15)
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, white 0%, lightsteelblue 35%);
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%
}

.content {
  flex: 1 0 auto;
}

.footer {
  font-size: 7vw;
  flex-shrink: 0;
}
</style>
