<template>
  <div>
    <label>Name</label>
    <input v-model="name" type="text" class="form-control">
    <label class="label">Tag</label>
    <div class="v-select">
      <v-select v-model="tag" :options="['Canada', 'United States']"></v-select>
    </div>
    <label>Duration</label>
    <input type="text" v-model="duration" class="form-control">
    <label>Due Date</label>
    <datetime type="datetime" v-model="dateTime" class="datetime"></datetime>
    <p>{{dateTime}}</p>
  </div>
</template>

<script>
export default {
  name: 'TaskInput',
  data: () => ({
      name: '',
      tag: '',
      duration: '',
      dateTime: ''
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
    font-weight: 500;
}

div {
  text-align: left;
}

input, .v-select {
  margin-bottom: 32px;
}

</style>
