<template>
<div>
<side></side>
<fill></fill>
<foot></foot>
</div>
</template>

<script>
import nav from './nav';
import form from "./form";
import footer from "./footer";


export default {
  components:{
    'side':nav,
    'fill':form,
    'foot':footer
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>