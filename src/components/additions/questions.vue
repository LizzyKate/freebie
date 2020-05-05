<template>
<div>
    <div class="container-fluid question"></div>
    <form class="mt-5 ml-5" @submit.prevent="submit()">
         <h6>1. What was the ease of your experience with our company?</h6><br>
    <b-form-select v-model="selected1" class="purk" :options="options" required=""></b-form-select><br><br>
     <h6>2. The company did everything they could to make my process as easy as possible.</h6>
    <b-form-select  :options="option2"  v-model="selected2" class="mt-3 purk" required=""></b-form-select><br><br>
    <h6>3. What kind of blanket did you purchase?</h6>
        <b-form-select  :options="option3"  v-model="selected3" class="mt-3 purk" required=""></b-form-select><br><br>
        <h6>4. The company did everything they could to make my process as easy as possible.</h6>
         <b-form-select  :options="option4" v-model="selected4" class="mt-3 purk" required=""></b-form-select><br><br>
         <h6>5. Would you purchase from our company again? </h6>
           <b-form-select  :options="option5"  v-model="selected5" class="mt-3 purk" required=""></b-form-select><br><br>
           <div class="d-flex flex-row bd-highlight justify-content-center">
  <div class="p-2 bd-highlight text-center mt-5">
    <button class="btn btn-lg butt" @click="cancel()">Cancel</button>
  </div>
  <div class="p-2 bd-highlight text-center mt-5">
    <button class="btn btn-lg butt" type="submit" :disabled="check">Submit</button>
  </div>
  </div>
    </form>

</div>
</template>

<script>


export default {
  data () {
    return {
        selected1:'',
        selected2:'',
        selected3:'',
        selected4:'',
        selected5:'',
        options: [
          { value: 'a', text: 'Difficult' },
          { value: 'b', text: 'Neutral' },
          { value: 'c', text: 'Easy' }
        ],
        option2:[
            {value:'a', text:'Disagree'},
            {value:'b', text:'Neutral'},
            {value:'c', text:'Agree'}
        ],
        option3:[
            {value:'a', text:'Comforter'},
            {value:'b', text:'Throw'},
            {value:'c', text:'Duvet'},
            {value:'d', text:'Quilt'},
            {value:'e', text:'Chenile'},
            {value:'f', text:'Cotton'},
            {value:'g', text:'Knit'},
            {value:'h', text:'Waffle Weave'},
            {value:'i', text:'Vellux'},
            {value:'j', text:'Wool'},
            {value:'k', text:'Bamboo'},
            {value:'l', text:'Down'},
            {value:'m', text:'Fleece'},
            {value:'n', text:'Shearling'}
        ],
        option4:[
            {value:'a', text:'Not Satisfied'},
            {value:'b', text:'Neutral'},
            {value:'c', text:'Satisfied'}
        ],
        option5:[
            {value:'a', text:'Yes'},
            {value:'b', text:'No'}
        ]
    }
  },
  methods:{
      submit(){
          if(this.selected1 !== '' && this.selected2 !== '' && this.selected3 !== '' && this.selected4 !== '' && this.selected5 !== ''){
              alert('Submitted Sucessfully');
               this.selected1 = '';
              this.selected2 = '';
              this.selected3 = '';
              this.selected4 = '';
              this.selected5 = '';
          } 
      },
      cancel(){
              this.selected1 = '';
              this.selected2 = '';
              this.selected3 = '';
              this.selected4 = '';
              this.selected5 = '';
      }
  },
  computed:{
  check:function(){
    if(this.selected1 === '' && this.selected2 === '' && this.selected3 === '' && this.selected4 === '' && this.selected5 === '' ){
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