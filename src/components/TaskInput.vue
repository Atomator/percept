<template>
  <div>
    <label>Name</label>
    <input type="text" class="form-control">
    <label>Tag</label>
    <input type="text" class="form-control">
    <label>Duration</label>
    <input type="text" class="form-control">
    <label>Due Date</label>
    <datetime type="datetime" v-model="dateTime" class="datetime"></datetime>
    <p>{{dateTime}}</p>
  </div>
</template>

<script>
export default {
  name: 'TaskInput',
  data: () => ({
      dateTime: ''
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
    float: left;
    font-weight: 500;
}

input {
    margin-bottom: 32px;
}
</style>
