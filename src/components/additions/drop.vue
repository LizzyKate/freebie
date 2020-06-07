<template>
<div class="container mt-5">
   <form @submit.prevent="submit()" class="col-md-6 mx-auto">
  <div class="form-group">
    <label class="billor">File Name</label>
    <input type="text" class="form-control opt" placeholder="Product Name" v-model="select" required>
  </div> 
  <div class="form-group mt-5">
    <label class="billor">Description</label>
    <textarea class="form-control opt" id="exampleFormControlTextarea1" rows="3" placeholder="Write A Detailed Description" v-model="select1" required></textarea>
     <small  class="form-text mt-5 text-muted">You will be able to edit this Information later</small>
  </div>
   <div class="form-group mt-5">
    <label class="billor">Attachment</label>
    <div class="input-group mb-3">
  <div class="custom-file opt">
    <input type="file" class="custom-file-input opt" id="inputGroupFile01" accept="image/png" multiple required>
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
</div>
 
  </div>
  <div class="d-flex flex-row bd-highlight my-5 justify-content-center">
  <button class="ml-3 p-2 bd-highlight btn btn-lg butt" type="button" @click="cancel()">Cancel</button>
   <button class="ml-3 p-2 bd-highlight btn btn-lg butt" type="submit" :disabled="check" >Submit</button>
  </div>
 
   </form>
     
</div>
</template>

<script>

import { authenticate } from "../../routeGuard"

export default {
 
  data () {
    return {
      select:'',
      select1:'',
     
    }
  }, 
 methods:{
  submit(){
    if(this.select !== '' && this.select1 !== '' ){
      alert("Submitted sucessfully")
    }
  },
  cancel(){
    this.select = '';
    this.select1 = '';
  }
},
computed:{
  check:function(){
    if(this.select === '' && this.select1 === '' ){
    return true;
    console.log("I am disabled")
  } else{
    return false;
    console.log("I am enabled")
  }
  }
},
beforeRouteEnter(to, from, next) {
    if (authenticate()) {
        next(true)
      // do something //
    } else {
      next("/login")
    }
  }
}
</script>

<style scoped>

</style>