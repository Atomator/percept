<template>
  <div>
    <div class="inputs">
      <label>Duration</label>
      <v-select ref="input" :options="['hope']" @search="getText()" @keyup.enter.native="addTag()"></v-select>
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
// !Important
// This being used to test tag creation within a single v-select


// Used to connect to firebase database
import { tagsCollection } from '../store/firebase';

export default {
  name: 'TaskInput',
  data: () => ({
      name: '',
  }),
  methods: {
    getText() {
      this.name = this.$refs.input.$refs.search.value
      console.log(this.$refs.input.$refs.search.value)
    },
    dope() {
      console.log("entered")
    },
    addTag() {
      tagsCollection.add({
        name: this.name
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
