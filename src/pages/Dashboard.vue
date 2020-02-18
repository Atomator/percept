<template>
  <div class="container-fluid">
    <div class="row section">
      <div class="sidebar col-3 bg-light">
        <router-link to="/demotask">
            <button class="btn btn-dark">Try Demo Task</button>
        </router-link>
        <button @click="logout" class="btn btn-primary">Logout</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="todo in todos" :key="todo.id">
            {{todo.name}}
            <button style="float: right;" class="btn btn-outline-danger" @click="deleteNote(todo.id)"> Delete </button>
          </li>
        </ul>
      </div>
      <div class="main col">
        <div class="row header">
          <h1 class="text-dark font-weight-bold">Dashboard</h1>
        </div>
        <div class="row calendar">
          <FullCalendar
            ref="fullCalendar"
            defaultView="timeGridWeek"
            :plugins="calendarPlugins"
            :events="calendarEvents"
          />
        </div>
        <div v-if="showModal">
          <div class="card primary-input" style="width: 18rem;">
            <div class="card-body">
              <ul class="nav justify-content-center" style="margin-bottom: 32px;">
                <li class="nav-item">
                  <a @click="whichActive = 'task'" :class="{'active': (whichActive == 'task')}" class="nav-link" href="#">Task</a>
                </li>
                <li class="nav-item">
                  <a @click="whichActive = 'tag'" :class="{'active': (whichActive == 'tag')}" class="nav-link" href="#">Tag</a>
                </li>
                <li class="nav-item">
                  <a @click="whichActive = 'open'" :class="{'active': (whichActive == 'open')}" class="nav-link" href="#">Open</a>
                </li>
              </ul>
              <TaskInput v-if="whichActive == 'task'"></TaskInput>
            </div>
          </div>
        </div>
        <button @click="showModal = !showModal" class="btn btn-round btn-lg btn-primary">
          <i v-if="!showModal" class="fas fa-plus text-light"></i>
          <i v-else class="fas fa-times text-light"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import FullCalendar from "@fullcalendar/vue"
import timeGridPlugin from "@fullcalendar/timegrid"
import '../styles/datetimepicker.css'

// Must manually include stylesheets for each plugin
import "@fullcalendar/core/main.css"
import "@fullcalendar/timegrid/main.css"

import TaskInput from "../components/TaskInput"
import { todosCollection } from '../store/firebase';


export default {
  name: 'Dashboard',
  components: {
    FullCalendar,
    TaskInput
  },
  data: () => ({
    todos: [],
    whichActive: 'task',
    showModal: false,
    calendarPlugins: [
      // plugins must be defined in the JS
      timeGridPlugin
    ],
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: "Event Dope", start: "2020-02-18T02:06:00.000Z" },
      { title: "Event Now", start: new Date(), color: "red" }
    ]
  }),
  firestore() {
    return {
      todos: todosCollection.orderBy('createdAt', 'desc')
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    deleteNote (id) {
      todosCollection.doc(id).delete()
    }
  },
  mounted () {
    let calendarApi = this.$refs.fullCalendar.getApi()
    calendarApi.setOption('height', 'parent')
    let currentHour = (new Date().getHours() + ':00').toString()
    calendarApi.scrollToTime(currentHour)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.calendar {
  height: 60vh;
}

.header {
  height: 30vh;
}

.sidebar {
  border-radius: 0px 32px 32px 0px;   
  box-shadow: 15px 0px 25px #00000029;
}

.btn {
  margin: 15px;
}

.btn-round {
  width: 64px;
  height: 64px;
  padding: 10px 16px;
  border-radius: 35px;
  font-size: 18px;
  line-height: 1.33;
  text-align: center;
  box-shadow: 5px 5px 25px #80C0F7;
  position: fixed;
  bottom: 32px;
  right: 64px; 
  z-index: 1;
}

.section {
  min-height: 100vh;
  margin-top: -60px;
}

.col, .col-3 {
  padding-top: 60px;
}

.main {
  padding-left: 128px;
  padding-right: 64px;
}

.primary-input {
  position: fixed;
  z-index: 2;
  bottom: 32px;
  right: 172px; 
  display: table;
  transition: opacity .3s ease;
  box-shadow: 15px 0px 25px #00000029;
  padding: 16px;
  border-radius: 32px;
  border: none;
}

.active {
  font-weight: 900;
  /* color: #373F47; */
}

.btn-primary, .btn-primary:hover {
  color: white;
}

</style>
