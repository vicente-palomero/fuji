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
      <ButtonsMenu />
    </footer>
  </div>
</template>

<script>
import Countdown from './components/Countdown.vue'
import Summary from './components/Summary.vue'
import ButtonsMenu from './components/ButtonsMenu.vue'
import NotificationManager from './components/NotificationManager.vue'

export default {
  name: 'App',
  components: {
    ButtonsMenu,
    Countdown,
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
  align-items: flex-start;
  height: 100vh;
}

.content {
  flex: 1 0 auto;
  align-self: center;
}

.header {
  font-size: 5vw;
  align-self: center;
  width: 100%;
  height: 20vh;
}

.footer {
  font-size: 7vw;
  align-self: center;
  flex-shrink: 0;
  margin-bottom: 15px;
}

button {
  background-color: transparent;
  border: none;
  min-width: 6ex;
  width: 70%;
  display: inline-block;
  font-size: 5vw;
  outline: none;
}
.rest {
  color: forestgreen;
}

.work {
  border-color: tomato;
  color: tomato;
}

.side {
  border-color: lightsalmon;
  color: lightsalmon;
}

.health {
  border-color: royalblue;
  color: royalblue;
}

.home {
  border-color: cadetblue;
  color: cadetblue;
}

.other {
  border-color: cornflowerblue;
  color: cornflowerblue;
}

.study {
  border-color: crimson;
  color: crimson;
}

</style>
