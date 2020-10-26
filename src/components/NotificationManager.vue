<template>
  <div class="notificationManager">
    <!--button v-if="notificationsSupported" @click="askPermission">Enable notifications</button-->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NotificationManager',
//   data () {
//     return {
//       notificationSupported: false,
//     }
//   },
  computed: {
    ...mapState({
      isRunning: state => state.timebox.isRunning
    })
  },
  methods: {
//    askPermission() {
//      if (this.notificationSupported) {
//        Notification.requestPermission()
//        Notification.requestPermission(result => {
//          console.log('result from permission question', result);
//          if (result !== 'granted') {
//            alert('You probably do not like notifications?!');
//          } else {
//             console.log('A notification will be send from the service worker => This only works in production');
//             this.showNotification()
//           }
//         })
//      }
//    },
    showNotification() {
      if('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
          .then(swreg => swreg.showNotification('Notifications granted', {
            body: 'Here is a first notification',
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
      // this.notificationSupported = true
      Notification.requestPermission()
    }
  }
}
</script>
