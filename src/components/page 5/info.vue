<template>
<div>
   <banner></banner>
   <advice></advice>
   <pauli></pauli>
   <preview></preview>
   <note></note>
</div>
</template>

<script>

import banner from './banner';
import advice from './advice';
import pauli from './pauli';
import preview from './preview';
import note from './note';

export default {
    components:{
        banner:banner,
        advice:advice,
        pauli:pauli,
        preview:preview,
        note:note
    },
    data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
