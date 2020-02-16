<template>
  <div>
    <h1 class="text-primary">Dashboard</h1>
    <button @click="logout" class="btn btn-primary">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Dashboard',
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
