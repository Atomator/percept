<template>
  <div class="container-fluid">
    <div class="row">
      <div class="sidebar col-3 bg-light ">
        <router-link to="/demotask">
            <button class="btn btn-dark">Try Demo Task</button>
        </router-link>
        <button @click="logout" class="btn btn-primary">Logout</button>
      </div>
      <div class="col">
        <h1 class="text-dark font-weight-bold">Dashboard</h1>
      </div>
    </div>
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

.sidebar {
  border-radius: 0px 32px 32px 0px;   
  box-shadow: 15px 0px 25px #00000029;
}

.btn {
  margin: 15px;
}

.row {
  min-height: 100vh;
  margin-top: -60px;
}

.col, .col-3 {
  padding-top: 60px;
}

</style>
