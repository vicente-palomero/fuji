<template>
  <div id="app">
    <header class="header">
      <Summary />
    </header>
    <div class="content">
      <NotificationManager />
      <Countdown />
    </div>
    <footer class="footer">
      <Clean />
    </footer>
  </div>
</template>

<script>
import Countdown from './components/Countdown.vue'
import Clean from './components/Clean.vue'
import Summary from './components/Summary.vue'
import NotificationManager from './components/NotificationManager.vue'

export default {
  name: 'App',
  components: {
    Countdown,
    Clean,
    NotificationManager,
    Summary
  },
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

.header {
  font-size: 7vw;
  flex-shrink: 0;
}

.footer {
  font-size: 7vw;
  flex-shrink: 0;
  margin-bottom: 15px;
}

button {
  background-color: white;
  border: none;
  width: 70%;
  display: inline-block;
  font-size: 10vw;
  outline: none;
}
</style>
