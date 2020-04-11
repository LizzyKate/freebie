<template>
<div>
  <product></product>
  <bent></bent>
  <message></message>
  <review></review>
  <blanket class="mt-5 import mx-auto"></blanket>
</div>
</template>

<script>

import product from './product';
import bent from './bent';
import message from './message';
import review from './review';
import blanket from '../page1/blanket';

export default {
    components:{
        product:product,
        bent:bent,
        message:message,
        review:review,
        blanket:blanket
    },
    data () {
    return {

    }
  }
}
</script>

<style>

</style>
