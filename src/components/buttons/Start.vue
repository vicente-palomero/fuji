<template>
  <button class="run" v-on:click="run">{{ label }}</button>
</template>

<script>

export default {
  name: 'Start',
  props: {
    label: String
  },
  methods: {
    run () {
      this.$store.dispatch('timebox/run')
    }
  },
}

</script>
