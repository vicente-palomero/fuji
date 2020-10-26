<template>
  <div class="notificationManager">
    <button v-if="notificationsSupported" @click="toggleSubscription">Enable notifications</button>
    <div v-if="notificationsEnabled">
      <button @click="createPushNotification">Notify push</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationManager',
  data() {
    return {
      notificationsEnabled: false,
      notificationsSupported: false,
    }
  },
  methods: {
    toggleSubscription() {
      if (this.notificationsSupported) {
        this.buttonDisabled = true
        if (!this.notificationsEnabled) {
          Notification.requestPermission()
          .then(result => {
            if (result === 'granted') {
              this.createSubscription()
              .then(() => {
                this.showNotification()
              })
            }
          })
        }
      }
    },
    createSubscription() {
      if (this.serviceWorkerRegistration === null) {
        return navigator.serviceWorker.ready.then(swreg => {
          this.serviceWorkerRegistration = swreg
          return this.subscribe(this.serviceWorkerRegistration)
        })
      } else {
        return this.subscribe(this.serviceWorkerRegistration)
      }
    },
    getSubscription(swreg) {
      return swreg.pushManager.getSubscription()
    },
    subscribe(swreg) {
      return swreg.pushManager.subscribe({
        userVisibleOnly: true,
      })
    },
    showNotification () {
      this.serviceWorkerRegistration.showNotification('nNotifications granted', {
        body: 'Here is a first notification',
        vibrate: [300, 200, 300]
      })
    },
    findSubscription () {
      return navigator.serviceWorker.ready.then(swreg => {
        this.serviceWorkerRegistration = swreg
        return this.getSubscription(this.serviceWorkerRegistration)
      })
    },
    createPushNotification () {
      alert('this will create the push')
    },
  },
  created () {
    if ('Notification' in window && 'serviceWorker' in navigator) {
      this.notificationsSupported = true
    }
  }
}
</script>
