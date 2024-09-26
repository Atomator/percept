
<template>
  <div style="margin-top:5%; ">
<section class="container-fluid">
  <section class="row justify-content-center">
       <section class="col-sm-2 col-sm-3">
            <h1 style="font-weight:bolder;">Sign Up</h1><br/>
         <div style="background:#00000012;width:450px;border-radius:25px;" class="shadow-lg p-3 mb-5 bg-white ">
          <div class="col-12 col-sm-1 col-sm-2 font-weight-bold" >
            <label for="login">Email</label>
          </div>
          <div class="col">
            <input v-model="email" type="text" id="login" name="login"> 
          </div>
           <div class="col-12 col-sm-1 col-sm-2 font-weight-bold" >
            <label for="password">Password</label>
          </div>
          <div class="col" >
            <input v-model="password" type="password" id="password" name="login"> 
          </div>
           <div class="col-12 col-sm-1 col-sm-5 font-weight-bold" >
            <label for="c_password">Confirm Password</label>
          </div>
          <div class="col" >
            <input v-model="password2" type="password" id="c_password" name="login"> 
          </div>
          <div class="form-group" >
          <input @click="signUp" type="submit" value="Sign Up"> 
          </div>
       <label style="font-weight:bold;" >or</label>
       <br/>
       <a href="#/Login" type="submit" value="Log In" style="display:inline-block;text-decoration:underline;margin-bottom:35px;font-size:20px;color:#80C0f7;">Log In</a>
      <div class="form-group">
       <a @click="googleLogin" role="button" class="btn-google btn btn-outline-primary" style="text-transform: none; margin-bottom: 15px;color:#80C0f7;"><img width="20px" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" style="margin-bottom: 3px; margin-right: 5px;"> Sign Up with Google </a>
      </div>
         </div>
      </section>
  </section>
</section>
</div>
</template>


<script>
  import firebase from 'firebase'

  export default {
    name: 'Signup',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          function () {
            this.$router.replace('dashboard')
          },
          function (err) {
            alert('Oops. ' + err.message)
          }
        )
      },
      googleLogin: function() {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(() => {
          this.$router.replace('dashboard')
        }).catch((err) => {
          alert('Oops. ' + err.message)
        })
      }
    }
  }
</script>


<style scoped>

.btn-google:hover {
  color: #ffffff !important;
}

.btn-google {
  color: #80C0F7 !important;
}

body {
  height: 100%;
  width:100%;
}


input[type=button], input[type=submit], input[type=reset]  {
  background-color: #80C0F7;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 10px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  border-radius:40px;
  margin-top:40px;
  transition: all 0.3s ease-in-out;
}

input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color: #39ace7;
}

input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
   padding: 15px 32px;
}

input[type=text], input[type=password]{
  border-radius:20px;
  background-color: #ffffff;
  color: #0d0d0d;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  padding: 15px 32px;
  width:100%;
}

input:focus {
  border-radius:20px;
  background-color: #ffffff;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  width:100%;
}
</style>


<script>
  import firebase from 'firebase'

  export default {
    name: 'Signup',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          function () {
            this.$router.replace('dashboard')
          },
          function (err) {
            alert('Oops. ' + err.message)
          }
        )
      },
      googleLogin: function() {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(() => {
          this.$router.replace('dashboard')
        }).catch((err) => {
          alert('Oops. ' + err.message)
        })
      }
    }
  }
</script>
