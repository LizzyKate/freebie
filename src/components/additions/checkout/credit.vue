<template>
<div class="container w-75 mx-auto p-0 mt-5">
  <div class="row w-75 mx-auto">
    <div class="col ">
      <div class="d-flex flex-column bd-highlight ">
  <div class=" bd-highlight">
    <h5 class="bill">Billing Address</h5>
    </div>
  <div class="mt-3 bd-highlight">
    <form>
  <div class="form-group">
    <label for="exampleFormControlInput1" class="billo">Full Name</label>
    <input type="text" class="form-control opt" required>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1" class="billo">Address 1</label>
    <input type="text" class="form-control opt" required>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1" class="billo">Address 2</label>
    <input type="text" class="form-control opt" required>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1" class="billo">City</label>
    <input type="text" class="form-control opt" required>
  </div>
  <div class="form-row">
    <div class="col">
      <label class="billo" >State</label>
  <select class="custom-select my-1 mr-sm-2 opt" id="inlineFormCustomSelectPref" >
    <option selected>Select State</option>
    <option v-for="(select, i) in options" :key="i" :value="select.value">{{select.state}}</option>
  </select>
    </div>
     <div class="col">
      <label class="billo">Zip Code</label>
      <input type="text" class="form-control mt-1 opt"  required>
    </div>
  </div>
    </form>
  </div>
</div>
    </div>
    <div class="col">
      <div class="d-flex flex-column bd-highlight ">
  <div class=" bd-highlight">
    <h5 class="bill">Credit Card Info</h5>
    <p class="opt">Your Financial Details Won't Be Shared With The Merchant</p>
    </div>
  <div class="mt-3 bd-highlight">
    <form>
  <div class="form-group">
    <label for="exampleFormControlInput1" class="billo">Name On Card</label>
    <input type="text" class="form-control opt"  required>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1" class="billo">Card Number</label>
    <input type="number" class="form-control opt"  placeholder="0000-0000-0000-0000" required>
  </div>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label class="billo">Cvv Number</label>
      <input type="number" class="form-control opt"  placeholder='cvv' required>
    </div>
    <div class="col-md-4 mb-3">
      <label class="billo">Expiry Month</label>
   <select class="custom-select my-1 mr-sm-2 opt" id="inlineFormCustomSelectPref" >
    <option selected>Month</option>
    <option v-for="(pick, i) in months" :key="i" :value="pick.value">{{pick.month}}</option>
  </select>
    </div>
    <div class="col-md-4 mb-3">
      <label class="billo">Expiry Year</label>
         <input type="number" class="form-control opt"  placeholder='cvv' required>
    </div>
  </div>
  <div class="form-group">
  <label class="billo">Contact Information</label>
  <input type="tel" class="form-control opt"  placeholder="+000-123-456-7890" required>
  </div>
  <div class="form-group">
  <label class="billo">Email Address</label>
  <input type="email" class="form-control opt"  placeholder="mail@youmail.com" required>
  </div>
    </form>
  </div>
      </div>
    </div>
  </div>
  <div class="text-center mt-5">
      <button type="submit" class="btn btn-lg butt">Submit</button>
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
       ]
    }
}
}
</script>

<style>


</style>