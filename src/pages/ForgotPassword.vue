<template>
<div style="margin-top:5%; ">
<section class="container-fluid">
  <section class="row justify-content-center">
       <section class="col-sm-2 col-sm-3">
            <h1 style="font-weight:bolder;">Change Password</h1><br/>
         <div style="background:#00000012;width:450px;border-radius:25px;" class="shadow-lg p-3 mb-5 bg-white ">
          <div class="col-12 col-sm-1 col-sm-2 font-weight-bold" >
            <label for="login">Email</label>
          </div>
          <div class="col">
            <input type="text" v-model="email" id="login" name="login"> 
          <div class="form-group" >
          <input type="submit" @click="resetPassword" value="Send"> 
          </div>
         <label style="font-weight:bold;" >or</label>
        <br/>
        <router-link to='/login'> 
       <a type="submit" value="Log In" style="display:inline-block;text-decoration:underline;margin-bottom:35px;font-size:20px;color:#80C0f7;">Log In</a>
        </router-link>  
         </div>
         </div>
      </section>
  </section>
</section>
</div>
</template>

<style>

body {
  font-family: "Open Sans", sans-serif;
  height: 100%;
  width:100%;
 
}

input[type=button], input[type=submit], input[type=reset]  {
  background-color: #80C0F7;
  border: none;
  color: white;
  padding: 15px 80px;
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
  margin-top:0px;
  transition: all 0.3s ease-in-out;
}

input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color: #80C0F7;
}

input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}






</style>


<script>

import firebase from 'firebase'

export default {
  name: 'Forget',
  data() {
    return {
      email: ''
    }
  },
    methods: {
    resetPassword(){
        const auth = firebase.auth();

        auth.sendPasswordResetEmail(this.email).then(
        function() {
            alert("Password reset has been sent");
        },
        function (err) {
            alert("Oops, your email hasn't been sent because: " + err.message);
        })
     },

  }

}
</script>

