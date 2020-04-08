<template>
<div>
   <banner></banner>
   <advice></advice>
   <pauli></pauli>
   <preview></preview>
   <note></note>
   <comment></comment>
</div>
</template>

<script>

import banner from './banner';
import advice from './advice';
import pauli from './pauli';
import preview from './preview';
import note from './note';
import comment from './comment';

export default {
    components:{
        banner:banner,
        advice:advice,
        pauli:pauli,
        preview:preview,
        note:note,
        comment:comment
    },
    data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
