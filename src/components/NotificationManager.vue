<template>
  <div class="notificationManager">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NotificationManager',
  data () {
   return {
     notificationsSupported: false,
   }
  },
  computed: {
    ...mapState({
      isRunning: state => state.timebox.isRunning,
      notificationsGranted: state => state.appState.notificationsGranted
    })
  },
  methods: {
    showNotification() {
      if('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
          .then(swreg => swreg.showNotification('Timebox is done', {
            body: 'The timebox is done, check Fujit!',
            vibrate: [300, 200, 300]
        }))
      }
    },
  },
  watch: {
    isRunning(newValue, oldValue) {
      if (oldValue && newValue !== oldValue) {
        this.showNotification()
      }
    }
  },
  created() {
    if ('Notification' in window && 'serviceWorker' in navigator) {
      this.notificationsSupported = true
    }
  },
  mounted () {
    let shallAsk = this.notificationsSupported && !this.notificationsGranted
    if (shallAsk && confirm('Do you want to allow Notifications?')) {
      Notification.requestPermission().then(result => {
        this.$store.dispatch('appState/grantNotification', result === 'granted')
      })
    }
  }
}
</script>
