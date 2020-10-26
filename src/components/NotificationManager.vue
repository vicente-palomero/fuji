<template>
  <div class="notificationManager">
    <button v-if="notificationSupported" @click="askPermission">Enable notifications</button>
  </div>
</template>

<script>
export default {
  name: 'NotificationManager',
  data() {
    return {
      notificationSupported: false,
    }
  },
  methods: {
    askPermission() {
      if (this.notificationSupported) {
        Notification.requestPermission(result => {
          console.log('result from permission question', result);
          if (result !== 'granted') {
            alert('You probably do not like notifications?!');
          } else {
             console.log('A notification will be send from the service worker => This only works in production');
             this.showNotification()
           }
         })
      }
    },
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
  created() {
    if ('Notification' in window && 'serviceWorker' in navigator) {
      this.notificationSupported = true
    }
  }
}
</script>
