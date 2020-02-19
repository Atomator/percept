<template>
  <div>
    <div class="inputs">
        <label>Name</label>
        <input v-model="name" type="text" class="form-control">
        <label class="label">Tag</label>
        <div class="v-select">
        <v-select v-model="tag" :options="['Canada', 'United States', 't','Canada', 'United States', 't','Canada', 'United States', 't','Canada', 'United States', 't','Canada', 'United States', 't']"></v-select>
        </div>
        <label>Duration</label>
        <v-select v-model="duration" :options="durationsOptions"></v-select>
        <label>Due Date</label>
        <datetime type="datetime" v-model="dateTime" class="datetime"></datetime>
        <p>{{dateTime}}</p>
    </div>
    <button @click="addTodo()" href="#" class="btn btn-primary">Submit</button>
  </div>
</template>

<script>
// Used to connect to firebase database
// import { tagsCollection } from '../store/firebase';
import { todosCollection } from '../store/firebase';

export default {
  name: 'TodoInput',
  data: () => ({
      name: '',
      tag: '',
      duration: '',
      dateTime: '',
      durationsOptions: [
        15,
        30,
        45,
        60,
        90,
        120
      ]
  }),
  methods: {
    addTodo() {
      todosCollection.add({
        name: this.name,
        tag: this.tag,
        duration: this.duration,
        dateTime: this.dateTime,
        createdAt: new Date()
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.log("Error adding document: ", error);
      });

      this.newTodo = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
    font-weight: 500;
}

.inputs {
  text-align: left;
}

input, .v-select {
  margin-bottom: 32px;
}

.btn-primary, .btn-primary:hover {
  color: white;
}

</style>
