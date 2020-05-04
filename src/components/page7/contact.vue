<template>
<div>
   <banner></banner>   
   <absolute></absolute>
   <reflex></reflex>
</div>  
</template>

<script>

import banner from './banner';
import absolute from './absolute';
import reflex from './reflex';
export default {
    components:{
        banner:banner,
        absolute:absolute,
        reflex:reflex
    },
   data() {
    return {};
  }
};
</script>

<style>
</style>