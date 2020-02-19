<template>
  <div>
    <div class="inputs">
      <label>Duration</label>
      <v-select v-model="duration" :options="durationsOptions"></v-select>
    </div>
  </div>
</template>

<script>
// !Important
// This being used to test tag creation within a single v-select


// Used to connect to firebase database
import { todosCollection } from '../store/firebase';

export default {
  name: 'TaskInput',
  data: () => ({
      name: '',
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
