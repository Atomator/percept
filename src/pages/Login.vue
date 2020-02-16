
<template>
 <div style="margin-top:10%; " align="center" >
   <h3>Login</h3><br/>
  <div style="background:#00000012;width:350px;border-radius:25px;" class="shadow-lg p-3 mb-5 bg-white ">
    <label class="label1">Username</label>
      <input type="text" id="login" name="login"> 
       <label class="label1">Password</label>
      <input type="text" id="password" name="login" >
      <input type="submit" value="Log In"> <br/>
       <label style="font-weight:bold;" >or</label>
       <br/>
       <a type="submit" value="Log In" style="display:inline-block;text-decoration:underline;margin-bottom:35px;font-size:20px;">Sign Up</a>
  </div>
  </div>
</template>

<style>

body {
  font-family: "Open Sans", sans-serif;
  height: 100%;
  width:100%;
 
}

h3{
color:#373F47;
font-weight:bold;
font-family:  'Open Sans';
margin-bottom: 35px;
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
  margin-top:40px;
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

input[type=text] {
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
 
  
}

input[type=text]:focus {
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
}




.label1{
  background-color: #ffffff;
  color: #373F47;
  text-align: left;
  display: inline-block;
  font-size: 16px;
  width: 85%;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  margin-top:15px;
  font-weight:bold;
  margin-top:25px;
  font-weight:bold;
}



</style>


<script>
export default {
  name: 'Login',
  props: {
    msg: String
  }
}
</script>


