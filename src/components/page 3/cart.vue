<template>
<div>
  <product></product>
  <bent></bent>
  <message></message>
</div>
</template>

<script>

import product from './product';
import bent from './bent';
import message from './message';

export default {
    components:{
        product:product,
        bent:bent,
        message:message
    },
    data () {
    return {

    }
  }
}
</script>

<style>

</style>
