<template>
<div>
    <appText></appText>
    <reverse></reverse>    
</div>  
</template>

<script>

import text from './text';
import reverse from './reverse'

export default {
    components:{
        appText:text,
        reverse:reverse
    },
   data() {
    return {};
  }
};
</script>

<style>
</style>