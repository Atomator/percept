<template>
  <div>
    <h1 class="text-primary">Demo Task List</h1>
    <router-link to="/dashboard">
        <button class="btn btn-dark">Return to Dashboard</button>
    </router-link>
    <div style="margin: 50px;">
      <form>
        <div class="form-group">
          <label>
            <h5>New Todo:</h5>
            <input v-model="newTodo" class="form-control" type="text"/>
            <button class="btn btn-primary"  style="margin: 15px;" type="submit" @click.prevent="addTodo()">Add</button>
          </label>
        </div>
      </form>
    </div>
    <div>
      <p v-for="todo in todos" :key="todo.id">
        {{todo.text}}
      </p>
    </div>
  </div>
</template>

<script>

import { todosCollection } from '../store/firebase';

export default {
  name: 'DemoTask',
  data () {
    return {
      newTodo: '',
      todos: []
    }
  },
  firestore() {
    return {
      todos: todosCollection.orderBy('createdAt', 'desc')
    }
  },
  methods: {
    addTodo() {
      todosCollection.add({
        text: this.newTodo,
        completed: false,
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

</style>
