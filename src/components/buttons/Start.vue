<template>
  <button class="run" v-on:click="run">{{ buttonLabel }}</button>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Start',
  computed: {
    ...mapState({
      isRunning: state => state.timebox.isRunning
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
}

</script>
