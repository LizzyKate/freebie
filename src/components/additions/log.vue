<template>
<div class="container mt-5">
   <form @submit.prevent="submit()" class="col-md-6 mx-auto">
  <div class="form-group">
    <label class="billor">Email Address</label>
    <input type="email" class="form-control opt" placeholder="Email" v-model="email" required>
  </div> 
  <div class="form-group">
    <label class="billor">Password</label>
    <input type="password" class="form-control opt" placeholder="Password" v-model="password" required>
  </div> 
  <div class="d-flex flex-row bd-highlight my-5 justify-content-center">
  <button class="ml-3 p-2 bd-highlight btn btn-lg butt" type="button" @click="cancel()">Cancel</button>
   <button class="ml-3 p-2 bd-highlight btn btn-lg butt" type="submit" :disabled="authenticate" >Submit</button>
   <button class="ml-3 p-2 bd-highlight btn btn-lg butt" type="button" >Forgot Password</button>
  </div>
 
   </form>
     
</div>
</template>

<script>

import axios from "../../axios";
import { authenticate } from "../../routeGuard";

export default {
 
   data () {
    return {
     email:'',
     password:''
    }
  }, 
 methods:{
  submit(){
    let data = {
      email: this.email,
      password: this.password
    };
    axios.post("login", data).then( ({ data }) => {
      console.log("i am posted")
      console.log(data);
      localStorage.setItem("auth-token", data.data);
      this.$router.push("/drop");
    }, 
    (err) => {
      console.log(err.response);
      if(err.response.data.error === "incorrect username or password")
      alert("Incorrect Email And Password")
    })
  },
  cancel(){
    this.email = '';
    this.password = '';
  }
},
computed:{
  authenticate(){
    if(this.email !== '' && this.password !== '' ){
    return false;
  } else{
    return true;
  }
  }
},

beforeRouteEnter(to, from, next) {
    if (authenticate()) {
      alert("You are already logged in")
        next("/drop")
      // do something //
    } else {
      next(true)
    }
  }

}
</script>

<style scoped>

</style>