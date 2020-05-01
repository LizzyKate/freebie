<template>
<div class="container mt-5">
   <form class="w-75 mx-auto">
  <div class="form-group">
    <label class="billor">File Name</label>
    <input type="text" class="form-control opt" placeholder="Product Name">
  </div> 
  <div class="form-group mt-5">
    <label class="billor">Description</label>
    <textarea class="form-control opt" id="exampleFormControlTextarea1" rows="3" placeholder="Write A Detailed Description"></textarea>
     <small  class="form-text mt-5 text-muted">You will be able to edit this Information later</small>
  </div>
   <div class="form-group mt-5">
    <label class="billor">Attachment</label>
    <div class="input-group mb-3">
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01" accept="image/png">
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
</div>
 
  </div>
  <div class="d-flex flex-row bd-highlight my-5 justify-content-end">
  <button class="ml-3 p-2 bd-highlight btn btn-lg butt" type="button" >Cancel</button>
   <button class="ml-3 p-2 bd-highlight btn btn-lg butt" type="submit" >Submit</button>
  </div>
 
   </form>
     
</div>
</template>

<script>


export default {
 
  data () {
    return {
    }
  }, 
  methods:{
     
  }
}
</script>

<style scoped>

</style>