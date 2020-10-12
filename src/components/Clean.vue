<template>
  <div>
    <button class="reset" v-on:click="clean">Clean</button>
  </div>
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
  font-size: 8vw;
  color: tomato
}
</style>
