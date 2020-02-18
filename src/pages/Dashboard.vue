<template>
  <div class="container-fluid">
    <div class="row section">
      <div class="sidebar col-3 bg-light">
        <router-link to="/demotask">
            <button class="btn btn-dark">Try Demo Task</button>
        </router-link>
        <button @click="logout" class="btn btn-primary">Logout</button>
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
            :height="250"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import FullCalendar from "@fullcalendar/vue";
import timeGridPlugin from "@fullcalendar/timegrid";

// Must manually include stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/timegrid/main.css";

export default {
  name: 'Dashboard',
  components: {
    FullCalendar
  },
  data: () => ({
    calendarPlugins: [
      // plugins must be defined in the JS
      timeGridPlugin
    ],
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: "Event Now", start: new Date() },
      { title: "Event Now", start: new Date(), color: "red" }
    ]
  }),
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  },
  mounted () {
    setTimeout(() => {
        let calendarApi = this.$refs.fullCalendar.getApi();
        calendarApi.setOption('height', 'parent');
    }, 500);
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

</style>
