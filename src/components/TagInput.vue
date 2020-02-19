<template>
  <div>
    <div class="inputs">
      <label>Duration</label>
      <v-select ref="input" label="name" :options="tags" @search="getText()" @keyup.enter.native="addTag()">
          <template slot="option" slot-scope="option">
            {{ option.name }}
          </template>
      </v-select>
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
      tags: ''
  }),
  firestore() {
    return {
      tags: tagsCollection
    }
  },
  methods: {
    getText() {
      this.name = this.$refs.input.$refs.search.value
    },
    addTag() {
      if (this.tags.indexOf(this.name) == -1)
      {
        tagsCollection.add({
          name: this.name
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.log("Error adding document: ", error);
        });
      }
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
