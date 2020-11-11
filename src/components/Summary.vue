<template>
  <div class="summary row">
    <div class="column">
    <p
       v-bind:class="getClass"
    >
      {{ statusText }}
    </p>
    </div>
    <div class="column">
      <p>Done: {{ timeboxes }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Summary',
  computed: {
    ...mapGetters('timebox', {
      countdownType: 'countdownType'
    }),
    ...mapState({
      timeboxes: state => state.timebox.count,
      runType: state => state.timebox.runType
    }),
    getClass() {
      if (this.countdownType === 'rest') {
        return 'rest'
      }
      return this.runType
    },
    statusText () {
      switch (this.countdownType) {
        case 'wip':
          return 'WIP'
        case 'rest':
          return 'Rest'
        default:
          return ''
      }
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
}
.column {
  flex: 50%;
}

</style>
