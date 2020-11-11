<template>
  <button class="reset" v-on:click="clean">Clean</button>
</template>

<script>
export default {
  name: 'Clean',
  methods: {
    clean () {
      this.$store.dispatch('timebox/clean')
    }
  }
}
</script>

<style>
button.reset {
  color: black
}
</style>
