<template>
  <div class="summary row">
    <div class="column">
    <p
       v-bind:class="{ rest: countdownType === 'rest', work: countdownType === 'wip' }"
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
      timeboxes: state => state.timebox.count
    }),
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
