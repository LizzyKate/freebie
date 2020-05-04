<template>
<div>
    <banner></banner>
    <post class="mt-5"></post>
    <save class="mt-5"></save>
</div>
</template>

<script>

import banner from './banner';
import post from './post';
import save from './save';

export default {
    components:{
        banner:banner,
        post:post,
        save:save
    },
   data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
