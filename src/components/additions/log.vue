<template>
<div class="container mt-5">
   <form @submit.prevent="submit()">
  <div class="form-group">
    <label class="billor">Email Address</label>
    <input type="email" class="form-control opt" placeholder="Product Name" v-model="email" required>
  </div> 
  <div class="form-group">
    <label class="billor">Password</label>
    <input type="password" class="form-control opt" placeholder="Product Name" v-model="password" required>
  </div> 
  <div class="d-flex flex-row bd-highlight my-5 justify-content-center">
  <button class="ml-3 p-2 bd-highlight btn btn-lg butt" type="button" @click="cancel()">Cancel</button>
   <button class="ml-3 p-2 bd-highlight btn btn-lg butt" type="submit" :disabled="check" >Submit</button>
   <button class="ml-3 p-2 bd-highlight btn btn-lg butt" type="button" >Forgot Password</button>
  </div>
 
   </form>
     
</div>
</template>

<script>


export default {
 
   data () {
    return {
     email:'',
     password:''
    }
  }, 
 methods:{
  submit(){
    if(this.email !== '' && this.password !== '' ){
      alert("Submitted sucessfully")
    }
  },
  cancel(){
    this.email = '';
    this.password = '';
  }
},
computed:{
  check:function(){
    if(this.email === '' && this.password === '' ){
    return true;
    console.log("I am disabled")
  } else{
    return false;
    console.log("I am enabled")
  }
  }
}

}
</script>

<style scoped>

</style>