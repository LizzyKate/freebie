<template>
<div>
    <check></check>
     <div class="d-flex flex-row bd-highlight mb-3 mt-5 justify-content-center align-items-center">
  <div class="p-2 bd-highlight rounded pal text-center ml-3" v-for="(card, i) in cards" :key="i" @click="pick(card.code)" :class="{'move': card.code === choose}">
      <i :class="card.syntax"></i>
      <p class="opt mt-3">{{card.name}}</p>
  </div>
</div>
    <component v-bind:is="component"></component> 
     
</div>
</template>

<script>
import check from './check'
import credit from './credit'
import pay from './pal'

export default {
  components:{
      check:check,
      credit:credit,
      pay:pay
  },
  data () {
    return {
       component:'credit',
        choose:'credit',
        cards:[
            {
                code:'credit',
                syntax:'fas fa-credit-card',
                name:'Credit Card',
                component:'credit'
            },
            {
                code:'pay',
                syntax:'fab fa-paypal',
                name:'Paypal',
                component:"pal"
            }
        ]
    }
  },
  methods:{
      pick(word){
          this.choose = word ;
         this.component = this.choose
      }
  }
}
</script>

<style scoped>
.move{
    border: 1px solid #FF7A00 !important;
}
</style>