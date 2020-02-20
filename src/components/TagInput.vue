<template>
  <div>
    <div class="inputs">
      <label>Duration</label>
      <v-select v-model="entry" ref="input" label="label" :options="options" @search="getText()">
          <template slot="option" slot-scope="option">
            {{ option.name }}
            <span v-if="option.id != 'reserved'" @click.stop="deleteTag(option.id)" class="deleteButton">
              <i style="float: right; padding-top: 3px;" class="fas fa-times text-danger"></i>
            </span>
          </template>
      </v-select>
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
      entry: '',
      tags: '',
  }),
  firestore() {
    return {
      tags: tagsCollection
    }
  },
  computed: {
    // a computed getter
    options: function () {
      // `this` points to the vm instance
      var tempTags = [{name: 'new tag: ' + this.name, label: this.name, id: 'reserved'}]
      tempTags.push(...this.tags)
      return tempTags
    }
  },
  watch: {
    entry () {      
     if (this.tags.filter(tag => (tag.name === this.name)).length == 0 && this.name != '') {
        tagsCollection.add({
          name: this.name,
          label: this.name,
          id: ''
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id)
          tagsCollection.doc(docRef.id).update({
            id: docRef.id
          })
        })
        .catch(function(error) {
          console.log("Error adding document: ", error)
        })
        this.name = ''
      }
    }
  },
  methods: {
    getText() {
      this.name = this.$refs.input.$refs.search.value
    },
    deleteTag (id) {
      this.$refs.input.open = true
      tagsCollection.doc(id).delete()
      console.log("Document removed with ID: ", id)

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
