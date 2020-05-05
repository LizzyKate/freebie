<template>
<div class="container w-75 mx-auto p-0 mt-5">
  <div class="row w-75 mx-auto ">
    <div class="col ">
      <div class="d-flex flex-column bd-highlight ">
  <div class=" bd-highlight">
    <h5 class="bill">Billing Address</h5>
    </div>
  <div class="mt-3 bd-highlight">
    <form @submit.prevent="submit()">
  <div class="form-group">
    <label for="exampleFormControlInput1" class="billo">Full Name</label>
    <input type="text" class="form-control opt" v-model="select" required>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1" class="billo">Address 1</label>
    <input type="text" class="form-control opt" v-model="select1" required>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1" class="billo">Address 2</label>
    <input type="text" class="form-control opt" v-model="select2" required>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1" class="billo">City</label>
    <input type="text" class="form-control opt" v-model="select3" required>
  </div>
  <div class="form-row">
    <div class="col">
      <label class="billo" >State</label>
  <select class="custom-select my-1 mr-sm-2 opt" id="inlineFormCustomSelectPref" v-model="select4" >
    <option selected>Select State</option>
    <option v-for="(select, i) in options" :key="i" :value="select.value">{{select.state}}</option>
  </select>
    </div>
     <div class="col">
      <label class="billo">Zip Code</label>
      <input type="number" class="form-control mt-1 opt" v-model="select5" required>
    </div>
  </div>
  <div class="d-flex flex-row bd-highlight justify-content-center">
  <div class="p-2 bd-highlight text-center mt-5">
    <button class="btn btn-lg butt" @click="cancel()">Cancel</button>
  </div>
  <div class="p-2 bd-highlight text-center mt-5">
    <button class="btn btn-lg butt turn" type="submit" :disabled="check">Submit</button>
  </div>
  </div>
    </form>
  </div>
</div>
    </div>
  </div>
</div>
</template>

<script>


export default {
  
  data () {
    return {
       options:[
         {
           value:1,
           state:'Abia'
         },
         {
           value:2,
           state:'Adamawa'
         },
         {
           value:3,
           state:'Akwa Ibom'
         },
         {
           value:4,
           state:'Anambra'
         },
         {
           value:5,
           state:'Bauchi'
         },
         {
           value:6,
           state:'Bayelsa'
         },
         {
           value:7,
           state:'Benue'
         },
         {
           value:8,
           state:'Borno'
         },
         {
           value:9,
           state:'Cross River'
         },
         {
           value:10,
           state:'Delta'
         },
         {
           value:11,
           state:'Ebonyi'
         },
         {
           value:12,
           state:'Edo'
         },
         {
           value:13,
           state:'Ekiti'
         },
         {
           value:14,
           state:'Enugu'
         },
         {
           value:15,
           state:'Federal Capital Territory'
         },
         {
           value:16,
           state:'Gombe'
         },
         {
           value:17,
           state:'Imo'
         },
         {
           value:18,
           state:'Jigawa'
         },
         {
           value:19,
           state:'Kaduna'
         },
         {
           value:20,
           state:'Kano'
         },
         {
           value:21,
           state:'Katsina'
         },
         {
           value:22,
           state:'Kebbi'
         },
         {
           value:23,
           state:'Kogi'
         },
         {
           value:24,
           state:'Kwara'
         },
         {
           value:25,
           state:'Lagos'
         },
         {
           value:26,
           state:'Nasarawa'
         },
         {
           value:27,
           state:'Niger'
         },
         {
           value:28,
           state:'Ogun'
         },
         {
           value:29,
           state:'Ondo'
         },
         {
           value:30,
           state:'Osun'
         },
         {
           value:31,
           state:'Oyo'
         },
         {
           value:32,
           state:'Plateau'
         },
         {
           value:33,
           state:'Rivers'
         },
         {
           value:34,
           state:'Sokoto'
         },
         {
           value:35,
           state:'Taraba'
         },
         {
           value:36,
           state:'Yobe'
         },
         {
           value:37,
           state:'Zamfara'
         }
       ],
       months:[
         {
           value:1,
           month:'January'
         },
         {
           value:2,
           month:'Febuary'
         },
         {
           value:3,
           month:'March'
         },
         {
           value:4,
           month:'April'
         },
         {
           value:5,
           month:'May'
         },
         {
           value:6,
           month:'June'
         },
         {
           value:7,
           month:'July'
         },
         {
           value:8,
           month:'August'
         },
         {
           value:9,
           month:'September'
         },
         {
           value:10,
           month:'October'
         },
         {
           value:11,
           month:'November'
         },
         {
           value:12,
           month:'December'
         }
       ],
       years:[
         {
           value:1,
           year:2020
         },
         {
           value:2,
           year:2021
         },
         {
           value:3,
           year:2022,
         },
         {
           value:4,
           year:2023
         },
         {
           value:5,
           year:2024
         },
         {
           value:6,
           year:2025
         }
       ],
       select:'',
       select1:'',
       select2:'',
       select3:'',
       select4:'',
       select5:''
    }
},
methods:{
  submit(){
    if(this.select !== '' && this.select1 !== '' && this.select2 !== '' && this.select3 !== '' && this.select4 !== ''&& this.select5 !== ''){
      alert("Submitted Sucessfully")
      this.select = ''
      this.select1 = ''
      this.select2 = ''
      this.select3 = ''
      this.select4 = ''
      this. select5 = ''
    }
  },
  cancel(){
    this.select = '';
    this.select1 = '';
    this.select2 = '';
    this.select3 = '';
    this.select4 = '';
    this.select5 = '';
  }
},
computed:{
  check:function(){
    if(this.select === '' && this.select1 === '' && this.select2 === '' && this.select3 === '' && this.select4 === '' && this.select5 === ''){
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

<style>


</style>