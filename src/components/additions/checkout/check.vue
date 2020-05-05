<template>
<div>
    <div>
    <h5 class="text-center mt-5 bill">Billing Info</h5>
    <p class="text-center w-25 mx-auto opt">Choose A PayMent Option Below And fill Out the Appropriate Information</p>
    </div>
    <div class="d-flex flex-row bd-highlight mb-3 mt-5 justify-content-center align-items-center">
  <div class="p-2 bd-highlight rounded pal text-center ml-3" v-for="(card, i) in cards" :key="i">
      <i :class="card.syntax"></i>
      <p class="opt mt-3">{{card.name}}</p>
  </div>
</div>

</div>
</template>

<script>


export default {
  
  data () {
    return {
        choose:'cred',
        cards:[
            {
                code:'cred',
                syntax:'fas fa-credit-card',
                name:'Credit Card'
            },
            {
                code:'pay',
                syntax:'fab fa-paypal',
                name:'Paypal'
            }
        ]
    }
  }
 
}
</script>

<style scoped>

</style>