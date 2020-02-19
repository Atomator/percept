<template>
  <div>
    <h1 class="text-primary">Welcome</h1>
    <router-link to="/login">
      <button type="button" class="btn btn-outline-primary">Login</button>
    </router-link>
    <router-link to="/signup">
      <button type="button" class="btn btn-primary">Sign Up</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  button {
    margin: 32px;
  }

</style>
