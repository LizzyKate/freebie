<template>
<div>
<side></side>
<appHead></appHead>
<blanket></blanket>
<best></best>
<fill></fill>
</div>
</template>

<script>

import nav from './nav';
import head from './head';
import blanket from './blanket';
import best from './best';
import form from './form';

export default {
  components:{
    'side':nav,
    'appHead':head,
    'blanket':blanket,
    'best': best,
    'fill': form
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>